import Bottleneck from 'bottleneck'
import * as grpc from 'google-ads-node'
import * as fields from 'google-ads-node/build/lib/fields'
import { getFieldMask } from 'google-ads-node/build/lib/utils'

import GrpcClient from '../grpc'
import { formatQueryResults, buildReportQuery, parseResult } from '../utils'
import { ServiceListOptions, ServiceCreateOptions } from '../types'
import { SearchGrpcError } from '../error'
import { ReportOptions, PreReportHook, PostReportHook } from '../types'

interface GetOptions {
    request: string
    resource: string
    method: string
    entity_id: string | number
}

interface MutateOptions extends ServiceCreateOptions {
    /**
     * The request name (type) e.g. "MutateCampaignsRequest"
     * This can be found in the Google Ads RPC documentation
     */
    request: string
    /**
     * The operation name (type) e.g. "MutateCampaignsOperation"
     * This can be found in the Google Ads RPC documentation
     */
    operation: string
    /**
     * The method name for the mutate operation
     * This can be found in the Google Ads RPC documentation
     */
    mutate: string
    /**
     * This is a tuple
     * The string corresponds to the entity name e.g. "Campaign"
     * The rest is a single or array of objects that will be converted
     */
    entity: [string, object | Array<object>]
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

        const id_is_resource_name =
            typeof options.entity_id === 'string' &&
            (options.entity_id.startsWith('customers/') || options.entity_id.toLowerCase().includes('constant'))

        if (id_is_resource_name) {
            request.setResourceName(options.entity_id)
        } else {
            request.setResourceName(this.buildResourceName(options.resource))
        }
        return this.serviceCall(options.method, request)
    }

    protected async serviceUpdate(options: MutateOptions): Promise<Mutation> {
        const request = new (grpc as any)[options.request]()
        const operationType = (grpc as any)[options.operation]

        const operations = []

        if (Array.isArray(options.entity[1])) {
            for (const entity of options.entity[1]) {
                const operation = new operationType()

                const pb = this.buildResource(options.entity[0], entity)
                operation.setUpdate(pb)

                const mask = getFieldMask(entity)
                operation.setUpdateMask(mask)

                operations.push(operation)
            }
        } else {
            const operation = new operationType()
            const pb = this.buildResource(...options.entity)
            operation.setUpdate(pb)

            const mask = getFieldMask(options.entity[1])
            operation.setUpdateMask(mask)

            operations.push(operation)
        }

        return this.mutate(request, operations, options)
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
        const operationType = (grpc as any)[options.operation]

        const operations = []

        if (Array.isArray(options.entity[1])) {
            for (const entity of options.entity[1]) {
                const operation = new operationType()
                const pb = this.buildResource(options.entity[0], entity)
                operation.setCreate(pb)
                operations.push(operation)
            }
        } else {
            const operation = new operationType()
            const pb = this.buildResource(...options.entity)
            operation.setCreate(pb)
            operations.push(operation)
        }

        return this.mutate(request, operations, options)
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
        if (resource.startsWith('customers/')) {
            return resource
        }
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
        const results = await this.getSearchData(query)
        return this.parseServiceResults(results)
    }

    protected buildResource(resource: string, data: any): unknown {
        const pb = this.client.buildResource(resource, data)
        return pb
    }

    /* Base report method used in global customer instance */
    protected async serviceReport(
        options: ReportOptions,
        pre_report_hook: PreReportHook,
        post_report_hook: PostReportHook
    ): Promise<any> {
        const query = this.buildCustomerReportQuery(options)

        const hook_result = await pre_report_hook({
            cid: this.cid,
            query,
        })

        if (hook_result) {
            return hook_result
        }

        const results = await this.getSearchData(query, options.page_size)
        const parsed_results = this.parseServiceResults(results)

        await post_report_hook({
            cid: this.cid,
            query,
            result: parsed_results,
            report_config: options,
        })

        return parsed_results
    }

    /* Base query method used in global customer instance */
    protected async serviceQuery(qry: string): Promise<any> {
        const results = await this.getSearchData(qry)
        return this.parseServiceResults(results)
    }

    private parseServiceResults(results: Array<any>): any[] {
        const formatted = formatQueryResults(results)
        return parseResult(formatted)
    }

    private async getSearchData(query: string, page_size: number = 10000): Promise<any> {
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

        const config: ReportOptions = {
            attributes: resource_fields,
            constraints: options && options.constraints ? options.constraints : [],
            limit: options && options.limit ? options.limit : undefined,
            entity: resource as fields.ResourceName,
        }
        const query = buildReportQuery(config)
        return query
    }

    private buildCustomerReportQuery(options: ReportOptions): string {
        const query = buildReportQuery(options)
        return query
    }
}
