// @ts-ignore
import { DynamicSearchAdsSearchTermView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'dynamicSearchAdsSearchTermViews'
const MUTATE_METHOD = 'mutateDynamicSearchAdsSearchTermViews'
const MUTATE_REQUEST = 'MutateDynamicSearchAdsSearchTermViewsRequest'
const OPERATION_REQUEST = 'DynamicSearchAdsSearchTermViewOperation'
const GET_METHOD = 'getDynamicSearchAdsSearchTermView'
const GET_REQUEST = 'GetDynamicSearchAdsSearchTermViewRequest'
const RESOURCE = 'DynamicSearchAdsSearchTermView'

export default class DynamicSearchAdsSearchTermViewService extends Service {
    public async get(id: number | string): Promise<DynamicSearchAdsSearchTermView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as DynamicSearchAdsSearchTermView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ dynamic_search_ads_search_term_view: DynamicSearchAdsSearchTermView }>> {
        return this.getListResults('dynamic_search_ads_search_term_view', options)
    }

    public async create(
        dynamic_search_ads_search_term_view: DynamicSearchAdsSearchTermView | Array<DynamicSearchAdsSearchTermView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, dynamic_search_ads_search_term_view],
            ...options,
        })
    }

    public async update(
        dynamic_search_ads_search_term_view: DynamicSearchAdsSearchTermView | Array<DynamicSearchAdsSearchTermView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, dynamic_search_ads_search_term_view],
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
