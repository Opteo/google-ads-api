// @ts-ignore
import { SharedCriterion } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The shared_criterion entity:

const shared_criterion = {
    placement: {
        url: 'string', // URL of the placement.  For example, "http://www.domain.com".
    },
    criterion_id: 'int64', // The ID of the criterion.  This field is ignored for mutates.
    mobile_application: {
        app_id: 'string', // A string that uniquely identifies a mobile application to Google Ads API. The format of this string is "{platform}-{platform_native_id}", where platform is "1" for iOS apps and "2" for Android apps, and where platform_native_id is the mobile application identifier native to the corresponding platform. For iOS, this native identifier is the 9 digit string that appears at the end of an App Store URL (e.g., "476943146" for "Flood-It! 2" whose App Store link is http://itunes.apple.com/us/app/flood-it!-2/id476943146). For Android, this native identifier is the application's package name (e.g., "com.labpixies.colordrips" for "Color Drips" given Google Play link https://play.google.com/store/apps/details?id=com.labpixies.colordrips). A well formed app id for Google Ads API would thus be "1-476943146" for iOS and "2-com.labpixies.colordrips" for Android. This field is required and must be set in CREATE operations.
    },
    youtube_video: {
        video_id: 'string', // YouTube video id as it appears on the YouTube watch page.
    },
    shared_set: 'string', // The shared set to which the shared criterion belongs.
    type:
        'UNSPECIFIED | UNKNOWN | KEYWORD | PLACEMENT | MOBILE_APP_CATEGORY | MOBILE_APPLICATION | DEVICE | LOCATION | LISTING_GROUP | AD_SCHEDULE | AGE_RANGE | GENDER | INCOME_RANGE | PARENTAL_STATUS | YOUTUBE_VIDEO | YOUTUBE_CHANNEL | USER_LIST | PROXIMITY | TOPIC | LISTING_SCOPE | LANGUAGE | IP_BLOCK | CONTENT_LABEL | CARRIER | USER_INTEREST | WEBPAGE | OPERATING_SYSTEM_VERSION | APP_PAYMENT_MODEL | MOBILE_DEVICE | CUSTOM_AFFINITY | CUSTOM_INTENT', // The type of the criterion.
    youtube_channel: {
        channel_id: 'string', // The YouTube uploader channel id or the channel code of a YouTube channel.
    },
    mobile_app_category: {
        mobile_app_category_constant: 'string', // The mobile app category constant resource name.
    },
    keyword: {
        match_type: 'UNSPECIFIED | UNKNOWN | EXACT | PHRASE | BROAD', // The match type of the keyword.
        text: 'string', // The text of the keyword (at most 80 characters and 10 words).
    },
    resource_name: 'string', // The resource name of the shared criterion. Shared set resource names have the form:  `customers/{customer_id}/sharedCriteria/{shared_set_id}~{criterion_id}`
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'sharedCriteria'
const MUTATE_METHOD = 'mutateSharedCriteria'
const MUTATE_REQUEST = 'MutateSharedCriteriaRequest'
const OPERATION_REQUEST = 'SharedCriterionOperation'
const GET_METHOD = 'getSharedCriterion'
const GET_REQUEST = 'GetSharedCriterionRequest'
const RESOURCE = 'SharedCriterion'

export default class SharedCriterionService extends Service {
    public async get(id: number | string): Promise<SharedCriterion> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as SharedCriterion
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ shared_criterion: SharedCriterion }>> {
        return this.getListResults('shared_criterion', options)
    }

    public async create(
        shared_criterion: SharedCriterion | Array<SharedCriterion>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, shared_criterion],
            ...options,
        })
    }

    public async update(
        shared_criterion: SharedCriterion | Array<SharedCriterion>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, shared_criterion],
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
