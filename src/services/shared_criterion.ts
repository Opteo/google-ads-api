// @ts-ignore
import { SharedCriterion } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'sharedCriteria'
const MUTATE_METHOD = 'mutateSharedCriteria'
const MUTATE_REQUEST = 'MutateSharedCriteriaRequest'
const OPERATION_REQUEST = 'SharedCriterionOperation'
const GET_METHOD = 'getSharedCriterion'
const GET_REQUEST = 'GetSharedCriterionRequest'
const RESOURCE = 'SharedCriterion'

export default class SharedCriterionService extends Service {
    public async get(id: number | string): Promise<SharedCriterion> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as SharedCriterion
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ shared_criterion: SharedCriterion }>> {
        return this.getListResults('shared_criterion', options)
    }

    public async create(
        shared_criterion: SharedCriterion | Array<SharedCriterion>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, shared_criterion],
            ...options,
        })
    }

    public async update(
        shared_criterion: SharedCriterion | Array<SharedCriterion>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, shared_criterion],
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
