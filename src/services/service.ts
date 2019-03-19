import Bottleneck from 'bottleneck'
import * as grpc from 'google-ads-node'
import * as fields from 'google-ads-node/build/lib/fields'
import { getFieldMask } from 'google-ads-node/build/lib/utils'

import GrpcClient from '../grpc'
import { formatQueryResults, buildReportQuery } from '../utils'
import parser from '../parser'
import { ReportConfig, ServiceListOptions, ServiceCreateOptions } from '../types/Global'
import { SearchGrpcError } from '../Error'

interface GetOptions {
    request: string
    resource: string
    method: string
    entity_id: string | number
}

interface MutateOptions extends ServiceCreateOptions {
    request: string
    operation: string
    mutate: string
    entity: [string, object]
}

interface DelMutateOptions extends ServiceCreateOptions {
    request: string
    operation: string
    mutate: string
    resource: string
    entity_id: string | number
}

export interface Mutation {
    request: object
    partial_failure_error: any
    results: string[]
}

export default class Service {
    protected cid: string
    protected client: GrpcClient
    protected service: any

    private throttler: Bottleneck

    constructor(cid: string, client: GrpcClient, throttler: Bottleneck, name: string) {
        this.cid = cid
        this.client = client
        this.throttler = throttler

        // This is the child specific service, e.g. "CampaignService"
        this.service = client.getService(name)
    }

    protected async serviceGet(options: GetOptions): Promise<unknown> {
        const request = new (grpc as any)[options.request]()
        if (typeof options.entity_id === 'string' && options.entity_id.startsWith('customers/')) {
            request.setResourceName(options.entity_id)
        } else {
            request.setResourceName(this.buildResourceName(options.resource))
        }
        return this.serviceCall(options.method, request)
    }

    protected async serviceUpdate(options: MutateOptions): Promise<Mutation> {
        const request = new (grpc as any)[options.request]()
        const operation = new (grpc as any)[options.operation]()

        const pb = this.buildResource(...options.entity)
        operation.setUpdate(pb)

        const mask = getFieldMask(options.entity[1])
        operation.setUpdateMask(mask)

        return this.mutate(request, [operation], options)
    }

    protected async serviceDelete(options: DelMutateOptions): Promise<any> {
        const request = new (grpc as any)[options.request]()
        const operation = new (grpc as any)[options.operation]()

        if (typeof options.entity_id === 'string' && options.entity_id.startsWith('customers/')) {
            operation.setRemove(options.entity_id)
        } else {
            operation.setRemove(this.buildResourceName(options.resource))
        }

        return this.mutate(request, [operation], options)
    }

    protected async serviceCreate(options: MutateOptions): Promise<Mutation> {
        const request = new (grpc as any)[options.request]()
        const operation = new (grpc as any)[options.operation]()

        const pb = this.buildResource(...options.entity)
        operation.setCreate(pb)

        return this.mutate(request, [operation], options)
    }

    private async mutate(
        request: any,
        operations: any[],
        options: MutateOptions | DelMutateOptions
    ): Promise<Mutation> {
        request.setCustomerId(this.cid)
        request.setOperationsList(operations)

        if (options.hasOwnProperty('validate_only')) {
            request.setValidateOnly(options.validate_only)
        }
        if (options.hasOwnProperty('partial_failure')) {
            request.setPartialFailure(options.partial_failure)
        }

        const response = await this.serviceCall(options.mutate, request)

        return {
            request: request.toObject(),
            partial_failure_error: response.partial_failure_error,
            results: response.results_list.map((r: any) => r.resourceName),
        }
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
