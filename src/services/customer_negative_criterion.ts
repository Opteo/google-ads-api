// @ts-ignore
import { CustomerNegativeCriterion } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The customer_negative_criterion entity:

const customer_negative_criterion = {
    content_label: {
        type:
            'UNSPECIFIED | UNKNOWN | SEXUALLY_SUGGESTIVE | BELOW_THE_FOLD | PARKED_DOMAIN | GAME | JUVENILE | PROFANITY | TRAGEDY | VIDEO | VIDEO_RATING_DV_G | VIDEO_RATING_DV_PG | VIDEO_RATING_DV_T | VIDEO_RATING_DV_MA | VIDEO_NOT_YET_RATED | EMBEDDED_VIDEO | LIVE_STREAMING_VIDEO', // Content label type, required for CREATE operations.
    },
    placement: {
        url: 'string', // URL of the placement.  For example, "http://www.domain.com".
    },
    mobile_application: {
        app_id: 'string', // A string that uniquely identifies a mobile application to Google Ads API. The format of this string is "{platform}-{platform_native_id}", where platform is "1" for iOS apps and "2" for Android apps, and where platform_native_id is the mobile application identifier native to the corresponding platform. For iOS, this native identifier is the 9 digit string that appears at the end of an App Store URL (e.g., "476943146" for "Flood-It! 2" whose App Store link is http://itunes.apple.com/us/app/flood-it!-2/id476943146). For Android, this native identifier is the application's package name (e.g., "com.labpixies.colordrips" for "Color Drips" given Google Play link https://play.google.com/store/apps/details?id=com.labpixies.colordrips). A well formed app id for Google Ads API would thus be "1-476943146" for iOS and "2-com.labpixies.colordrips" for Android. This field is required and must be set in CREATE operations.
    },
    youtube_video: {
        video_id: 'string', // YouTube video id as it appears on the YouTube watch page.
    },
    youtube_channel: {
        channel_id: 'string', // The YouTube uploader channel id or the channel code of a YouTube channel.
    },
    type:
        'UNSPECIFIED | UNKNOWN | KEYWORD | PLACEMENT | MOBILE_APP_CATEGORY | MOBILE_APPLICATION | DEVICE | LOCATION | LISTING_GROUP | AD_SCHEDULE | AGE_RANGE | GENDER | INCOME_RANGE | PARENTAL_STATUS | YOUTUBE_VIDEO | YOUTUBE_CHANNEL | USER_LIST | PROXIMITY | TOPIC | LISTING_SCOPE | LANGUAGE | IP_BLOCK | CONTENT_LABEL | CARRIER | USER_INTEREST | WEBPAGE | OPERATING_SYSTEM_VERSION | APP_PAYMENT_MODEL | MOBILE_DEVICE | CUSTOM_AFFINITY | CUSTOM_INTENT', // The type of the criterion.
    id: 'int64', // The ID of the criterion.
    mobile_app_category: {
        mobile_app_category_constant: 'string', // The mobile app category constant resource name.
    },
    resource_name: 'string', // The resource name of the customer negative criterion. Customer negative criterion resource names have the form:  `customers/{customer_id}/customerNegativeCriteria/{criterion_id}`
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'customerNegativeCriteria'
const MUTATE_METHOD = 'mutateCustomerNegativeCriteria'
const MUTATE_REQUEST = 'MutateCustomerNegativeCriteriaRequest'
const OPERATION_REQUEST = 'CustomerNegativeCriterionOperation'
const GET_METHOD = 'getCustomerNegativeCriterion'
const GET_REQUEST = 'GetCustomerNegativeCriterionRequest'
const RESOURCE = 'CustomerNegativeCriterion'

export default class CustomerNegativeCriterionService extends Service {
    public async get(id: number | string): Promise<CustomerNegativeCriterion> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CustomerNegativeCriterion
    }

    public async list(
        options?: ServiceListOptions
    ): Promise<Array<{ customer_negative_criterion: CustomerNegativeCriterion }>> {
        return this.getListResults('customer_negative_criterion', options)
    }

    public async create(
        customer_negative_criterion: CustomerNegativeCriterion | Array<CustomerNegativeCriterion>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, customer_negative_criterion],
            ...options,
        })
    }

    public async update(
        customer_negative_criterion: CustomerNegativeCriterion | Array<CustomerNegativeCriterion>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, customer_negative_criterion],
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
