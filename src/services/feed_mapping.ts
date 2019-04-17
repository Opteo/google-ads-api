// @ts-ignore
import { FeedMapping } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The feed_mapping entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'feedMappings'
const MUTATE_METHOD = 'mutateFeedMappings'
const MUTATE_REQUEST = 'MutateFeedMappingsRequest'
const OPERATION_REQUEST = 'FeedMappingOperation'
const GET_METHOD = 'getFeedMapping'
const GET_REQUEST = 'GetFeedMappingRequest'
const RESOURCE = 'FeedMapping'

export default class FeedMappingService extends Service {
    public async get(id: number | string): Promise<FeedMapping> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as FeedMapping
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ feed_mapping: FeedMapping }>> {
        return this.getListResults('feed_mapping', options)
    }

    public async create(
        feed_mapping: FeedMapping | Array<FeedMapping>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, feed_mapping],
            ...options,
        })
    }

    public async update(
        feed_mapping: FeedMapping | Array<FeedMapping>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, feed_mapping],
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
