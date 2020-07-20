// @ts-ignore
import { KeywordPlanAdGroupKeyword } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'keywordPlanAdGroupKeywords'
const MUTATE_METHOD = 'mutateKeywordPlanAdGroupKeywords'
const MUTATE_REQUEST = 'MutateKeywordPlanAdGroupKeywordsRequest'
const OPERATION_REQUEST = 'KeywordPlanAdGroupKeywordOperation'
const GET_METHOD = 'getKeywordPlanAdGroupKeyword'
const GET_REQUEST = 'GetKeywordPlanAdGroupKeywordRequest'
const RESOURCE = 'KeywordPlanAdGroupKeyword'

export default class KeywordPlanAdGroupKeywordService extends Service {
    public async get(id: number | string): Promise<KeywordPlanAdGroupKeyword> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as KeywordPlanAdGroupKeyword
    }

    public async list(
        options?: ServiceListOptions
    ): Promise<Array<{ keyword_plan_ad_group_keyword: KeywordPlanAdGroupKeyword }>> {
        return this.getListResults('keyword_plan_ad_group_keyword', options)
    }

    public async create(
        keyword_plan_ad_group_keyword: KeywordPlanAdGroupKeyword | Array<KeywordPlanAdGroupKeyword>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, keyword_plan_ad_group_keyword],
            ...options,
        })
    }

    public async update(
        keyword_plan_ad_group_keyword: KeywordPlanAdGroupKeyword | Array<KeywordPlanAdGroupKeyword>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, keyword_plan_ad_group_keyword],
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
