// @ts-ignore
import { FeedPlaceholderView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'feedPlaceholderViews'
const MUTATE_METHOD = 'mutateFeedPlaceholderViews'
const MUTATE_REQUEST = 'MutateFeedPlaceholderViewsRequest'
const OPERATION_REQUEST = 'FeedPlaceholderViewOperation'
const GET_METHOD = 'getFeedPlaceholderView'
const GET_REQUEST = 'GetFeedPlaceholderViewRequest'
const RESOURCE = 'FeedPlaceholderView'

export default class FeedPlaceholderViewService extends Service {
    public async get(id: number | string): Promise<FeedPlaceholderView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as FeedPlaceholderView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ feed_placeholder_view: FeedPlaceholderView }>> {
        return this.getListResults('feed_placeholder_view', options)
    }

    public async create(
        feed_placeholder_view: FeedPlaceholderView | Array<FeedPlaceholderView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, feed_placeholder_view],
            ...options,
        })
    }

    public async update(
        feed_placeholder_view: FeedPlaceholderView | Array<FeedPlaceholderView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, feed_placeholder_view],
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
