import * as grpc from 'google-ads-node'
import { Customer } from 'google-ads-node/build/lib/resources'
import { getFieldMask } from 'google-ads-node/build/lib/utils'

import GrpcClient from '../grpc'
import Bottleneck from 'bottleneck'

import Service from './service'
import { ReportOptions, ServiceCreateOptions, PreReportHook, PostReportHook } from '../types'

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

    public async report(options: ReportOptions): Promise<Array<any>> {
        const results = await this.serviceReport(options, this.pre_report_hook, this.post_report_hook)
        return results
    }

    public async query(qry: string): Promise<Array<any>> {
        const results = await this.serviceQuery(qry)
        return results
    }

    // TODO: Potentially add this at some point
    // public async listAccessibleCustomers(): Promise<any> {
    //     const request = new grpc.ListAccessibleCustomersRequest()
    //     const response = await this.service.listAccessibleCustomers(request)
    //     console.log(response)
    // }

    public async list(): Promise<Array<{ customer: Customer }>> {
        return this.getListResults('customer')
    }

    public async get(id: number | string): Promise<Customer> {
        return this.serviceGet({
            request: 'GetCustomerRequest',
            resource: `customers/${id}`,
            method: 'getCustomer',
            entity_id: id,
        }) as Customer
    }

    public async update(customer: Customer, options?: ServiceCreateOptions): Promise<void> {
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

        await this.service.mutateCustomer(request)
    }

    // TODO: Add support for this service method
    // public async create(customer: Customer)
}
