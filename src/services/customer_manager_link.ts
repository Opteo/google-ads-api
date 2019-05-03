// @ts-ignore
import { CustomerManagerLink } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'customerManagerLinks'
const MUTATE_METHOD = 'mutateCustomerManagerLink'
const MUTATE_REQUEST = 'MutateCustomerManagerLinkRequest'
const OPERATION_REQUEST = 'CustomerManagerLinkOperation'
const GET_METHOD = 'getCustomerManagerLink'
const GET_REQUEST = 'GetCustomerManagerLinkRequest'
const RESOURCE = 'CustomerManagerLink'

export default class CustomerManagerLinkService extends Service {
    public async get(id: number | string): Promise<CustomerManagerLink> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CustomerManagerLink
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ customer_manager_link: CustomerManagerLink }>> {
        return this.getListResults('customer_manager_link', options)
    }

    public async create(
        customer_manager_link: CustomerManagerLink | Array<CustomerManagerLink>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, customer_manager_link],
            ...options,
        })
    }

    public async update(
        customer_manager_link: CustomerManagerLink | Array<CustomerManagerLink>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, customer_manager_link],
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
