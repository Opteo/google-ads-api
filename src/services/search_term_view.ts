// @ts-ignore
import { SearchTermView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The search_term_view entity:

const search_term_view = {
    ad_group: 'string', // The ad group the search term served in.
    status: 'UNSPECIFIED | UNKNOWN | ADDED | EXCLUDED | ADDED_EXCLUDED | NONE', // Indicates whether the search term is currently one of your targeted or excluded keywords.
    search_term: 'string', // The search term.
    resource_name: 'string', // The resource name of the search term view. Search term view resource names have the form:  `customers/{customer_id}/searchTermViews/{campaign_id}~{ad_group_id}~ {URL-base64 search term}`
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'searchTermViews'
const GET_METHOD = 'getSearchTermView'
const GET_REQUEST = 'GetSearchTermViewRequest'

export default class SearchTermViewService extends Service {
    public async get(id: number | string): Promise<SearchTermView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as SearchTermView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ search_term_view: SearchTermView }>> {
        return this.getListResults('search_term_view', options)
    }
}
