// @ts-ignore
import { FeedItem } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The feed_item entity:

const feed_item = {
    geo_targeting_restriction: 'UNSPECIFIED | UNKNOWN | LOCATION_OF_PRESENCE', // Geo targeting restriction specifies the type of location that can be used for targeting.
    status: 'UNSPECIFIED | UNKNOWN | ENABLED | REMOVED', // Status of the feed item. This field is read-only.
    attribute_values: 'array', // The feed item's attribute values.
    url_custom_parameters: 'array', // The list of mappings used to substitute custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`.
    id: 'string', // The ID of this feed item.
    start_date_time: 'string', // Start time in which this feed item is effective and can begin serving. The format is "YYYY-MM-DD HH:MM:SS". Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30"
    end_date_time: 'string', // End time in which this feed item is no longer effective and will stop serving. The format is "YYYY-MM-DD HH:MM:SS". Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30"
    resource_name: 'string', // The resource name of the feed item. Feed item resource names have the form:  `customers/{customer_id}/feedItems/{feed_id}~{feed_item_id}`
    feed: 'string', // The feed to which this feed item belongs.
    policy_infos: 'array', // List of info about a feed item's validation and approval state for active feed mappings. There will be an entry in the list for each type of feed mapping associated with the feed, e.g. a feed with a sitelink and a call feed mapping would cause every feed item associated with that feed to have an entry in this list for both sitelink and call. This field is read-only.
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'feedItems'
const MUTATE_METHOD = 'mutateFeedItems'
const MUTATE_REQUEST = 'MutateFeedItemsRequest'
const OPERATION_REQUEST = 'FeedItemOperation'
const GET_METHOD = 'getFeedItem'
const GET_REQUEST = 'GetFeedItemRequest'
const RESOURCE = 'FeedItem'

export default class FeedItemService extends Service {
    public async get(id: number | string): Promise<FeedItem> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as FeedItem
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ feed_item: FeedItem }>> {
        return this.getListResults('feed_item', options)
    }

    public async create(feed_item: FeedItem | Array<FeedItem>, options?: ServiceCreateOptions): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, feed_item],
            ...options,
        })
    }

    public async update(feed_item: FeedItem | Array<FeedItem>, options?: ServiceCreateOptions): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, feed_item],
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
