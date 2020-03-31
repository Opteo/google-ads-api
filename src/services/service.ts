import Bottleneck from 'bottleneck'
import * as grpc from 'google-ads-node'
import * as fields from 'google-ads-node/build/lib/fields'
import { getFieldMask } from 'google-ads-node/build/lib/utils'

import GrpcClient from '../grpc'
import { formatQueryResults, buildReportQuery, parseResult, parsePartialFailureErrors } from '../utils'
import { ServiceListOptions, ServiceCreateOptions } from '../types'
import { GrpcError } from '../error'
import { ReportOptions, PreReportHook, PostReportHook } from '../types'
import { SearchGoogleAdsStreamResponse, ClientReadableStream } from 'google-ads-node'

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

        // If the user passed in only one entity, convert it to an array of length 1
        if (!Array.isArray(options.entity[1])) {
            options.entity[1] = [options.entity[1]]
        }

        for (const entity of options.entity[1] as Array<object>) {
            const operation = new operationType()

            const pb = this.buildResource(options.entity[0], entity)
            operation.setUpdate(pb)

            const mask = getFieldMask(entity)
            operation.setUpdateMask(mask)

            operations.push(operation)
        }

        return this.mutate(request, operations, options)
    }

    protected async serviceDelete(options: DelMutateOptions): Promise<Mutation> {
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

        // If the user passed in only one entity, convert it to an array of length 1
        if (!Array.isArray(options.entity[1])) {
            options.entity[1] = [options.entity[1]]
        }

        for (const entity of options.entity[1] as Array<object>) {
            const operation = new operationType()
            const pb = this.buildResource(options.entity[0], entity)
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

        if (!request.setOperationsList) {
            if (operations.length > 1) {
                throw new Error(`This method only accepts one operation, but ${operations.length} were passed in.`)
            }
            request.setOperation(operations[0])
        } else {
            request.setOperationsList(operations)
        }

        if (options.hasOwnProperty('validate_only')) {
            if (!request.setValidateOnly) {
                throw new Error(`This method does not support the validate_only option.`)
            }
            request.setValidateOnly(options.validate_only)
        }
        if (options.hasOwnProperty('partial_failure')) {
            if (!request.setPartialFailure) {
                throw new Error(`This method does not support the partial_failure option.`)
            }
            request.setPartialFailure(options.partial_failure)
        }

        const response = await this.serviceCall(options.mutate, request)

        const is_single_result = response.hasOwnProperty(`result`)

        if (response.partial_failure_error) {
            response.partial_failure_error.errors = parsePartialFailureErrors(response.partial_failure_error.errors)
        }

        return {
            request: request.toObject(),
            partial_failure_error: response.partial_failure_error,
            // Always return results as an array for consistency
            results: is_single_result
                ? [response.result.resource_name]
                : response.results_list.map((r: any) => r.resource_name),
        }
    }

    protected async globalMutate(request: grpc.MutateGoogleAdsRequest): Promise<Mutation> {
        const service = this.client.getService('GoogleAdsService')
        try {
            const response = await service.mutate(request)
            const parsed_results = this.parseServiceResults([response])[0] as any

            if (parsed_results.partial_failure_error) {
                parsed_results.partial_failure_error.errors = parsePartialFailureErrors(
                    parsed_results.partial_failure_error.errors
                )
            }
            return {
                request: request.toObject(),
                partial_failure_error: parsed_results.partial_failure_error,
                results: parsed_results.mutate_operation_responses.map((r: any) => {
                    // @ts-ignore Object.values not recognised
                    const { resource_name } = Object.values(r)[0]
                    return resource_name
                }),
            }
        } catch (err) {
            throw new GrpcError(err, request)
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
            const response = await new Promise((resolve, reject) => {
                this.service[call](request, (err: any, res: any) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(res)
                    }
                })
            })
            const parsed_results = this.parseServiceResults([response])
            /* 
                Since get returns an object, we always return the first item.
                This should only ever be one item here, and it should exist.
            */
            return parsed_results[0]
        } catch (err) {
            throw new GrpcError(err, request)
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

    protected async serviceStream(
        options: ReportOptions,
        pre_report_hook: PreReportHook,
        post_report_hook: PostReportHook,
        callback: any
    ): Promise<any> {
        const query = this.buildCustomerReportQuery(options)

        const hook_result = await pre_report_hook({
            cid: this.cid,
            query,
        })

        if (hook_result) {
            return hook_result
        }

        const call = this.streamSearchData(query)
        // Listen for data (max 10,000 rows per chunk)
        // Called when the stream has finished

        // call.on("error", err => console.error(err));

        // Called when the stream has finished
        // call.on("end", () => {
        //     console.log("Finished streaming data");
        // });

        // call.on("data", (chunk: SearchGoogleAdsStreamResponse.AsObject) => {
        //     console.log(chunk.resultsList);
        // });

        // const parsed_results = this.parseServiceResults(results)

        // await post_report_hook({
        //     cid: this.cid,
        //     query,
        //     result: parsed_results,
        //     report_config: options,
        // })

        return call
    }

    /* Base query method used in global customer instance */
    protected async serviceQuery(qry: string): Promise<any> {
        const results = await this.getSearchData(qry)
        return this.parseServiceResults(results)
    }

    protected parseServiceResults(results: Array<any>): any[] {
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
            throw new GrpcError(err, request)
        }
    }

    private streamSearchData(query: string): ClientReadableStream<SearchGoogleAdsStreamResponse> {
        const { request } = this.client.buildSearchStreamRequest(this.cid, query)
        // try {
            const response = this.client.streamSearchData(request)
            return response
        // } catch (err) {
            // console.log(err)
            // throw new GrpcError(err)
        // }
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
