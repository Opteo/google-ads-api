// manual_mode: This file has been manually modified and should not be touched by generate_services.js

import * as grpc from 'google-ads-node'

import GrpcClient from '../grpc'
import Bottleneck from 'bottleneck'

import Service from './service'

export type ListAccessibleCustomersResponse = Promise<{ resource_names: Array<string> }>

export default class AccessibleCustomersService extends Service {
    constructor(
        client: GrpcClient,
        throttler: Bottleneck,
        name: string
    ) {
        super('', client, throttler, name)
    }
    public listAccessibleCustomers(): ListAccessibleCustomersResponse {
        const request = new grpc.ListAccessibleCustomersRequest()
        return this.serviceCall('listAccessibleCustomers', request)
    }
}
