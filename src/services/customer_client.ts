// @ts-ignore
import { CustomerClient } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The customer_client entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'customerClients'
const GET_METHOD = 'getCustomerClient'
const GET_REQUEST = 'GetCustomerClientRequest'

export default class CustomerClientService extends Service {
    public async get(id: number | string): Promise<CustomerClient> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CustomerClient
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ customer_client: CustomerClient }>> {
        return this.getListResults('customer_client', options)
    }
}
