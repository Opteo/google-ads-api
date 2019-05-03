// @ts-ignore
import { KeywordPlanKeyword } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'keywordPlanKeywords'
const MUTATE_METHOD = 'mutateKeywordPlanKeywords'
const MUTATE_REQUEST = 'MutateKeywordPlanKeywordsRequest'
const OPERATION_REQUEST = 'KeywordPlanKeywordOperation'
const GET_METHOD = 'getKeywordPlanKeyword'
const GET_REQUEST = 'GetKeywordPlanKeywordRequest'
const RESOURCE = 'KeywordPlanKeyword'

export default class KeywordPlanKeywordService extends Service {
    public async get(id: number | string): Promise<KeywordPlanKeyword> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as KeywordPlanKeyword
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ keyword_plan_keyword: KeywordPlanKeyword }>> {
        return this.getListResults('keyword_plan_keyword', options)
    }

    public async create(
        keyword_plan_keyword: KeywordPlanKeyword | Array<KeywordPlanKeyword>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, keyword_plan_keyword],
            ...options,
        })
    }

    public async update(
        keyword_plan_keyword: KeywordPlanKeyword | Array<KeywordPlanKeyword>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, keyword_plan_keyword],
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
