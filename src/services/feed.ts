// @ts-ignore
import { Feed } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'feeds'
const MUTATE_METHOD = 'mutateFeeds'
const MUTATE_REQUEST = 'MutateFeedsRequest'
const OPERATION_REQUEST = 'FeedOperation'
const GET_METHOD = 'getFeed'
const GET_REQUEST = 'GetFeedRequest'
const RESOURCE = 'Feed'

export default class FeedService extends Service {
    public async get(id: number | string): Promise<Feed> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as Feed
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ feed: Feed }>> {
        return this.getListResults('feed', options)
    }

    public async create(
        feed: Feed | Array<Feed>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, feed],
            ...options,
        })
    }

    public async update(
        feed: Feed | Array<Feed>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, feed],
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
