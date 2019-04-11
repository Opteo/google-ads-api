// @ts-ignore
import { Feed } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The feed entity:

const feed = {
    resource_name: 'string', // The resource name of the feed. Feed resource names have the form:  `customers/{customer_id}/feeds/{feed_id}`
    attribute_operations: 'array', // The list of operations changing the feed attributes. Attributes can only be added, not removed.
    affiliate_location_feed_data: {
        relationship_type: 'UNSPECIFIED | UNKNOWN | GENERAL_RETAILER', // The relationship the chains have with the advertiser.
        chain_ids: 'array', // The list of chains that the affiliate location feed will sync the locations from.
    },
    status: 'UNSPECIFIED | UNKNOWN | ENABLED | REMOVED', // Status of the feed. This field is read-only.
    places_location_feed_data: {
        label_filters: 'array', // Used to filter Google My Business listings by labels. If entries exist in label_filters, only listings that has any of the labels set are candidates to be synchronized into FeedItems. If no entries exist in label_filters, then all listings are candidates for syncing.
        business_account_id: 'string', // Plus page ID of the managed business whose locations should be used. If this field is not set, then all businesses accessible by the user (specified by email_address) are used. This field is mutate-only and is not selectable.
        oauth_info: {
            http_method: 'string', // The HTTP method used to obtain authorization.
            http_request_url: 'string', // The HTTP request URL used to obtain authorization.
            http_authorization_header: 'string', // The HTTP authorization header used to obtain authorization.
        },
        category_filters: 'array', // Used to filter Google My Business listings by categories. If entries exist in category_filters, only listings that belong to any of the categories are candidates to be sync'd into FeedItems. If no entries exist in category_filters, then all listings are candidates for syncing.
        email_address: 'string', // Email address of a Google My Business account or email address of a manager of the Google My Business account. Required.
        business_name_filter: 'string', // Used to filter Google My Business listings by business name. If business_name_filter is set, only listings with a matching business name are candidates to be sync'd into FeedItems.
    },
    name: 'string', // Name of the feed. Required.
    origin: 'UNSPECIFIED | UNKNOWN | USER | GOOGLE', // Specifies who manages the FeedAttributes for the Feed.
    attributes: 'array', // The Feed's attributes. Required on CREATE. Disallowed on UPDATE. Use attribute_operations to add new attributes.
    id: 'string', // The ID of the feed. This field is read-only.
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'feeds'
const MUTATE_METHOD = 'mutateFeeds'
const MUTATE_REQUEST = 'MutateFeedsRequest'
const OPERATION_REQUEST = 'FeedOperation'
const GET_METHOD = 'getFeed'
const GET_REQUEST = 'GetFeedRequest'
const RESOURCE = 'Feed'

export default class FeedService extends Service {
    public async get(id: number | string): Promise<Feed> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as Feed
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ feed: Feed }>> {
        return this.getListResults('feed', options)
    }

    public async create(feed: Feed | Array<Feed>, options?: ServiceCreateOptions): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, feed],
            ...options,
        })
    }

    public async update(feed: Feed | Array<Feed>, options?: ServiceCreateOptions): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, feed],
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
