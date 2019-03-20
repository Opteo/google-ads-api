// @ts-ignore
import { DisplayKeywordView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'displayKeywordViews'
const MUTATE_METHOD = 'mutateDisplayKeywordViews'
const MUTATE_REQUEST = 'MutateDisplayKeywordViewsRequest'
const OPERATION_REQUEST = 'DisplayKeywordViewOperation'
const GET_METHOD = 'getDisplayKeywordView'
const GET_REQUEST = 'GetDisplayKeywordViewRequest'
const RESOURCE = 'DisplayKeywordView'

export default class DisplayKeywordViewService extends Service {
    public async get(id: number | string): Promise<DisplayKeywordView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as DisplayKeywordView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ display_keyword_view: DisplayKeywordView }>> {
        return this.getListResults('display_keyword_view', options)
    }

    public async create(
        display_keyword_view: DisplayKeywordView | Array<DisplayKeywordView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, display_keyword_view],
            ...options,
        })
    }

    public async update(
        display_keyword_view: DisplayKeywordView | Array<DisplayKeywordView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, display_keyword_view],
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
