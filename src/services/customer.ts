import * as grpc from 'google-ads-node'
import { Customer } from 'google-ads-node/build/lib/resources'
import { getFieldMask } from 'google-ads-node/build/lib/utils'

import Service from './service'
import { ReportOptions, ServiceCreateOptions } from '../types'

export default class GoogleAdsService extends Service {
    public async report(options: ReportOptions): Promise<Array<any>> {
        const results = await this.serviceReport(options)
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
}
