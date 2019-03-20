// @ts-ignore
import { TopicView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'topicViews'
const MUTATE_METHOD = 'mutateTopicViews'
const MUTATE_REQUEST = 'MutateTopicViewsRequest'
const OPERATION_REQUEST = 'TopicViewOperation'
const GET_METHOD = 'getTopicView'
const GET_REQUEST = 'GetTopicViewRequest'
const RESOURCE = 'TopicView'

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

    public async create(
        topic_view: TopicView | Array<TopicView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, topic_view],
            ...options,
        })
    }

    public async update(
        topic_view: TopicView | Array<TopicView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, topic_view],
            ...options,
        })
    }

    public async delete(id: number | string, options?: ServiceCreateOptions) {
        return this.serviceDelete({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            entity_id: id,
            ...options,
        })
    }
}
