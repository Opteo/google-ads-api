// @ts-ignore
import { CustomerFeed } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The customer_feed entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'customerFeeds'
const MUTATE_METHOD = 'mutateCustomerFeeds'
const MUTATE_REQUEST = 'MutateCustomerFeedsRequest'
const OPERATION_REQUEST = 'CustomerFeedOperation'
const GET_METHOD = 'getCustomerFeed'
const GET_REQUEST = 'GetCustomerFeedRequest'
const RESOURCE = 'CustomerFeed'

export default class CustomerFeedService extends Service {
    public async get(id: number | string): Promise<CustomerFeed> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CustomerFeed
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ customer_feed: CustomerFeed }>> {
        return this.getListResults('customer_feed', options)
    }

    public async create(
        customer_feed: CustomerFeed | Array<CustomerFeed>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, customer_feed],
            ...options,
        })
    }

    public async update(
        customer_feed: CustomerFeed | Array<CustomerFeed>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, customer_feed],
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
