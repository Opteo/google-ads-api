// @ts-ignore
import { AdGroupFeed } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'adGroupFeeds'
const MUTATE_METHOD = 'mutateAdGroupFeeds'
const MUTATE_REQUEST = 'MutateAdGroupFeedsRequest'
const OPERATION_REQUEST = 'AdGroupFeedOperation'
const GET_METHOD = 'getAdGroupFeed'
const GET_REQUEST = 'GetAdGroupFeedRequest'
const RESOURCE = 'AdGroupFeed'

export default class AdGroupFeedService extends Service {
    public async get(id: number | string): Promise<AdGroupFeed> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AdGroupFeed
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ ad_group_feed: AdGroupFeed }>> {
        return this.getListResults('ad_group_feed', options)
    }

    public async create(
        ad_group_feed: AdGroupFeed | Array<AdGroupFeed>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_feed],
            ...options,
        })
    }

    public async update(
        ad_group_feed: AdGroupFeed | Array<AdGroupFeed>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_feed],
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
