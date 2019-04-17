// @ts-ignore
import { KeywordView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The keyword_view entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'keywordViews'
const GET_METHOD = 'getKeywordView'
const GET_REQUEST = 'GetKeywordViewRequest'

export default class KeywordViewService extends Service {
    public async get(id: number | string): Promise<KeywordView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as KeywordView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ keyword_view: KeywordView }>> {
        return this.getListResults('keyword_view', options)
    }
}
