// @ts-ignore
import { SearchTermView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

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
