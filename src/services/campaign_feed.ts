// @ts-ignore
import { CampaignFeed } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The campaign_feed entity:

const campaign_feed = {
    matching_function: {
        function_string: 'string', // String representation of the Function.  Examples: 1) IDENTITY(true) or IDENTITY(false). All or none feed items serve. 2) EQUALS(CONTEXT.DEVICE,"Mobile") 3) IN(FEED_ITEM_ID,{1000001,1000002,1000003}) 4) CONTAINS_ANY(FeedAttribute[12345678,0],{"Mars cruise","Venus cruise"}) 5) AND(IN(FEED_ITEM_ID,{10001,10002}),EQUALS(CONTEXT.DEVICE,"Mobile")) See  https: //developers.google.com/adwords/api/docs/guides/feed-matching-functions  Note that because multiple strings may represent the same underlying function (whitespace and single versus double quotation marks, for example), the value returned may not be identical to the string sent in a mutate request.
        left_operands: 'array', // The operands on the left hand side of the equation. This is also the operand to be used for single operand expressions such as NOT.
        operator: 'UNSPECIFIED | UNKNOWN | IN | IDENTITY | EQUALS | AND | CONTAINS_ANY', // Operator for a function.
        right_operands: 'array', // The operands on the right hand side of the equation.
    },
    campaign: 'string', // The campaign to which the CampaignFeed belongs.
    resource_name: 'string', // The resource name of the campaign feed. Campaign feed resource names have the form:  `customers/{customer_id}/campaignFeeds/{campaign_id}~{feed_id}
    placeholder_types: 'array', // Indicates which placeholder types the feed may populate under the connected campaign. Required.
    feed: 'string', // The feed to which the CampaignFeed belongs.
    status: 'UNSPECIFIED | UNKNOWN | ENABLED | REMOVED', // Status of the campaign feed. This field is read-only.
}

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
