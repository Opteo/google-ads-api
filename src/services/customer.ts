import { Customer } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ReportOptions } from '../types'

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
}
