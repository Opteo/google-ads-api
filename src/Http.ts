import request from 'request'
import { snakeCase, isObject, random } from 'lodash'
import retry from 'bluebird-retry'

import { getAccessToken } from './token'
import { ADWORDS_API_BASE_URL } from "./constants"

import GoogleAdsError from './Error'
import { Client, ClientConstructor, AccountInfo } from './types/Global'
import { RequestOptions, HttpController } from './types/Http'
import { ListConfig, EntityUpdateConfig, NewEntityConfig } from './types/Entity'

import parser from './parser'

export default class Http implements HttpController {
    private client : Client

    constructor({ async_account_getter, client_id, developer_token, client_secret } : ClientConstructor) {

        const account_promise = async_account_getter().then((account_info : AccountInfo) => {
            this.client.cid = account_info.cid.toString().split('-').join('')
            this.client.refresh_token = account_info.refresh_token
        })

        this.client = {
            account_promise,
            cid : '',
            refresh_token : '',
            client_id,
            developer_token,
            client_secret
        }
    }

    /* 
    *   PUBLIC METHODS
    */
    public async create(config: NewEntityConfig, entity: string) {
        await this.client.account_promise
        const url = this.getRequestUrl('mutate', entity)
        const options = await this.getRequestOptions('POST', url)

        config = this.formatRequestConfig(config, entity)
        const create_operation = { create: config }
        options.body = JSON.stringify({ operations: [ create_operation ] }) 

        return this.queryApi(options).then(response => {
            return this.mapResultsWithIds(response)
        })
    }

    public async retrieve(entity: string, entity_id?: string) {
        await this.client.account_promise
        const url = this.getRequestUrl('get', entity, entity_id)
        const options = await this.getRequestOptions('GET', url)
        return this.queryApi(options)
    }

    public async list(config: ListConfig, resource: string) {
        const query = this.buildQuery(config, resource)
        return this.query(query)
    }

    public async update(config: EntityUpdateConfig, entity: string) {
        await this.client.account_promise
        const url = this.getRequestUrl('mutate', entity)
        const options = await this.getRequestOptions('POST', url)
        
        const update_operation = {
            update: config.update,
            update_mask: this.getUpdateMask(config.update)
        }
        update_operation.update.resource_name = this.buildResourceName(entity, config.id)
        options.body = JSON.stringify({ operations: [ update_operation ] }) 
        
        return this.queryApi(options).then(response => {
            return this.mapResultsWithIds(response)
        })
    }

    public async delete(entity: string, entity_id: string) {
        await this.client.account_promise
        const url = this.getRequestUrl('mutate', entity)
        const options = await this.getRequestOptions('POST', url)

        const update_operation = {
            remove: this.buildResourceName(entity, entity_id)
        }
        options.body = JSON.stringify({ operations: [ update_operation ] }) 

        return this.queryApi(options)
    }

    public async query(query: string) {
        await this.client.account_promise
        const url = this.getRequestUrl()
        const options = await this.getRequestOptions('POST', url)

        query = query.replace(/\s/g,' ')
        options.qs = { query }

        const raw_result = await this.queryApi(options)

        return parser.parseSearch(raw_result)
    }


    /* 
    *   PRIVATE METHODS
    */
    private async queryApi(options: RequestOptions) {
        const work = async () => {
            const { response, body } = await this.doHttpRequest(options)

            if (response.statusCode === 404) {
                const { url } = options
                throw new retry.StopError(new Error(`The requested URL ${url} was not found (404).`))
            } 

            let decoded_body

            try{
                decoded_body = JSON.parse(body)
            }
            catch {
                throw new retry.StopError(new Error(`Could not decode JSON body: ${body}`))
            }
            

            if (response.statusCode === 200) {  
                return decoded_body
            }

            // if the error is in the 400 range, it's our fault, so no need to retry.
            if(response.statusCode.toString()[0] === '4'){
                throw new retry.StopError(new GoogleAdsError(decoded_body.error))
            }

            // Errors that make it here will be retried.
            throw new GoogleAdsError(decoded_body.error)
        }

        const data = await retry(work, { 
            max_tries: 3, 
            interval: 1000 + random(1000),
            throw_original : true,
            backoff : 2
        })

        const final_object = this.transformObjectKeys(data)
        return final_object

    }

