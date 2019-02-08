import request from 'request'
import { random, isUndefined, get, values, keys } from 'lodash'
import retry from 'bluebird-retry'
import Bottleneck from 'bottleneck'

import { getAccessToken } from './token'
import { ADWORDS_API_BASE_URL } from './constants'

import {
    getUpdateMask,
    buildListReportConfig,
    buildReportQuery,
    mapResultsWithIds,
    transformObjectKeys,
    formatQueryResults,
} from './utils'

import parser from './parser'

import GoogleAdsError from './Error'
import { Client, ClientConstructor, AccountInfo, ReportConfig } from './types/Global'
import { RequestOptions, HttpController } from './types/Http'
import { ListConfig, EntityUpdateConfig, NewEntityConfig } from './types/Entity'

// const log = (obj: any) => {
//     console.log(require('util').inspect(obj, false, null))
// }
export default class Http implements HttpController {
    private client: Client
    private throttler: Bottleneck
    private pre_query_hook: Function
    private post_query_hook: Function

    constructor({
        async_account_getter,
        client_id,
        developer_token,
        client_secret,
        throttler,
        pre_query_hook,
        post_query_hook,
    }: ClientConstructor) {
        const account_promise = async_account_getter().then((account_info: AccountInfo) => {
            const { cid, manager_cid, refresh_token } = account_info

            if (isUndefined(cid) || isUndefined(refresh_token)) {
                throw new Error('Missing required customer ID or refresh token')
            }

            this.client.refresh_token = refresh_token
            this.client.cid = cid
                .toString()
                .split('-')
                .join('')
            this.client.manager_cid = (manager_cid || '')
                .toString()
                .split('-')
                .join('')
        })

        this.throttler = throttler
        this.pre_query_hook = pre_query_hook
        this.post_query_hook = post_query_hook

        this.client = {
            account_promise,
            cid: '',
            manager_cid: '',
            refresh_token: '',
            client_id,
            developer_token,
            client_secret,
        }
    }

    /*
     *   PUBLIC METHODS
     */
    public async create(config: NewEntityConfig | NewEntityConfig[], entity: string) {
        await this.client.account_promise
        const url = this.getRequestUrl('mutate', entity)
        const options = await this.getRequestOptions('POST', url)

        if (Array.isArray(config)) {
            const operations = config.map(operation => ({ create: this.formatRequestConfig(operation, entity) }))
            options.body = JSON.stringify({ operations })
        } else {
            config = this.formatRequestConfig(config, entity)
            const create_operation = { create: config }
            options.body = JSON.stringify({ operations: [create_operation] })
        }

        return this.queryApi(options).then(response => {
            return mapResultsWithIds(response)
        })
    }

    public async retrieve(entity: string, entity_id?: string) {
        await this.client.account_promise
        const url = this.getRequestUrl('get', entity, entity_id)
        const options = await this.getRequestOptions('GET', url)
        return this.queryApi(options)
    }

    public async list(config: ListConfig, resource: string) {
        const report_config = buildListReportConfig(config, resource)

        return this.report(report_config)
    }
    public async report(config: ReportConfig) {
        const { query, custom_metrics } = buildReportQuery(config)

        await this.client.account_promise // need this to ensure that client.cid is set

        const pre_query_hook_result = await this.pre_query_hook({
            cid: this.client.cid,
            query,
            report_config: config,
        })

        if (pre_query_hook_result) {
            return pre_query_hook_result
        }

        const raw_result = await this.query(query)
        const result = await formatQueryResults(
            raw_result,
            config.entity,
            isUndefined(config.convert_micros) ? true : config.convert_micros,
            custom_metrics
        )

        const parsed_result = parser.parseResult(result)

        const modified_result = await this.post_query_hook({
            cid: this.client.cid,
            query,
            report_config: config,
            result: parsed_result,
        })

        /* 
            The user may or may not actually return a modified result. 
            If they don't, just return the original result.
        */

        return modified_result || parsed_result
    }

    public async update(config: EntityUpdateConfig | EntityUpdateConfig[], entity: string) {
        await this.client.account_promise
        const url = this.getRequestUrl('mutate', entity)
        const options = await this.getRequestOptions('POST', url)

        if (Array.isArray(config)) {
            const operations = config.map(operation => {
                const update_operation = {
                    update: operation.update,
                    update_mask: getUpdateMask(operation.update),
                }
                update_operation.update.resource_name = this.buildResourceName(entity, operation.id)
                return update_operation
            })
            options.body = JSON.stringify({ operations })
        } else {
            const update_operation = {
                update: config.update,
                update_mask: getUpdateMask(config.update),
            }
            update_operation.update.resource_name = this.buildResourceName(entity, config.id)
            options.body = JSON.stringify({ operations: [update_operation] })
        }

        return this.queryApi(options).then(response => {
            return mapResultsWithIds(response)
        })
    }

    public async delete(entity: string, entity_id: string) {
        await this.client.account_promise
        const url = this.getRequestUrl('mutate', entity)
        const options = await this.getRequestOptions('POST', url)

        const update_operation = {
            remove: this.buildResourceName(entity, entity_id),
        }
        options.body = JSON.stringify({ operations: [update_operation] })

        return this.queryApi(options)
    }

    public async query(query: string, page_size = 10000) {
        await this.client.account_promise
        const url = this.getRequestUrl()
        const options = await this.getRequestOptions('POST', url)

        query = query.replace(/\s/g, ' ')
        options.qs = { query, page_size }

        const raw_result = await this.queryApi(options)
        return raw_result
    }

