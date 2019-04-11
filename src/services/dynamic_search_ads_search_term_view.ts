// @ts-ignore
import { DynamicSearchAdsSearchTermView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The dynamic_search_ads_search_term_view entity:

const dynamic_search_ads_search_term_view = {
    search_term: 'string', // Search term  This field is read-only.
    headline: 'string', // The dynamically generated headline of the Dynamic Search Ad.  This field is read-only.
    resource_name: 'string', // The resource name of the dynamic search ads search term view. Dynamic search ads search term view resource names have the form:   `customers/{customer_id}/dynamicSearchAdsSearchTermViews/{ad_group_id}~{search_term_fp}~{headline_fp}~{landing_page_fp}~{page_url_fp}`
    page_url: 'string', // The URL of page feed item served for the impression.  This field is read-only.
    landing_page: 'string', // The dynamically selected landing page URL of the impression.  This field is read-only.
}

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
