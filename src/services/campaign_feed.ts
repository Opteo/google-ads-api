// @ts-ignore
import { CampaignFeed } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The campaign_feed entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'campaignFeeds'
const MUTATE_METHOD = 'mutateCampaignFeeds'
const MUTATE_REQUEST = 'MutateCampaignFeedsRequest'
const OPERATION_REQUEST = 'CampaignFeedOperation'
const GET_METHOD = 'getCampaignFeed'
const GET_REQUEST = 'GetCampaignFeedRequest'
const RESOURCE = 'CampaignFeed'

export default class CampaignFeedService extends Service {
    public async get(id: number | string): Promise<CampaignFeed> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CampaignFeed
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ campaign_feed: CampaignFeed }>> {
        return this.getListResults('campaign_feed', options)
    }

    public async create(
        campaign_feed: CampaignFeed | Array<CampaignFeed>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_feed],
            ...options,
        })
    }

    public async update(
        campaign_feed: CampaignFeed | Array<CampaignFeed>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_feed],
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
