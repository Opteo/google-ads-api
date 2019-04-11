// @ts-ignore
import { CustomerClient } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The customer_client entity:

const customer_client = {
    level: 'int64', // Distance between given customer and client. For self link, the level value will be 0. Read only.
    resource_name: 'string', // The resource name of the customer client. CustomerClient resource names have the form: `customers/{customer_id}/customerClients/{client_customer_id}`
    client_customer: 'string', // The resource name of the client-customer which is linked to the given customer. Read only.
    hidden: 'boolean', // Specifies whether this is a hidden account. Learn more about hidden accounts <a href="https://support.google.com/google-ads/answer/7519830">here</a>. Read only.
}

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
