// @ts-ignore
import { TopicConstant } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'topicConstants'
const MUTATE_METHOD = 'mutateTopicConstants'
const MUTATE_REQUEST = 'MutateTopicConstantsRequest'
const OPERATION_REQUEST = 'TopicConstantOperation'
const GET_METHOD = 'getTopicConstant'
const GET_REQUEST = 'GetTopicConstantRequest'
const RESOURCE = 'TopicConstant'

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

    public async create(
        topic_constant: TopicConstant | Array<TopicConstant>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, topic_constant],
            ...options,
        })
    }

    public async update(
        topic_constant: TopicConstant | Array<TopicConstant>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, topic_constant],
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
