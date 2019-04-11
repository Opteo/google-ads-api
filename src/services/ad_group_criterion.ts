// @ts-ignore
import { AdGroupCriterion } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The ad_group_criterion entity:

const ad_group_criterion = {
    cpv_bid_micros: 'string', // The CPV (cost-per-view) bid.
    effective_cpv_bid_micros: 'string', // The effective CPV (cost-per-view) bid.
    bid_modifier: 'number', // The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers.
    type:
        'UNSPECIFIED | UNKNOWN | KEYWORD | PLACEMENT | MOBILE_APP_CATEGORY | MOBILE_APPLICATION | DEVICE | LOCATION | LISTING_GROUP | AD_SCHEDULE | AGE_RANGE | GENDER | INCOME_RANGE | PARENTAL_STATUS | YOUTUBE_VIDEO | YOUTUBE_CHANNEL | USER_LIST | PROXIMITY | TOPIC | LISTING_SCOPE | LANGUAGE | IP_BLOCK | CONTENT_LABEL | CARRIER | USER_INTEREST | WEBPAGE | OPERATING_SYSTEM_VERSION | APP_PAYMENT_MODEL | MOBILE_DEVICE | CUSTOM_AFFINITY | CUSTOM_INTENT', // The type of the criterion.
    effective_percent_cpc_bid_source:
        'UNSPECIFIED | UNKNOWN | CAMPAIGN_BIDDING_STRATEGY | AD_GROUP | AD_GROUP_CRITERION', // Source of the effective Percent CPC bid.
    user_list: {
        user_list: 'string', // The User List resource name.
    },
    user_interest: {
        user_interest_category: 'string', // The UserInterest resource name.
    },
    percent_cpc_bid_micros: 'string', // The CPC bid amount, expressed as a fraction of the advertised price for some good or service. The valid range for the fraction is [0,1) and the value stored here is 1,000,000 * [fraction].
    listing_group: {
        parent_ad_group_criterion: 'string', // Resource name of ad group criterion which is the parent listing group subdivision. Null for the root group.
        type: 'UNSPECIFIED | UNKNOWN | SUBDIVISION | UNIT', // Type of the listing group.
        case_value: {
            product_bidding_category: {
                id: 'string', // ID of the product bidding category.  This ID is equivalent to the google_product_category ID as described in this article: https://support.google.com/merchants/answer/6324436.
                country_code: 'string', // Two-letter upper-case country code of the product bidding category. It must match the campaign.shopping_setting.sales_country field.
                level: 'UNSPECIFIED | UNKNOWN | LEVEL1 | LEVEL2 | LEVEL3 | LEVEL4 | LEVEL5', // Level of the product bidding category.
            },
            product_channel_exclusivity: {
                channel_exclusivity: 'UNSPECIFIED | UNKNOWN | SINGLE_CHANNEL | MULTI_CHANNEL', // Value of the availability.
            },
            product_condition: {
                condition: 'UNSPECIFIED | UNKNOWN | NEW | REFURBISHED | USED', // Value of the condition.
            },
            hotel_class: {
                value: 'string', // Long value of the hotel class.
            },
            hotel_id: {
                value: 'string', // String value of the hotel ID.
            },
            product_item_id: {
                value: 'string', // Value of the id.
            },
            product_channel: {
                channel: 'UNSPECIFIED | UNKNOWN | ONLINE | LOCAL', // Value of the locality.
            },
            listing_brand: {
                value: 'string', // String value of the listing brand.
            },
            product_type: {
                value: 'string', // Value of the type.
                level: 'UNSPECIFIED | UNKNOWN | LEVEL1 | LEVEL2 | LEVEL3 | LEVEL4 | LEVEL5', // Level of the type.
            },
            hotel_state: {
                state_criterion: 'string', // The Geo Target Constant resource name.
            },
            hotel_city: {
                city_criterion: 'string', // The Geo Target Constant resource name.
            },
            hotel_country_region: {
                country_region_criterion: 'string', // The Geo Target Constant resource name.
            },
            unknown_listing_dimension: {},
            listing_custom_attribute: {
                value: 'string', // String value of the listing custom attribute.
                index: 'UNSPECIFIED | UNKNOWN | INDEX0 | INDEX1 | INDEX2 | INDEX3 | INDEX4', // Indicates the index of the custom attribute.
            },
        },
    },
    effective_cpm_bid_source: 'UNSPECIFIED | UNKNOWN | CAMPAIGN_BIDDING_STRATEGY | AD_GROUP | AD_GROUP_CRITERION', // Source of the effective CPM bid.
    webpage: {
        criterion_name: 'string', // The name of the criterion that is defined by this parameter. The name value will be used for identifying, sorting and filtering criteria with this type of parameters.  This field is required for CREATE operations and is prohibited on UPDATE operations.
        conditions: 'array', // Conditions, or logical expressions, for webpage targeting. The list of webpage targeting conditions are and-ed together when evaluated for targeting.  This field is required for CREATE operations and is prohibited on UPDATE operations.
    },
    cpc_bid_micros: 'string', // The CPC (cost-per-click) bid.
    placement: {
        url: 'string', // URL of the placement.  For example, "http://www.domain.com".
    },
    status: 'UNSPECIFIED | UNKNOWN | ENABLED | PAUSED | REMOVED', // The status of the criterion.
    effective_percent_cpc_bid_micros: 'string', // The effective Percent CPC bid amount.
    url_custom_parameters: 'array', // The list of mappings used to substitute custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`.
    final_url_suffix: 'string', // URL template for appending params to final URL.
    resource_name: 'string', // The resource name of the ad group criterion. Ad group criterion resource names have the form:  `customers/{customer_id}/adGroupCriteria/{ad_group_id}~{criterion_id}`
    approval_status: 'UNSPECIFIED | UNKNOWN | APPROVED | DISAPPROVED | PENDING_REVIEW | UNDER_REVIEW', // Approval status of the criterion.
    parental_status: {
        type: 'UNSPECIFIED | UNKNOWN | PARENT | NOT_A_PARENT | UNDETERMINED', // Type of the parental status.
    },
    effective_cpv_bid_source: 'UNSPECIFIED | UNKNOWN | CAMPAIGN_BIDDING_STRATEGY | AD_GROUP | AD_GROUP_CRITERION', // Source of the effective CPV bid.
    quality_info: {
        post_click_quality_score: 'UNSPECIFIED | UNKNOWN | BELOW_AVERAGE | AVERAGE | ABOVE_AVERAGE', // The quality score of the landing page.
        creative_quality_score: 'UNSPECIFIED | UNKNOWN | BELOW_AVERAGE | AVERAGE | ABOVE_AVERAGE', // The performance of the ad compared to other advertisers.
        quality_score: 'integer', // The quality score.  This field may not be populated if Google does not have enough information to determine a value.
        search_predicted_ctr: 'UNSPECIFIED | UNKNOWN | BELOW_AVERAGE | AVERAGE | ABOVE_AVERAGE', // The click-through rate compared to that of other advertisers.
    },
    tracking_url_template: 'string', // The URL template for constructing a tracking URL.
    criterion_id: 'string', // The ID of the criterion.  This field is ignored for mutates.
    age_range: {
        type:
            'UNSPECIFIED | UNKNOWN | AGE_RANGE_18_24 | AGE_RANGE_25_34 | AGE_RANGE_35_44 | AGE_RANGE_45_54 | AGE_RANGE_55_64 | AGE_RANGE_65_UP | AGE_RANGE_UNDETERMINED', // Type of the age range.
    },
    youtube_video: {
        video_id: 'string', // YouTube video id as it appears on the YouTube watch page.
    },
    custom_affinity: {
        custom_affinity: 'string', // The CustomInterest resource name.
    },
    system_serving_status: 'UNSPECIFIED | UNKNOWN | ELIGIBLE | RARELY_SERVED', // Serving status of the criterion.
    youtube_channel: {
        channel_id: 'string', // The YouTube uploader channel id or the channel code of a YouTube channel.
    },
    topic: {
        topic_constant: 'string', // The Topic Constant resource name.
        path: 'array', // The category to target or exclude. Each subsequent element in the array describes a more specific sub-category. For example, "Pets & Animals", "Pets", "Dogs" represents the "Pets & Animals/Pets/Dogs" category.
    },
    effective_cpc_bid_source: 'UNSPECIFIED | UNKNOWN | CAMPAIGN_BIDDING_STRATEGY | AD_GROUP | AD_GROUP_CRITERION', // Source of the effective CPC bid.
    negative: 'boolean', // Whether to target (`false`) or exclude (`true`) the criterion.  This field is immutable. To switch a criterion from positive to negative, remove then re-add it.
    app_payment_model: {
        type: 'UNSPECIFIED | UNKNOWN | PAID', // Type of the app payment model.
    },
    ad_group: 'string', // The ad group to which the criterion belongs.
    mobile_app_category: {
        mobile_app_category_constant: 'string', // The mobile app category constant resource name.
    },
    keyword: {
        match_type: 'UNSPECIFIED | UNKNOWN | EXACT | PHRASE | BROAD', // The match type of the keyword.
        text: 'string', // The text of the keyword (at most 80 characters and 10 words).
    },
    final_mobile_urls: 'array', // The list of possible final mobile URLs after all cross-domain redirects.
    gender: {
        type: 'UNSPECIFIED | UNKNOWN | MALE | FEMALE | UNDETERMINED', // Type of the gender.
    },
    mobile_application: {
        app_id: 'string', // A string that uniquely identifies a mobile application to Google Ads API. The format of this string is "{platform}-{platform_native_id}", where platform is "1" for iOS apps and "2" for Android apps, and where platform_native_id is the mobile application identifier native to the corresponding platform. For iOS, this native identifier is the 9 digit string that appears at the end of an App Store URL (e.g., "476943146" for "Flood-It! 2" whose App Store link is http://itunes.apple.com/us/app/flood-it!-2/id476943146). For Android, this native identifier is the application's package name (e.g., "com.labpixies.colordrips" for "Color Drips" given Google Play link https://play.google.com/store/apps/details?id=com.labpixies.colordrips). A well formed app id for Google Ads API would thus be "1-476943146" for iOS and "2-com.labpixies.colordrips" for Android. This field is required and must be set in CREATE operations.
    },
    custom_intent: {
        custom_intent: 'string', // The CustomInterest resource name.
    },
    final_urls: 'array', // The list of possible final URLs after all cross-domain redirects for the ad.
    effective_cpc_bid_micros: 'string', // The effective CPC (cost-per-click) bid.
    effective_cpm_bid_micros: 'string', // The effective CPM (cost-per-thousand viewable impressions) bid.
    cpm_bid_micros: 'string', // The CPM (cost-per-thousand viewable impressions) bid.
    income_range: {
        type:
            'UNSPECIFIED | UNKNOWN | INCOME_RANGE_0_50 | INCOME_RANGE_50_60 | INCOME_RANGE_60_70 | INCOME_RANGE_70_80 | INCOME_RANGE_80_90 | INCOME_RANGE_90_UP | INCOME_RANGE_UNDETERMINED', // Type of the income range.
    },
    position_estimates: {
        first_page_cpc_micros: 'string', // The estimate of the CPC bid required for ad to be shown on first page of search results.
        first_position_cpc_micros: 'string', // The estimate of the CPC bid required for ad to be displayed in first position, at the top of the first page of search results.
        estimated_add_clicks_at_first_position_cpc: 'string', // Estimate of how many clicks per week you might get by changing your keyword bid to the value in first_position_cpc_micros.
        estimated_add_cost_at_first_position_cpc: 'string', // Estimate of how your cost per week might change when changing your keyword bid to the value in first_position_cpc_micros.
        top_of_page_cpc_micros: 'string', // The estimate of the CPC bid required for ad to be displayed at the top of the first page of search results.
    },
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'adGroupCriteria'
const MUTATE_METHOD = 'mutateAdGroupCriteria'
const MUTATE_REQUEST = 'MutateAdGroupCriteriaRequest'
const OPERATION_REQUEST = 'AdGroupCriterionOperation'
const GET_METHOD = 'getAdGroupCriterion'
const GET_REQUEST = 'GetAdGroupCriterionRequest'
const RESOURCE = 'AdGroupCriterion'

export default class AdGroupCriterionService extends Service {
    public async get(id: number | string): Promise<AdGroupCriterion> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AdGroupCriterion
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ ad_group_criterion: AdGroupCriterion }>> {
        return this.getListResults('ad_group_criterion', options)
    }

    public async create(
        ad_group_criterion: AdGroupCriterion | Array<AdGroupCriterion>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_criterion],
            ...options,
        })
    }

    public async update(
        ad_group_criterion: AdGroupCriterion | Array<AdGroupCriterion>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_criterion],
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
