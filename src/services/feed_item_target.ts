// @ts-ignore
import { FeedItemTarget } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The feed_item_target entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'feedItemTargets'
const MUTATE_METHOD = 'mutateFeedItemTargets'
const MUTATE_REQUEST = 'MutateFeedItemTargetsRequest'
const OPERATION_REQUEST = 'FeedItemTargetOperation'
const GET_METHOD = 'getFeedItemTarget'
const GET_REQUEST = 'GetFeedItemTargetRequest'
const RESOURCE = 'FeedItemTarget'

export default class FeedItemTargetService extends Service {
    public async get(id: number | string): Promise<FeedItemTarget> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as FeedItemTarget
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ feed_item_target: FeedItemTarget }>> {
        return this.getListResults('feed_item_target', options)
    }

    public async create(
        feed_item_target: FeedItemTarget | Array<FeedItemTarget>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, feed_item_target],
            ...options,
        })
    }

    public async update(
        feed_item_target: FeedItemTarget | Array<FeedItemTarget>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, feed_item_target],
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
