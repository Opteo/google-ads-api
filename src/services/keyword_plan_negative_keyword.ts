// @ts-ignore
import { KeywordPlanNegativeKeyword } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'keywordPlanNegativeKeywords'
const MUTATE_METHOD = 'mutateKeywordPlanNegativeKeywords'
const MUTATE_REQUEST = 'MutateKeywordPlanNegativeKeywordsRequest'
const OPERATION_REQUEST = 'KeywordPlanNegativeKeywordOperation'
const GET_METHOD = 'getKeywordPlanNegativeKeyword'
const GET_REQUEST = 'GetKeywordPlanNegativeKeywordRequest'
const RESOURCE = 'KeywordPlanNegativeKeyword'

export default class KeywordPlanNegativeKeywordService extends Service {
    public async get(id: number | string): Promise<KeywordPlanNegativeKeyword> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as KeywordPlanNegativeKeyword
    }

    public async list(
        options?: ServiceListOptions
    ): Promise<Array<{ keyword_plan_negative_keyword: KeywordPlanNegativeKeyword }>> {
        return this.getListResults('keyword_plan_negative_keyword', options)
    }

    public async create(
        keyword_plan_negative_keyword: KeywordPlanNegativeKeyword | Array<KeywordPlanNegativeKeyword>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, keyword_plan_negative_keyword],
            ...options,
        })
    }

    public async update(
        keyword_plan_negative_keyword: KeywordPlanNegativeKeyword | Array<KeywordPlanNegativeKeyword>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, keyword_plan_negative_keyword],
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
