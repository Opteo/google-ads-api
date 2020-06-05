// manual_mode: This file has been manually modified and should not be touched by generate_services.js

import * as grpc from 'google-ads-node'
import { Customer, CreateCustomerClientResponse } from 'google-ads-node/build/lib/resources'
import { getFieldMask } from 'google-ads-node/build/lib/utils'
import { StringValue } from 'google-protobuf/google/protobuf/wrappers_pb'

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
    CreateCustomerOptions,
    CreateCustomerFlowSettings,
    QueryOptions,
} from '../types'
import { CustomerInstance } from '../customer'

export type ReportResponse<T> = Promise<T>
export type QueryResponse = Promise<Array<any>>
export type ListResponse = Promise<Array<{ customer: Customer }>>
export type GetResponse = Promise<Customer>
export type UpdateResponse = Promise<void>
export type MutateResourcesResponse = Promise<Mutation>
export type CreateCustomerResponse = Promise<CreateCustomerClientResponse | CustomerInstance>

export default class CustomerService extends Service {
    constructor(
        cid: string,
        client: GrpcClient,
        throttler: Bottleneck,
        name: string,
        private readonly pre_report_hook: PreReportHook,
        private readonly post_report_hook: PostReportHook
    ) {
        super(cid, client, throttler, name)
    }

    public async report<T>(options: ReportOptions): ReportResponse<T> {
        const results = await this.serviceReport(options, this.pre_report_hook, this.post_report_hook)
        return results
    }

    public reportStream<T>(options: ReportStreamOptions): AsyncGenerator<T> {
        return this.serviceReportStream<T>(options)
    }

    public async query(qry: string, options?: QueryOptions): QueryResponse {
        const results = await this.serviceQuery(qry, options)
        return results
    }

    public async list(): ListResponse {
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

    /**
     * Create new Customer/Account under Master Account
     * @ref https://developers.google.com/google-ads/api/reference/rpc/v3/CustomerService method CreateCustomerClient
     * @param {CreateCustomerOptions} options
     * @param {CreateCustomerFlowSettings} [flow_settings]
     * @param {boolean} [flow_settings.return_customer] Optional flag set to False by default. Provide True if you
     *   prefer to have Customer instance as result instead of CreateCustomerClientResponse
     */
    public async createCustomerClient(
        options: CreateCustomerOptions,
        flow_settings: CreateCustomerFlowSettings = { return_customer: false }
    ): CreateCustomerResponse {
        if (flow_settings && flow_settings.return_customer && !flow_settings.gads_api) {
            throw new TypeError(`Missing 'gads_api' in 'flow_settings'.`)
        }

        const request = new grpc.CreateCustomerClientRequest()

        const customerClientPB = this.buildResource('Customer', options.customer_client) as grpc.Customer

        request.setCustomerId(options.customer_id)
        request.setCustomerClient(customerClientPB)

        if (options.access_role) {
            request.setAccessRole(options.access_role)
        }

        if (options.email_address) {
            const emailValue = new StringValue()

            emailValue.setValue(options.email_address)

            request.setEmailAddress(emailValue)
        }

        const response = (await this.serviceCall('createCustomerClient', request)) as CreateCustomerClientResponse

        if (!flow_settings || !flow_settings.return_customer) {
            return response
        }

        const customer_id = (response.resource_name as string).split('/')[1]

        return flow_settings.gads_api.Customer({
            customer_account_id: customer_id,
            refresh_token: this.client.getRefreshToken(),
            login_customer_id: options.customer_id,
        })
    }
}
