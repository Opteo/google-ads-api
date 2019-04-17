// @ts-ignore
import { TopicConstant } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The topic_constant entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'topicConstants'
const GET_METHOD = 'getTopicConstant'
const GET_REQUEST = 'GetTopicConstantRequest'

export default class TopicConstantService extends Service {
    public async get(id: number | string): Promise<TopicConstant> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as TopicConstant
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ topic_constant: TopicConstant }>> {
        return this.getListResults('topic_constant', options)
    }
}
