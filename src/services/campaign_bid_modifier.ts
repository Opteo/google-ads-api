// @ts-ignore
import { CampaignBidModifier } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The campaign_bid_modifier entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'campaignBidModifiers'
const MUTATE_METHOD = 'mutateCampaignBidModifiers'
const MUTATE_REQUEST = 'MutateCampaignBidModifiersRequest'
const OPERATION_REQUEST = 'CampaignBidModifierOperation'
const GET_METHOD = 'getCampaignBidModifier'
const GET_REQUEST = 'GetCampaignBidModifierRequest'
const RESOURCE = 'CampaignBidModifier'

export default class CampaignBidModifierService extends Service {
    public async get(id: number | string): Promise<CampaignBidModifier> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CampaignBidModifier
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ campaign_bid_modifier: CampaignBidModifier }>> {
        return this.getListResults('campaign_bid_modifier', options)
    }

    public async create(
        campaign_bid_modifier: CampaignBidModifier | Array<CampaignBidModifier>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_bid_modifier],
            ...options,
        })
    }

    public async update(
        campaign_bid_modifier: CampaignBidModifier | Array<CampaignBidModifier>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_bid_modifier],
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
