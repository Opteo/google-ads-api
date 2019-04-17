// @ts-ignore
import { DisplayKeywordView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The display_keyword_view entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'displayKeywordViews'
const GET_METHOD = 'getDisplayKeywordView'
const GET_REQUEST = 'GetDisplayKeywordViewRequest'

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
}
