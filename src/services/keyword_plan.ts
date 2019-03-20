// @ts-ignore
import { KeywordPlan } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'keywordPlans'
const MUTATE_METHOD = 'mutateKeywordPlans'
const MUTATE_REQUEST = 'MutateKeywordPlansRequest'
const OPERATION_REQUEST = 'KeywordPlanOperation'
const GET_METHOD = 'getKeywordPlan'
const GET_REQUEST = 'GetKeywordPlanRequest'
const RESOURCE = 'KeywordPlan'

export default class KeywordPlanService extends Service {
    public async get(id: number | string): Promise<KeywordPlan> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as KeywordPlan
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ keyword_plan: KeywordPlan }>> {
        return this.getListResults('keyword_plan', options)
    }

    public async create(
        keyword_plan: KeywordPlan | Array<KeywordPlan>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, keyword_plan],
            ...options,
        })
    }

    public async update(
        keyword_plan: KeywordPlan | Array<KeywordPlan>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, keyword_plan],
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
