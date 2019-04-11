// @ts-ignore
import { TopicView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The topic_view entity:

const topic_view = {
    resource_name: 'string', // The resource name of the topic view. Topic view resource names have the form:  `customers/{customer_id}/topicViews/{ad_group_id}~{criterion_id}`
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'topicViews'
const GET_METHOD = 'getTopicView'
const GET_REQUEST = 'GetTopicViewRequest'

export default class TopicViewService extends Service {
    public async get(id: number | string): Promise<TopicView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as TopicView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ topic_view: TopicView }>> {
        return this.getListResults('topic_view', options)
    }
}
