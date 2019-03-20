// @ts-ignore
import { FeedItem } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'feedItems'
const MUTATE_METHOD = 'mutateFeedItems'
const MUTATE_REQUEST = 'MutateFeedItemsRequest'
const OPERATION_REQUEST = 'FeedItemOperation'
const GET_METHOD = 'getFeedItem'
const GET_REQUEST = 'GetFeedItemRequest'
const RESOURCE = 'FeedItem'

export default class FeedItemService extends Service {
    public async get(id: number | string): Promise<FeedItem> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as FeedItem
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ feed_item: FeedItem }>> {
        return this.getListResults('feed_item', options)
    }

    public async create(
        feed_item: FeedItem | Array<FeedItem>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, feed_item],
            ...options,
        })
    }

    public async update(
        feed_item: FeedItem | Array<FeedItem>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, feed_item],
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
