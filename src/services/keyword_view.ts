// @ts-ignore
import { KeywordView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The keyword_view entity:

const keyword_view = {
    resource_name: 'string', // The resource name of the keyword view. Keyword view resource names have the form:  `customers/{customer_id}/keywordViews/{ad_group_id}~{criterion_id}`
}

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
