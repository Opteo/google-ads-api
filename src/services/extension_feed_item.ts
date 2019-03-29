// @ts-ignore
import { ExtensionFeedItem } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'extensionFeedItems'
const MUTATE_METHOD = 'mutateExtensionFeedItems'
const MUTATE_REQUEST = 'MutateExtensionFeedItemsRequest'
const OPERATION_REQUEST = 'ExtensionFeedItemOperation'
const GET_METHOD = 'getExtensionFeedItem'
const GET_REQUEST = 'GetExtensionFeedItemRequest'
const RESOURCE = 'ExtensionFeedItem'

export default class ExtensionFeedItemService extends Service {
    public async get(id: number | string): Promise<ExtensionFeedItem> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as ExtensionFeedItem
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ extension_feed_item: ExtensionFeedItem }>> {
        return this.getListResults('extension_feed_item', options)
    }

    public async create(
        extension_feed_item: ExtensionFeedItem | Array<ExtensionFeedItem>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, extension_feed_item],
            ...options,
        })
    }

    public async update(
        extension_feed_item: ExtensionFeedItem | Array<ExtensionFeedItem>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, extension_feed_item],
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
