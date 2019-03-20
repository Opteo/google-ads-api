// @ts-ignore
import { CustomerClient } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'customerClients'
const MUTATE_METHOD = 'mutateCustomerClients'
const MUTATE_REQUEST = 'MutateCustomerClientsRequest'
const OPERATION_REQUEST = 'CustomerClientOperation'
const GET_METHOD = 'getCustomerClient'
const GET_REQUEST = 'GetCustomerClientRequest'
const RESOURCE = 'CustomerClient'

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

    public async create(
        customer_client: CustomerClient | Array<CustomerClient>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, customer_client],
            ...options,
        })
    }

    public async update(
        customer_client: CustomerClient | Array<CustomerClient>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, customer_client],
            ...options,
        })
    }

    public async delete(id: number | string, options?: ServiceCreateOptions) {
        return this.serviceDelete({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            entity_id: id,
            ...options,
        })
    }
}
