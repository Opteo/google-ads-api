// @ts-ignore
import { CustomerClientLink } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'customerClientLinks'
const MUTATE_METHOD = 'mutateCustomerClientLink'
const MUTATE_REQUEST = 'MutateCustomerClientLinkRequest'
const OPERATION_REQUEST = 'CustomerClientLinkOperation'
const GET_METHOD = 'getCustomerClientLink'
const GET_REQUEST = 'GetCustomerClientLinkRequest'
const RESOURCE = 'CustomerClientLink'

export default class CustomerClientLinkService extends Service {
    public async get(id: number | string): Promise<CustomerClientLink> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CustomerClientLink
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ customer_client_link: CustomerClientLink }>> {
        return this.getListResults('customer_client_link', options)
    }

    public async create(
        customer_client_link: CustomerClientLink | Array<CustomerClientLink>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, customer_client_link],
            ...options,
        })
    }

    public async update(
        customer_client_link: CustomerClientLink | Array<CustomerClientLink>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, customer_client_link],
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
