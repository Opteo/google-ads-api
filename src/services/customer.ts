// manual_mode: This file has been manually modified and should not be touched by generate_services.js

import * as grpc from 'google-ads-node'
import { Customer } from 'google-ads-node/build/lib/resources'
import { getFieldMask } from 'google-ads-node/build/lib/utils'

import GrpcClient from '../grpc'
import Bottleneck from 'bottleneck'

import Service, { Mutation } from './service'
import {
    ReportOptions,
    ServiceCreateOptions,
    PreReportHook,
    PostReportHook,
    MutateResourceOperation,
    ReportStreamOptions,
} from '../types'

export type ReportResponse<T> = Promise<T>
export type QueryResponse = Promise<Array<any>>
export type ListAccessibleCustomersResponse = Promise<{ resource_names: Array<string> }>
export type ListResponse = Promise<Array<{ customer: Customer }>>
export type GetResponse = Promise<Customer>
export type UpdateResponse = Promise<void>
export type MutateResourcesResponse = Promise<Mutation>

export default class CustomerService extends Service {
    private post_report_hook: PostReportHook
    private pre_report_hook: PreReportHook

    constructor(
        cid: string,
        client: GrpcClient,
        throttler: Bottleneck,
        name: string,
        pre_report_hook: PreReportHook,
        post_report_hook: PostReportHook
    ) {
        super(cid, client, throttler, name)

        this.pre_report_hook = pre_report_hook
        this.post_report_hook = post_report_hook
    }

    public async report<T>(options: ReportOptions): ReportResponse<T> {
        const results = await this.serviceReport(options, this.pre_report_hook, this.post_report_hook)
        return results
    }

    public reportStream<T>(options: ReportStreamOptions): AsyncGenerator<T> {
        return this.serviceReportStream<T>(options)
    }

    public async query(qry: string): QueryResponse {
        const results = await this.serviceQuery(qry)
        return results
    }

    public listAccessibleCustomers(): ListAccessibleCustomersResponse {
        const request = new grpc.ListAccessibleCustomersRequest()
        return this.serviceCall('listAccessibleCustomers', request)
    }

    public list(): ListResponse {
        return this.getListResults('customer')
    }

    public async get(id: number | string): GetResponse {
        return this.serviceGet({
            request: 'GetCustomerRequest',
            resource: `customers/${id}`,
            method: 'getCustomer',
            entity_id: id,
        }) as Customer
    }

    public async update(customer: Customer, options?: ServiceCreateOptions): UpdateResponse {
        const request = new grpc.MutateCustomerRequest()
        const operation = new grpc.CustomerOperation()

        const pb = this.buildResource('Customer', customer) as grpc.Customer
        operation.setUpdate(pb)

        const mask = getFieldMask(customer)
        operation.setUpdateMask(mask)

        request.setCustomerId(this.cid)
        request.setOperation(operation)

        if (options && options.hasOwnProperty('validate_only')) {
            request.setValidateOnly(options.validate_only as boolean)
        }
        await new Promise((resolve, reject) => {
            this.service.mutateCustomer(request, (err: any, res: any) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    }

    // TODO: Add support for this service method
    // public async create(customer: Customer)

    public async mutateResources(
        operations: Array<MutateResourceOperation>,
        options?: ServiceCreateOptions
    ): MutateResourcesResponse {
        const request = new grpc.MutateGoogleAdsRequest()

        request.setCustomerId(this.cid)

        if (options && options.hasOwnProperty('validate_only')) {
            request.setValidateOnly(options.validate_only as boolean)
        }
        if (options && options.hasOwnProperty('partial_failure')) {
            request.setPartialFailure(options.partial_failure as boolean)
        }

        const ops: Array<grpc.MutateOperation> = []

        for (const operation of operations) {
            if (!operation.hasOwnProperty('_resource')) {
                throw new Error(`Missing "_resource" key on entity`)
            }

            const operation_resource_name = operation._resource
            let operation_mode = operation._operation

            delete operation._resource
            delete operation._operation

            /* Create the resource e.g. "CampaignBudget" */
            const pb = this.buildResource(operation_resource_name, operation)

            /* Create create|update operation of resource type e.g. "CampaignBudgetOperation" */
            // @ts-ignore Types are no use here
            const resource_operation = new grpc[`${operation_resource_name}Operation`]()

            if (!operation_mode) {
                operation_mode = 'create'
            }

            if (operation_mode !== 'create' && operation_mode !== 'update' && operation_mode !== 'delete') {
                throw new Error(`"_operation" field must be one of "create"|"update"|"delete"`)
            }

            if (operation_mode === 'create') {
                resource_operation.setCreate(pb)
            }

            if (operation_mode === 'update') {
                resource_operation.setUpdate(pb)
                const update_mask = getFieldMask(operation)
                resource_operation.setUpdateMask(update_mask)
            }

            if (operation_mode === 'delete') {
                // @ts-ignore Types are no use here
                if (!pb.toObject().hasOwnProperty('resourceName') || !pb.toObject().resourceName) {
                    throw new Error(`Must specify "resource_name" to remove when using "delete"`)
                }
                // @ts-ignore Types are no use here
                resource_operation.setRemove(pb.toObject().resourceName)
            }

            /* Add operation of resource type to global mutate operation e.g. "MutateOperation.setCampaignBudgetOperation" */
            const op = new grpc.MutateOperation()
            const operation_set_method = `set${operation_resource_name}Operation`
            // @ts-ignore Types are no use here
            op[operation_set_method](resource_operation)

            /* Push operation to MutateOperationsList */
            ops.push(op)
        }

        request.setMutateOperationsList(ops)
        const response = await this.globalMutate(request)

        return response
    }
}
