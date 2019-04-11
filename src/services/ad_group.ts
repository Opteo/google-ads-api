// @ts-ignore
import { AdGroup } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The ad_group entity:

const ad_group = {
    effective_target_roas: 'number', // The effective target ROAS (return-on-ad-spend). This field is read-only.
    type:
        'UNSPECIFIED | UNKNOWN | SEARCH_STANDARD | DISPLAY_STANDARD | SHOPPING_PRODUCT_ADS | HOTEL_ADS | SHOPPING_SMART_ADS | VIDEO_BUMPER | VIDEO_TRUE_VIEW_IN_STREAM | VIDEO_TRUE_VIEW_IN_DISPLAY | VIDEO_NON_SKIPPABLE_IN_STREAM | VIDEO_OUTSTREAM | SEARCH_DYNAMIC_ADS', // The type of the ad group.
    percent_cpc_bid_micros: 'string', // The percent cpc bid amount, expressed as a fraction of the advertised price for some good or service. The valid range for the fraction is [0,1) and the value stored here is 1,000,000 * [fraction].
    targeting_setting: {
        target_restrictions: 'array', // The per-targeting-dimension setting to restrict the reach of your campaign or ad group.
    },
    cpc_bid_micros: 'string', // The maximum CPC (cost-per-click) bid.
    status: 'UNSPECIFIED | UNKNOWN | ENABLED | PAUSED | REMOVED', // The status of the ad group.
    name: 'string', // The name of the ad group.  This field is required and should not be empty when creating new ad groups.  It must contain fewer than 255 UTF-8 full-width characters.  It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters.
    url_custom_parameters: 'array', // The list of mappings used to substitute custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`.
    final_url_suffix: 'string', // URL template for appending params to Final URL.
    resource_name: 'string', // The resource name of the ad group. Ad group resource names have the form:  `customers/{customer_id}/adGroups/{ad_group_id}`
    tracking_url_template: 'string', // The URL template for constructing a tracking URL.
    target_cpa_micros: 'string', // The target CPA (cost-per-acquisition).
    explorer_auto_optimizer_setting: {
        opt_in: 'boolean', // Indicates whether the optimizer is turned on.
    },
    effective_target_cpa_micros: 'string', // The effective target CPA (cost-per-acquisition). This field is read-only.
    campaign: 'string', // The campaign to which the ad group belongs.
    ad_rotation_mode: 'UNSPECIFIED | UNKNOWN | OPTIMIZE | ROTATE_FOREVER', // The ad rotation mode of the ad group.
    effective_target_roas_source: 'UNSPECIFIED | UNKNOWN | CAMPAIGN_BIDDING_STRATEGY | AD_GROUP | AD_GROUP_CRITERION', // Source of the effective target ROAS. This field is read-only.
    cpm_bid_micros: 'string', // The maximum CPM (cost-per-thousand viewable impressions) bid.
    id: 'string', // The ID of the ad group.
    display_custom_bid_dimension:
        'UNSPECIFIED | UNKNOWN | KEYWORD | AUDIENCE | TOPIC | GENDER | AGE_RANGE | PLACEMENT | PARENTAL_STATUS | INCOME_RANGE', // Allows advertisers to specify a targeting dimension on which to place absolute bids. This is only applicable for campaigns that target only the display network and not search.
    effective_target_cpa_source: 'UNSPECIFIED | UNKNOWN | CAMPAIGN_BIDDING_STRATEGY | AD_GROUP | AD_GROUP_CRITERION', // Source of the effective target CPA. This field is read-only.
    cpv_bid_micros: 'string', // The CPV (cost-per-view) bid.
    target_roas: 'number', // The target ROAS (return-on-ad-spend) override. If the ad group's campaign bidding strategy is a standard Target ROAS strategy, then this field overrides the target ROAS specified in the campaign's bidding strategy. Otherwise, this value is ignored.
    target_cpm_micros: 'string', // Average amount in micros that the advertiser is willing to pay for every thousand times the ad is shown.
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'adGroups'
const MUTATE_METHOD = 'mutateAdGroups'
const MUTATE_REQUEST = 'MutateAdGroupsRequest'
const OPERATION_REQUEST = 'AdGroupOperation'
const GET_METHOD = 'getAdGroup'
const GET_REQUEST = 'GetAdGroupRequest'
const RESOURCE = 'AdGroup'

export default class AdGroupService extends Service {
    public async get(id: number | string): Promise<AdGroup> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AdGroup
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ ad_group: AdGroup }>> {
        return this.getListResults('ad_group', options)
    }

    public async create(ad_group: AdGroup | Array<AdGroup>, options?: ServiceCreateOptions): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group],
            ...options,
        })
    }

    public async update(ad_group: AdGroup | Array<AdGroup>, options?: ServiceCreateOptions): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group],
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
