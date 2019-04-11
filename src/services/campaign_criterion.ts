// @ts-ignore
import { CampaignCriterion } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The campaign_criterion entity:

const campaign_criterion = {
    location: {
        geo_target_constant: 'string', // The geo target constant resource name.
    },
    resource_name: 'string', // The resource name of the campaign criterion. Campaign criterion resource names have the form:  `customers/{customer_id}/campaignCriteria/{campaign_id}~{criterion_id}`
    parental_status: {
        type: 'UNSPECIFIED | UNKNOWN | PARENT | NOT_A_PARENT | UNDETERMINED', // Type of the parental status.
    },
    content_label: {
        type:
            'UNSPECIFIED | UNKNOWN | SEXUALLY_SUGGESTIVE | BELOW_THE_FOLD | PARKED_DOMAIN | GAME | JUVENILE | PROFANITY | TRAGEDY | VIDEO | VIDEO_RATING_DV_G | VIDEO_RATING_DV_PG | VIDEO_RATING_DV_T | VIDEO_RATING_DV_MA | VIDEO_NOT_YET_RATED | EMBEDDED_VIDEO | LIVE_STREAMING_VIDEO', // Content label type, required for CREATE operations.
    },
    criterion_id: 'string', // The ID of the criterion.  This field is ignored during mutate.
    age_range: {
        type:
            'UNSPECIFIED | UNKNOWN | AGE_RANGE_18_24 | AGE_RANGE_25_34 | AGE_RANGE_35_44 | AGE_RANGE_45_54 | AGE_RANGE_55_64 | AGE_RANGE_65_UP | AGE_RANGE_UNDETERMINED', // Type of the age range.
    },
    youtube_video: {
        video_id: 'string', // YouTube video id as it appears on the YouTube watch page.
    },
    youtube_channel: {
        channel_id: 'string', // The YouTube uploader channel id or the channel code of a YouTube channel.
    },
    topic: {
        topic_constant: 'string', // The Topic Constant resource name.
        path: 'array', // The category to target or exclude. Each subsequent element in the array describes a more specific sub-category. For example, "Pets & Animals", "Pets", "Dogs" represents the "Pets & Animals/Pets/Dogs" category.
    },
    negative: 'boolean', // Whether to target (`false`) or exclude (`true`) the criterion.
    mobile_app_category: {
        mobile_app_category_constant: 'string', // The mobile app category constant resource name.
    },
    campaign: 'string', // The campaign to which the criterion belongs.
    keyword: {
        match_type: 'UNSPECIFIED | UNKNOWN | EXACT | PHRASE | BROAD', // The match type of the keyword.
        text: 'string', // The text of the keyword (at most 80 characters and 10 words).
    },
    proximity: {
        radius_units: 'UNSPECIFIED | UNKNOWN | MILES | KILOMETERS', // The unit of measurement of the radius. Default is KILOMETERS.
        address: {
            city_name: 'string', // Name of the city.
            country_code: 'string', // Country code.
            postal_code: 'string', // Postal code.
            street_address_2: 'string', // Street address line 2. This field is write-only. It is only used for calculating the longitude and latitude of an address when geo_point is empty.
            province_code: 'string', // Province or state code.
            province_name: 'string', // Province or state name.
            street_address: 'string', // Street address line 1.
        },
        geo_point: {
            latitude_in_micro_degrees: 'integer', // Micro degrees for the latitude.
            longitude_in_micro_degrees: 'integer', // Micro degrees for the longitude.
        },
        radius: 'number', // The radius of the proximity.
    },
    language: {
        language_constant: 'string', // The language constant resource name.
    },
    gender: {
        type: 'UNSPECIFIED | UNKNOWN | MALE | FEMALE | UNDETERMINED', // Type of the gender.
    },
    mobile_application: {
        app_id: 'string', // A string that uniquely identifies a mobile application to Google Ads API. The format of this string is "{platform}-{platform_native_id}", where platform is "1" for iOS apps and "2" for Android apps, and where platform_native_id is the mobile application identifier native to the corresponding platform. For iOS, this native identifier is the 9 digit string that appears at the end of an App Store URL (e.g., "476943146" for "Flood-It! 2" whose App Store link is http://itunes.apple.com/us/app/flood-it!-2/id476943146). For Android, this native identifier is the application's package name (e.g., "com.labpixies.colordrips" for "Color Drips" given Google Play link https://play.google.com/store/apps/details?id=com.labpixies.colordrips). A well formed app id for Google Ads API would thus be "1-476943146" for iOS and "2-com.labpixies.colordrips" for Android. This field is required and must be set in CREATE operations.
    },
    listing_scope: {
        dimensions: 'array', // Scope of the campaign criterion.
    },
    income_range: {
        type:
            'UNSPECIFIED | UNKNOWN | INCOME_RANGE_0_50 | INCOME_RANGE_50_60 | INCOME_RANGE_60_70 | INCOME_RANGE_70_80 | INCOME_RANGE_80_90 | INCOME_RANGE_90_UP | INCOME_RANGE_UNDETERMINED', // Type of the income range.
    },
    carrier: {
        carrier_constant: 'string', // The Carrier constant resource name.
    },
    operating_system_version: {
        operating_system_version_constant: 'string', // The operating system version constant resource name.
    },
    mobile_device: {
        mobile_device_constant: 'string', // The mobile device constant resource name.
    },
    device: {
        type: 'UNSPECIFIED | UNKNOWN | MOBILE | TABLET | DESKTOP | OTHER', // Type of the device.
    },
    ad_schedule: {
        day_of_week: 'UNSPECIFIED | UNKNOWN | MONDAY | TUESDAY | WEDNESDAY | THURSDAY | FRIDAY | SATURDAY | SUNDAY', // Day of the week the schedule applies to.  This field is required for CREATE operations and is prohibited on UPDATE operations.
        end_minute: 'UNSPECIFIED | UNKNOWN | ZERO | FIFTEEN | THIRTY | FORTY_FIVE', // Minutes after the end hour at which this schedule ends. The schedule is exclusive of the end minute.  This field is required for CREATE operations and is prohibited on UPDATE operations.
        start_hour: 'integer', // Starting hour in 24 hour time. This field must be between 0 and 23, inclusive.  This field is required for CREATE operations and is prohibited on UPDATE operations.
        start_minute: 'UNSPECIFIED | UNKNOWN | ZERO | FIFTEEN | THIRTY | FORTY_FIVE', // Minutes after the start hour at which this schedule starts.  This field is required for CREATE operations and is prohibited on UPDATE operations.
        end_hour: 'integer', // Ending hour in 24 hour time; 24 signifies end of the day. This field must be between 0 and 24, inclusive.  This field is required for CREATE operations and is prohibited on UPDATE operations.
    },
    bid_modifier: 'number', // The modifier for the bids when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers. Use 0 to opt out of a Device type.
    type:
        'UNSPECIFIED | UNKNOWN | KEYWORD | PLACEMENT | MOBILE_APP_CATEGORY | MOBILE_APPLICATION | DEVICE | LOCATION | LISTING_GROUP | AD_SCHEDULE | AGE_RANGE | GENDER | INCOME_RANGE | PARENTAL_STATUS | YOUTUBE_VIDEO | YOUTUBE_CHANNEL | USER_LIST | PROXIMITY | TOPIC | LISTING_SCOPE | LANGUAGE | IP_BLOCK | CONTENT_LABEL | CARRIER | USER_INTEREST | WEBPAGE | OPERATING_SYSTEM_VERSION | APP_PAYMENT_MODEL | MOBILE_DEVICE | CUSTOM_AFFINITY | CUSTOM_INTENT', // The type of the criterion.
    user_list: {
        user_list: 'string', // The User List resource name.
    },
    ip_block: {
        ip_address: 'string', // The IP address of this IP block.
    },
    user_interest: {
        user_interest_category: 'string', // The UserInterest resource name.
    },
    webpage: {
        criterion_name: 'string', // The name of the criterion that is defined by this parameter. The name value will be used for identifying, sorting and filtering criteria with this type of parameters.  This field is required for CREATE operations and is prohibited on UPDATE operations.
        conditions: 'array', // Conditions, or logical expressions, for webpage targeting. The list of webpage targeting conditions are and-ed together when evaluated for targeting.  This field is required for CREATE operations and is prohibited on UPDATE operations.
    },
    placement: {
        url: 'string', // URL of the placement.  For example, "http://www.domain.com".
    },
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'campaignCriteria'
const MUTATE_METHOD = 'mutateCampaignCriteria'
const MUTATE_REQUEST = 'MutateCampaignCriteriaRequest'
const OPERATION_REQUEST = 'CampaignCriterionOperation'
const GET_METHOD = 'getCampaignCriterion'
const GET_REQUEST = 'GetCampaignCriterionRequest'
const RESOURCE = 'CampaignCriterion'

export default class CampaignCriterionService extends Service {
    public async get(id: number | string): Promise<CampaignCriterion> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CampaignCriterion
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ campaign_criterion: CampaignCriterion }>> {
        return this.getListResults('campaign_criterion', options)
    }

    public async create(
        campaign_criterion: CampaignCriterion | Array<CampaignCriterion>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_criterion],
            ...options,
        })
    }

    public async update(
        campaign_criterion: CampaignCriterion | Array<CampaignCriterion>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_criterion],
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
