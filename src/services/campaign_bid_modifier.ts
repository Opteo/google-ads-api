// @ts-ignore
import { CampaignBidModifier } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The campaign_bid_modifier entity:

const campaign_bid_modifier = {
    criterion_id: 'int64', // The ID of the criterion to bid modify.  This field is ignored for mutates.
    campaign: 'string', // The campaign to which this criterion belongs.
    resource_name: 'string', // The resource name of the campaign bid modifier. Campaign bid modifier resource names have the form:  `customers/{customer_id}/campaignBidModifiers/{campaign_id}~{criterion_id}`
    bid_modifier: 'double', // The modifier for the bid when the criterion matches.
    interaction_type: {
        type: 'UNSPECIFIED | UNKNOWN | CALLS', // The interaction type.
    },
}

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
