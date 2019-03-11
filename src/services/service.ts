import Bottleneck from 'bottleneck'

import GrpcClient from '../grpc'
import { formatQueryResults, buildReportQuery } from '../utils'
import parser from '../parser'
import { ReportConfig } from '../types/Global'
import { SearchGrpcError } from '../Error'

export default class Service {
    protected cid: string
    protected client: GrpcClient
    protected service: any
    // protected google_ads_service: any

    // @ts-ignore
    private throttler: Bottleneck

    constructor(cid: string, client: GrpcClient, throttler: Bottleneck, name: string) {
        this.cid = cid
        this.client = client
        this.throttler = throttler

        // This is the specific service, e.g. "CampaignService"
        this.service = client.getService(name)

        // TODO: Make this is a globally available service on the GrpcClient
        // This is "GoogleAdsService", used for search queries
        // this.google_ads_service = client.getService('GoogleAdsService')
    }

    protected buildResourceName(resource: string): string {
        return `customers/${this.cid}/${resource}`
    }

    protected async serviceCall(call: string, request: any): Promise<any> {
        const response = await this.service[call](request)
        const parsed_results = this.parseServiceResults([response])
        /* 
            Since get returns an object, we always return the first item.
            This should only ever be one item here, and it should exist.
        */
        return parsed_results[0]
    }

    protected async getListResults(options: any, resource: string): Promise<any> {
        const query = this.buildListReportConfig(options, resource)
        const results = await this.report(query)
        return this.parseServiceResults(results)
    }

    // TODO: Add support for custom metrics?
    // TODO: Decide about converting micros by default in "get" methods?
    private parseServiceResults(results: Array<any>, convert_micros?: boolean): any[] {
        const formatted = formatQueryResults(results, false)
        return parser.parseResult(formatted)
    }

    private async report(query: string, page_size: number = 10000): Promise<any> {
        const { request, limit } = this.client.buildSearchRequest(this.cid, query, page_size)
        try {
            if (limit && page_size && page_size >= limit) {
                const response = await this.client.searchWithRetry(this.throttler, request)
                if (response && response.hasOwnProperty('resultsList')) {
                    return response.resultsList
                }
                return []
            }
            const response = await this.client.searchIterator(this.throttler, request, limit)
            return response
        } catch (err) {
            throw new SearchGrpcError(err, request)
        }
    }

    private buildListReportConfig(options: any, resource: string): string {
        const config: ReportConfig = {
            attributes: options.fields,
            constraints: options.constraints,
            limit: options.limit,
            entity: resource,
        }
        const { query } = buildReportQuery(config)
        return query
    }
}
