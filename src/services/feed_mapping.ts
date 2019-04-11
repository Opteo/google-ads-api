// @ts-ignore
import { FeedMapping } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The feed_mapping entity:

const feed_mapping = {
    status: 'UNSPECIFIED | UNKNOWN | ENABLED | REMOVED', // Status of the feed mapping. This field is read-only.
    placeholder_type:
        'UNSPECIFIED | UNKNOWN | SITELINK | CALL | APP | LOCATION | AFFILIATE_LOCATION | CALLOUT | STRUCTURED_SNIPPET | MESSAGE | PRICE | PROMOTION | AD_CUSTOMIZER | DYNAMIC_EDUCATION | DYNAMIC_FLIGHT | DYNAMIC_CUSTOM | DYNAMIC_HOTEL | DYNAMIC_REAL_ESTATE | DYNAMIC_TRAVEL | DYNAMIC_LOCAL | DYNAMIC_JOB', // The placeholder type of this mapping (i.e., if the mapping maps feed attributes to placeholder fields).
    resource_name: 'string', // The resource name of the feed mapping. Feed mapping resource names have the form:  `customers/{customer_id}/feedMappings/{feed_id}~{feed_mapping_id}`
    criterion_type: 'UNSPECIFIED | UNKNOWN | LOCATION_EXTENSION_TARGETING | DSA_PAGE_FEED', // The criterion type of this mapping (i.e., if the mapping maps feed attributes to criterion fields).
    feed: 'string', // The feed of this feed mapping.
    attribute_field_mappings: 'array', // Feed attributes to field mappings. These mappings are a one-to-many relationship meaning that 1 feed attribute can be used to populate multiple placeholder fields, but 1 placeholder field can only draw data from 1 feed attribute. Ad Customizer is an exception, 1 placeholder field can be mapped to multiple feed attributes. Required.
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'feedMappings'
const MUTATE_METHOD = 'mutateFeedMappings'
const MUTATE_REQUEST = 'MutateFeedMappingsRequest'
const OPERATION_REQUEST = 'FeedMappingOperation'
const GET_METHOD = 'getFeedMapping'
const GET_REQUEST = 'GetFeedMappingRequest'
const RESOURCE = 'FeedMapping'

export default class FeedMappingService extends Service {
    public async get(id: number | string): Promise<FeedMapping> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as FeedMapping
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ feed_mapping: FeedMapping }>> {
        return this.getListResults('feed_mapping', options)
    }

    public async create(
        feed_mapping: FeedMapping | Array<FeedMapping>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, feed_mapping],
            ...options,
        })
    }

    public async update(
        feed_mapping: FeedMapping | Array<FeedMapping>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, feed_mapping],
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
