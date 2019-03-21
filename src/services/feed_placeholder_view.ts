// @ts-ignore
import { FeedPlaceholderView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

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
