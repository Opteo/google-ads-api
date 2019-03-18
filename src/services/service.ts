import Bottleneck from 'bottleneck'

import GrpcClient from '../grpc'
import { formatQueryResults, buildReportQuery } from '../utils'
import parser from '../parser'
import { ReportConfig, ServiceListOptions } from '../types/Global'
import { SearchGrpcError } from '../Error'

import * as fields from 'google-ads-node/build/lib/fields'

export default class Service {
    protected cid: string
    protected client: GrpcClient
    protected service: any

    // @ts-ignore
    private throttler: Bottleneck

    constructor(cid: string, client: GrpcClient, throttler: Bottleneck, name: string) {
        this.cid = cid
        this.client = client
        this.throttler = throttler

        // This is the child specific service, e.g. "CampaignService"
        this.service = client.getService(name)
    }

    protected buildResourceName(resource: string): string {
        return `customers/${this.cid}/${resource}`
    }

    protected async serviceCall(call: string, request: any): Promise<any> {
        try {
            const response = await this.service[call](request)
            const parsed_results = this.parseServiceResults([response])
            /* 
                Since get returns an object, we always return the first item.
                This should only ever be one item here, and it should exist.
            */
            return parsed_results[0]
        } catch (err) {
            throw new SearchGrpcError(err, request)
        }
    }

    protected async getListResults(resource: string, options?: ServiceListOptions): Promise<any> {
        const query = this.buildListQuery(resource, options)
        const results = await this.report(query)
        return this.parseServiceResults(results)
    }

    protected buildResource(resource: string, data: any): unknown {
        const pb = this.client.buildResource(resource, data)
        return pb
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

    private buildListQuery(resource: string, options?: ServiceListOptions): string {
        if (!fields.hasOwnProperty(resource)) {
            throw new Error(`Resource "${resource}" not found in google-ads-node compiled resources (fields.ts).`)
        }
        const resource_fields = (fields as any)[resource]

        const config: ReportConfig = {
            attributes: resource_fields,
            constraints: options && options.constraints ? options.constraints : [],
            limit: options && options.limit ? options.limit : undefined,
            entity: resource,
        }
        const { query } = buildReportQuery(config)
        return query
    }
}
