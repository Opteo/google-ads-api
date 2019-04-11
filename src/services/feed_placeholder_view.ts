// @ts-ignore
import { FeedPlaceholderView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The feed_placeholder_view entity:

const feed_placeholder_view = {
    resource_name: 'string', // The resource name of the feed placeholder view. Feed placeholder view resource names have the form:  `customers/{customer_id}/feedPlaceholderViews/{placeholder_type}`
    placeholder_type:
        'UNSPECIFIED | UNKNOWN | SITELINK | CALL | APP | LOCATION | AFFILIATE_LOCATION | CALLOUT | STRUCTURED_SNIPPET | MESSAGE | PRICE | PROMOTION | AD_CUSTOMIZER | DYNAMIC_EDUCATION | DYNAMIC_FLIGHT | DYNAMIC_CUSTOM | DYNAMIC_HOTEL | DYNAMIC_REAL_ESTATE | DYNAMIC_TRAVEL | DYNAMIC_LOCAL | DYNAMIC_JOB', // The placeholder type of the feed placeholder view.
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'feedPlaceholderViews'
const GET_METHOD = 'getFeedPlaceholderView'
const GET_REQUEST = 'GetFeedPlaceholderViewRequest'

export default class FeedPlaceholderViewService extends Service {
    public async get(id: number | string): Promise<FeedPlaceholderView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as FeedPlaceholderView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ feed_placeholder_view: FeedPlaceholderView }>> {
        return this.getListResults('feed_placeholder_view', options)
    }
}