    /*
     *   PRIVATE METHODS
     */
    private async queryApi(options: RequestOptions) {
        const { method, url, qs } = options
        if (
            method === 'GET' ||
            url.includes('mutate') ||
            (qs && qs.query && qs.query.toLowerCase().includes('limit'))
        ) {
            const response = await this.queryWithRetry(options)

            /*
                Sometimes the API returns no `results` field in the response when
                there are no results. In that case, all it returns is the `fieldMask`.
            */
            if (keys(response).length === 1 && keys(response)[0] === 'fieldMask') {
                return []
            }

            return response.results ? values(transformObjectKeys(response.results)) : transformObjectKeys(response)
        }

        return this.queryIterator(options)
    }

    private async queryIterator(options: RequestOptions) {
        let query_results: object[] = []
        let page = 0
        let num_results = 0
        let max_results = 0
        let next_page_token: string = ''

        const hasNextPage = () => {
            if (page === 0) {
                return true
            }
            if (num_results >= max_results) {
                return false
            }

            return true
        }

        const getNextPage = async () => {
            if (options.qs && next_page_token && next_page_token.length > 0) {
                options.qs.page_token = next_page_token
            }

            const data = await this.queryWithRetry(options)
            const { totalResultsCount, nextPageToken, results } = data
            page += 1
            if (max_results === 0 && totalResultsCount) {
                max_results = totalResultsCount
            }

            if (nextPageToken) {
                next_page_token = nextPageToken
            }

            if (results && results.length > 0) {
                num_results += results.length
                return values(transformObjectKeys(results))
            }

            return []
        }

        while (hasNextPage()) {
            const page_data = await getNextPage()
            query_results = query_results.concat(page_data)
        }

        return parser.parseResult(query_results)
    }

    private async queryWithRetry(options: RequestOptions) {
        const work = async () => {
            const { response, body } = await this.throttler.wrap(this.doHttpRequest).withOptions(
                {
                    expiration: 1000 * 60, // 1 minute until we give up.
                },
                options
            )

            if (response.statusCode === 404) {
                const { url } = options
                throw new retry.StopError(new Error(`The requested URL ${url} was not found (404).`))
            }

            let decoded_body

            try {
                decoded_body = JSON.parse(body)
            } catch {
                throw new retry.StopError(new Error(`Could not decode JSON body: ${body}`))
            }

            if (response.statusCode === 200) {
                return decoded_body
            }

            // if the error is in the 400 range, it's our fault, so no need to retry.
            if (response.statusCode.toString()[0] === '4') {
                if (
                    get(decoded_body, 'error.details[0].errors[0].errorCode.databaseError') ===
                    'CONCURRENT_MODIFICATION'
                ) {
                    throw new GoogleAdsError(decoded_body.error)
                }
                throw new retry.StopError(new GoogleAdsError(decoded_body.error))
            }

            // Errors that make it here will be retried.
            throw new GoogleAdsError(decoded_body.error)
        }

        return retry(work, {
            max_tries: 3,
            interval: 1000 + random(1000),
            throw_original: true,
            backoff: 2,
        })
    }

    private doHttpRequest(options: RequestOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            request(options, (error, response, body) => {
                if (error) {
                    reject(error)
                } else {
                    resolve({ response, body })
                }
            })
        })
    }

    private async getRequestOptions(method: string, url: string): Promise<RequestOptions> {
        const access_token = await getAccessToken(this.client)
        const headers: any = {
            'Content-Type': 'application/json',
            authorization: `Bearer ${access_token}`,
            'developer-token': this.client.developer_token,
        }

        if (this.client.manager_cid && this.client.manager_cid.length > 0) {
            headers['login-customer-id'] = this.client.manager_cid
        }

        const options = <RequestOptions>{
            method,
            url,
            headers,
        }

        return options
    }

    private formatRequestConfig(config: any, entity: string) {
        if (entity.includes('campaigns')) {
            config.campaign_budget = `customers/${this.client.cid}/campaignBudgets/${config.budget_id}`
            delete config.budget_id
        } else if (entity.includes('adGroups') || entity.includes('campaignCriteria')) {
            config.campaign = `customers/${this.client.cid}/campaigns/${config.campaign_id}`
            delete config.campaign_id
        } else if (entity.includes('adGroupAds') || entity.includes('adGroupCriteria')) {
            config.ad_group = `customers/${this.client.cid}/adGroups/${config.ad_group_id}`
            delete config.ad_group_id
        } else if (entity.includes('campaignSharedSets')) {
            config.campaign = `customers/${this.client.cid}/campaigns/${config.campaign_id}`
            config.shared_set = `customers/${this.client.cid}/sharedSets/${config.shared_set_id}`
            delete config.campaign_id
            delete config.shared_set_id
        } else if (entity.includes('sharedCriteria')) {
            config.shared_set = `customers/${this.client.cid}/sharedSets/${config.shared_set_id}`
            delete config.shared_set_id
        }

        return config
    }

    private getRequestUrl(operation_type?: string, endpoint?: string, entity_id?: string): string {
        if (endpoint && endpoint.includes('customers')) {
            return `${ADWORDS_API_BASE_URL}${this.client.cid}`
        }
        if (operation_type && operation_type.includes('get')) {
            return `${ADWORDS_API_BASE_URL}${this.client.cid}/${endpoint}/${entity_id}`
        }
        if (operation_type && operation_type.includes('mutate')) {
            return `${ADWORDS_API_BASE_URL}${this.client.cid}/${endpoint}:mutate`
        }
        return `${ADWORDS_API_BASE_URL}${this.client.cid}/googleAds:search`
    }

    private buildResourceName(endpoint?: string, entity_id?: string | number): string {
        return entity_id ? `customers/${this.client.cid}/${endpoint}/${entity_id}` : `customers/${this.client.cid}`
    }
}
