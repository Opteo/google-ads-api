// @ts-ignore
import { Campaign } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The campaign entity:

const campaign = {
    vanity_pharma: {
        vanity_pharma_display_url_mode: 'UNSPECIFIED | UNKNOWN | MANUFACTURER_WEBSITE_URL | WEBSITE_DESCRIPTION', // The display mode for vanity pharma URLs.
        vanity_pharma_text:
            'UNSPECIFIED | UNKNOWN | PRESCRIPTION_TREATMENT_WEBSITE_EN | PRESCRIPTION_TREATMENT_WEBSITE_ES | PRESCRIPTION_DEVICE_WEBSITE_EN | PRESCRIPTION_DEVICE_WEBSITE_ES | MEDICAL_DEVICE_WEBSITE_EN | MEDICAL_DEVICE_WEBSITE_ES | PREVENTATIVE_TREATMENT_WEBSITE_EN | PREVENTATIVE_TREATMENT_WEBSITE_ES | PRESCRIPTION_CONTRACEPTION_WEBSITE_EN | PRESCRIPTION_CONTRACEPTION_WEBSITE_ES | PRESCRIPTION_VACCINE_WEBSITE_EN | PRESCRIPTION_VACCINE_WEBSITE_ES', // The text that will be displayed in display URL of the text ad when website description is the selected display mode for vanity pharma URLs.
    },
    id: 'string', // The ID of the campaign.
    target_cpa: {
        cpc_bid_ceiling_micros: 'string', // Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.
        cpc_bid_floor_micros: 'string', // Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.
        target_cpa_micros: 'string', // Average CPA target. This target should be greater than or equal to minimum billable unit based on the currency for the account.
    },
    bidding_strategy: 'string', // Portfolio bidding strategy used by campaign.
    commission: {
        commission_rate_micros: 'string', // Commission rate defines the portion of the conversion value that the advertiser will be billed. A commission rate of x should be passed into this field as (x * 1,000,000). For example, 106,000 represents a commission rate of 0.106 (10.6%).
    },
    campaign_budget: 'string', // The budget of the campaign.
    real_time_bidding_setting: {
        opt_in: 'boolean', // Whether the campaign is opted in to real-time bidding.
    },
    maximize_conversions: {},
    target_roas: {
        cpc_bid_ceiling_micros: 'string', // Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.
        target_roas: 'number', // Required. The desired revenue (based on conversion data) per unit of spend. Value must be between 0.01 and 1000.0, inclusive.
        cpc_bid_floor_micros: 'string', // Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.
    },
    target_impression_share: {
        cpc_bid_ceiling_micros: 'string', // The highest CPC bid the automated bidding system is permitted to specify. This is a required field entered by the advertiser that sets the ceiling and specified in local micros.
        location: 'UNSPECIFIED | UNKNOWN | ANYWHERE_ON_PAGE | TOP_OF_PAGE | ABSOLUTE_TOP_OF_PAGE', // The targeted location on the search results page.
        location_fraction_micros: 'string', // The desired fraction of ads to be shown in the targeted location in micros. E.g. 1% equals 10,000.
    },
    tracking_setting: {
        tracking_url: 'string', // The url used for dynamic tracking.
    },
    advertising_channel_sub_type:
        'UNSPECIFIED | UNKNOWN | SEARCH_MOBILE_APP | DISPLAY_MOBILE_APP | SEARCH_EXPRESS | DISPLAY_EXPRESS | SHOPPING_SMART_ADS | DISPLAY_GMAIL_AD | DISPLAY_SMART_CAMPAIGN | VIDEO_OUTSTREAM | VIDEO_ACTION | VIDEO_NON_SKIPPABLE | APP_CAMPAIGN', // Optional refinement to `advertising_channel_type`. Must be a valid sub-type of the parent channel type.  Can be set only when creating campaigns. After campaign is created, the field can not be changed.
    network_settings: {
        target_search_network: 'boolean', // Whether ads will be served on partner sites in the Google Search Network (requires `target_google_search` to also be `true`).
        target_content_network: 'boolean', // Whether ads will be served on specified placements in the Google Display Network. Placements are specified using the Placement criterion.
        target_google_search: 'boolean', // Whether ads will be served with google.com search results.
        target_partner_search_network: 'boolean', // Whether ads will be served on the Google Partner Network. This is available only to some select Google partner accounts.
    },
    video_brand_safety_suitability:
        'UNSPECIFIED | UNKNOWN | EXPANDED_INVENTORY | STANDARD_INVENTORY | LIMITED_INVENTORY', // 3-Tier Brand Safety setting for the campaign.
    shopping_setting: {
        campaign_priority: 'integer', // Priority of the campaign. Campaigns with numerically higher priorities take precedence over those with lower priorities. This field is required for Shopping campaigns, with values between 0 and 2, inclusive. This field is optional for Smart Shopping campaigns, but must be equal to 3 if set.
        sales_country: 'string', // Sales country of products to include in the campaign. This field is required for Shopping campaigns. This field is immutable. This field is optional for non-Shopping campaigns, but it must be equal to 'ZZ' if set.
        enable_local: 'boolean', // Whether to include local products.
        merchant_id: 'string', // ID of the Merchant Center account. This field is required for create operations. This field is immutable for Shopping campaigns.
    },
    app_campaign_setting: {
        app_store: 'UNSPECIFIED | UNKNOWN | APPLE_APP_STORE | GOOGLE_APP_STORE', // The application store that distributes this specific app.
        bidding_strategy_goal_type:
            'UNSPECIFIED | UNKNOWN | OPTIMIZE_INSTALLS_TARGET_INSTALL_COST | OPTIMIZE_IN_APP_CONVERSIONS_TARGET_INSTALL_COST | OPTIMIZE_IN_APP_CONVERSIONS_TARGET_CONVERSION_COST | OPTIMIZE_RETURN_ON_ADVERTISING_SPEND', // Represents the goal which the bidding strategy of this app campaign should optimize towards.
        app_id: 'string', // A string that uniquely identifies a mobile application.
    },
    percent_cpc: {
        cpc_bid_ceiling_micros: 'string', // Maximum bid limit that can be set by the bid strategy. This is an optional field entered by the advertiser and specified in local micros. Note: A zero value is interpreted in the same way as having bid_ceiling undefined.
        enhanced_cpc_enabled: 'boolean', // Adjusts the bid for each auction upward or downward, depending on the likelihood of a conversion. Individual bids may exceed cpc_bid_ceiling_micros, but the average bid amount for a campaign should not.
    },
    targeting_setting: {
        target_restrictions: 'array', // The per-targeting-dimension setting to restrict the reach of your campaign or ad group.
    },
    selective_optimization: {
        conversion_actions: 'array', // The selected set of conversion actions for optimizing this campaign.
    },
    end_date: 'string', // The date when campaign ended.  This field must not be used in WHERE clauses.
    target_spend: {
        cpc_bid_ceiling_micros: 'string', // Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.
        target_spend_micros: 'string', // The spend target under which to maximize clicks. A TargetSpend bidder will attempt to spend the smaller of this value or the natural throttling spend amount. If not specified, the budget is used as the spend target.
    },
    status: 'UNSPECIFIED | UNKNOWN | ENABLED | PAUSED | REMOVED', // The status of the campaign.  When a new campaign is added, the status defaults to ENABLED.
    manual_cpv: {},
    bidding_strategy_type:
        'UNSPECIFIED | UNKNOWN | ENHANCED_CPC | MANUAL_CPC | MANUAL_CPM | MANUAL_CPV | MAXIMIZE_CONVERSIONS | MAXIMIZE_CONVERSION_VALUE | PAGE_ONE_PROMOTED | PERCENT_CPC | TARGET_CPA | TARGET_CPM | TARGET_IMPRESSION_SHARE | TARGET_OUTRANK_SHARE | TARGET_ROAS | TARGET_SPEND', // The type of bidding strategy.  A bidding strategy can be created by setting either the bidding scheme to create a standard bidding strategy or the `bidding_strategy` field to create a portfolio bidding strategy.  This field is read-only.
    dynamic_search_ads_setting: {
        language_code: 'string', // The language code specifying the language of the domain, e.g., "en".
        domain_name: 'string', // The Internet domain name that this setting represents, e.g., "google.com" or "www.google.com".
        use_supplied_urls_only: 'boolean', // Whether the campaign uses advertiser supplied URLs exclusively.
        feeds: 'array', // The list of page feeds associated with the campaign.
    },
    name: 'string', // The name of the campaign.  This field is required and should not be empty when creating new campaigns.  It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters.
    ad_serving_optimization_status:
        'UNSPECIFIED | UNKNOWN | OPTIMIZE | CONVERSION_OPTIMIZE | ROTATE | ROTATE_INDEFINITELY | UNAVAILABLE', // The ad serving optimization status of the campaign.
    payment_mode: 'UNSPECIFIED | UNKNOWN | CLICKS | CONVERSION_VALUE', // Payment mode for the campaign.
    manual_cpc: {
        enhanced_cpc_enabled: 'boolean', // Whether bids are to be enhanced based on conversion optimizer data.
    },
    url_custom_parameters: 'array', // The list of mappings used to substitute custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`.
    maximize_conversion_value: {
        target_roas: 'number', // The target return on ad spend (ROAS) option. If set, the bid strategy will maximize revenue while averaging the target return on ad spend. If the target ROAS is high, the bid strategy may not be able to spend the full budget. If the target ROAS is not set, the bid strategy will aim to achieve the highest possible ROAS for the budget.
    },
    final_url_suffix: 'string', // Suffix used to append query parameters to landing pages that are served with parallel tracking.
    geo_target_type_setting: {
        negative_geo_target_type: 'UNSPECIFIED | UNKNOWN | DONT_CARE | LOCATION_OF_PRESENCE', // The setting used for negative geotargeting in this particular campaign.
        positive_geo_target_type: 'UNSPECIFIED | UNKNOWN | DONT_CARE | AREA_OF_INTEREST | LOCATION_OF_PRESENCE', // The setting used for positive geotargeting in this particular campaign.
    },
    resource_name: 'string', // The resource name of the campaign. Campaign resource names have the form:  `customers/{customer_id}/campaigns/{campaign_id}`
    frequency_caps: 'array', // A list that limits how often each user will see this campaign's ads.
    serving_status: 'UNSPECIFIED | UNKNOWN | SERVING | NONE | ENDED | PENDING | SUSPENDED', // The ad serving status of the campaign.
    tracking_url_template: 'string', // The URL template for constructing a tracking URL.
    start_date: 'string', // The date when campaign started.  This field must not be used in WHERE clauses.
    manual_cpm: {},
    target_cpm: {},
    advertising_channel_type: 'UNSPECIFIED | UNKNOWN | SEARCH | DISPLAY | SHOPPING | HOTEL | VIDEO | MULTI_CHANNEL', // The primary serving target for ads within the campaign. The targeting options can be refined in `network_settings`.  This field is required and should not be empty when creating new campaigns.  Can be set only when creating campaigns. After the campaign is created, the field can not be changed.
    hotel_setting: {
        hotel_center_id: 'string', // The linked Hotel Center account.
    },
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'campaigns'
const MUTATE_METHOD = 'mutateCampaigns'
const MUTATE_REQUEST = 'MutateCampaignsRequest'
const OPERATION_REQUEST = 'CampaignOperation'
const GET_METHOD = 'getCampaign'
const GET_REQUEST = 'GetCampaignRequest'
const RESOURCE = 'Campaign'

export default class CampaignService extends Service {
    public async get(id: number | string): Promise<Campaign> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as Campaign
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ campaign: Campaign }>> {
        return this.getListResults('campaign', options)
    }

    public async create(campaign: Campaign | Array<Campaign>, options?: ServiceCreateOptions): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign],
            ...options,
        })
    }

    public async update(campaign: Campaign | Array<Campaign>, options?: ServiceCreateOptions): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign],
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
