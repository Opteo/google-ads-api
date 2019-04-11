// @ts-ignore
import { TopicConstant } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The topic_constant entity:

const topic_constant = {
    id: 'string', // The ID of the topic.
    path: 'array', // The category to target or exclude. Each subsequent element in the array describes a more specific sub-category. For example, {"Pets & Animals", "Pets", "Dogs"} represents the "Pets & Animals/Pets/Dogs" category. A complete list of available topic categories is available <a href="https://developers.google.com/adwords/api/docs/appendix/verticals"> here</a>
    topic_constant_parent: 'string', // Resource name of parent of the topic constant.
    resource_name: 'string', // The resource name of the topic constant. topic constant resource names have the form:  `topicConstants/{topic_id}`
}

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