    private doHttpRequest(options : RequestOptions) : Promise<any>{
        return new Promise((resolve, reject) => {
            request(options, (error, response, body) => {
                if(error){
                    reject(error)
                }
                else {
                    resolve({ response, body })
                }
            })
        })
    }

    private async getRequestOptions(method: string, url: string) : Promise<RequestOptions> {
        const access_token = await getAccessToken(this.client)

        const options = <RequestOptions>{
            method,
            url,
            headers: {
                authorization: `Bearer ${access_token}`,
                'developer-token': this.client.developer_token
            }
        }
        return options
    }

    private formatRequestConfig(config: any, entity: string) {
        if (entity.includes('campaigns')){
            config.campaign_budget = `customers/${this.client.cid}/campaignBudgets/${config.budget_id}`
            delete config.budget_id
        } else if (entity.includes('adGroups') || entity.includes('campaignCriteria')){
            config.campaign = `customers/${this.client.cid}/campaigns/${config.campaign_id}`
            delete config.campaign_id
        } else if (entity.includes('adGroupAds') || entity.includes('adGroupCriteria')){
            config.ad_group = `customers/${this.client.cid}/adGroups/${config.ad_group_id}`
            delete config.ad_group_id
        } else if (entity.includes('campaignSharedSets')){
            config.campaign = `customers/${this.client.cid}/campaigns/${config.campaign_id}`
            config.shared_set = `customers/${this.client.cid}/sharedSets/${config.shared_set_id}`
            delete config.campaign_id
            delete config.shared_set_id
        }

        return config
    }

    private getRequestUrl(operation_type?: string, endpoint?: string, entity_id?: string) : string {
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

    private buildResourceName(endpoint?: string, entity_id?: string|number) : string {
        return entity_id ? `customers/${this.client.cid}/${endpoint}/${entity_id}` : `customers/${this.client.cid}`
    }

    private getUpdateMask(update_object: any) : string {
        let mask = ''
        for (const key in update_object) {
            if (isObject(update_object[key])){
                mask += Object.keys(update_object[key]).map(child_key => `${key}.${child_key}`).join(',') 
            } else {
                mask += `${key},`
            }
        }
        return mask
    }

    private buildQuery(config: any, resource: string) : string {
        const selected_fields = config.fields.map((field: string) => `${resource}.${field}`)
        let query = `SELECT ${selected_fields.join(', ')} FROM ${resource}`

        if (config.constraints) {
            let index = 0

            if (config.constraints.ad_group_id) {
                query += ` WHERE ad_group.id = ${config.constraints.ad_group_id}`
                index += 1
                delete config.constraints.ad_group_id
            } else if (config.constraints.campaign_id) {
                query += index > 0 ? 
                    ` AND campaign.id = ${config.constraints.campaign_id}` 
                    : ` WHERE campaign.id = ${config.constraints.campaign_id}`
                index += 1
                delete config.constraints.campaign_id
            } else {
                query += ' WHERE ' 
            }

            for (const key in config.constraints) {

                if (typeof config.constraints[key] === 'object') {
                    const resource_constraints = config.constraints[key]

                    for (const resource_key in resource_constraints) {
                        index += 1

                        if (index > 1) {
                            query += ' AND '
                        }
                        query += `${resource}.${key}.${resource_key} = ${resource_constraints[resource_key]}`
                    }
                    continue
                } 
                index += 1

                if (index > 1) {
                    query += ' AND '
                }
                query += `${resource}.${key} = ${config.constraints[key]}`

            }
        }
        
        if (config.limit && config.limit > 0) {
            query += ` LIMIT ${config.limit}`
        }

        return query
    }

    private mapResultsWithIds(response: any) : object {
        const resource_name = response.results[0].resource_name
        const resource_name_split = resource_name.split('/')
        const id = resource_name_split[resource_name_split.length - 1]

        return {
            id,
            resource_name
        }
    }

    private transformObjectKeys(entity_object: any) : any {
        const final: { [key: string]: string|object } = {}

        for (const key in entity_object) {
            if (isObject(entity_object[key])) {
                final[snakeCase(key)] = this.transformObjectKeys(entity_object[key])
            } else {
                final[snakeCase(key)] = entity_object[key]   
            }
        }

        return final
    }
}
