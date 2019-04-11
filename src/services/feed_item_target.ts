// @ts-ignore
import { FeedItemTarget } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The feed_item_target entity:

const feed_item_target = {
    feed_item_target_id: 'string', // The ID of the targeted resource. This field is read-only.
    feed_item_target_type: 'UNSPECIFIED | UNKNOWN | CAMPAIGN | AD_GROUP | CRITERION', // The target type of this feed item target. This field is read-only.
    feed_item: 'string', // The feed item to which this feed item target belongs.
    ad_group: 'string', // The targeted ad group.
    geo_target_constant: 'string', // The targeted geo target constant resource name.
    campaign: 'string', // The targeted campaign.
    keyword: {
        match_type: 'UNSPECIFIED | UNKNOWN | EXACT | PHRASE | BROAD', // The match type of the keyword.
        text: 'string', // The text of the keyword (at most 80 characters and 10 words).
    },
    resource_name: 'string', // The resource name of the feed item target. Feed item target resource names have the form:  `customers/{customer_id}/feedItemTargets/{feed_id}~{feed_item_id}~{feed_item_target_type}~{feed_item_target_id}`
    ad_schedule: {
        day_of_week: 'UNSPECIFIED | UNKNOWN | MONDAY | TUESDAY | WEDNESDAY | THURSDAY | FRIDAY | SATURDAY | SUNDAY', // Day of the week the schedule applies to.  This field is required for CREATE operations and is prohibited on UPDATE operations.
        end_minute: 'UNSPECIFIED | UNKNOWN | ZERO | FIFTEEN | THIRTY | FORTY_FIVE', // Minutes after the end hour at which this schedule ends. The schedule is exclusive of the end minute.  This field is required for CREATE operations and is prohibited on UPDATE operations.
        start_hour: 'integer', // Starting hour in 24 hour time. This field must be between 0 and 23, inclusive.  This field is required for CREATE operations and is prohibited on UPDATE operations.
        start_minute: 'UNSPECIFIED | UNKNOWN | ZERO | FIFTEEN | THIRTY | FORTY_FIVE', // Minutes after the start hour at which this schedule starts.  This field is required for CREATE operations and is prohibited on UPDATE operations.
        end_hour: 'integer', // Ending hour in 24 hour time; 24 signifies end of the day. This field must be between 0 and 24, inclusive.  This field is required for CREATE operations and is prohibited on UPDATE operations.
    },
    device: 'UNSPECIFIED | UNKNOWN | MOBILE', // The targeted device.
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'feedItemTargets'
const MUTATE_METHOD = 'mutateFeedItemTargets'
const MUTATE_REQUEST = 'MutateFeedItemTargetsRequest'
const OPERATION_REQUEST = 'FeedItemTargetOperation'
const GET_METHOD = 'getFeedItemTarget'
const GET_REQUEST = 'GetFeedItemTargetRequest'
const RESOURCE = 'FeedItemTarget'

export default class FeedItemTargetService extends Service {
    public async get(id: number | string): Promise<FeedItemTarget> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as FeedItemTarget
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ feed_item_target: FeedItemTarget }>> {
        return this.getListResults('feed_item_target', options)
    }

    public async create(
        feed_item_target: FeedItemTarget | Array<FeedItemTarget>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, feed_item_target],
            ...options,
        })
    }

    public async update(
        feed_item_target: FeedItemTarget | Array<FeedItemTarget>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, feed_item_target],
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
