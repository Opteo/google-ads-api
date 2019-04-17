// @ts-ignore
import { DynamicSearchAdsSearchTermView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The dynamic_search_ads_search_term_view entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'dynamicSearchAdsSearchTermViews'
const GET_METHOD = 'getDynamicSearchAdsSearchTermView'
const GET_REQUEST = 'GetDynamicSearchAdsSearchTermViewRequest'

export default class DynamicSearchAdsSearchTermViewService extends Service {
    public async get(id: number | string): Promise<DynamicSearchAdsSearchTermView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as DynamicSearchAdsSearchTermView
    }

    public async list(
        options?: ServiceListOptions
    ): Promise<Array<{ dynamic_search_ads_search_term_view: DynamicSearchAdsSearchTermView }>> {
        return this.getListResults('dynamic_search_ads_search_term_view', options)
    }
}
