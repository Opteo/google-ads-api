// @ts-ignore
import { KeywordPlanCampaignKeyword } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'keywordPlanCampaignKeywords'
const MUTATE_METHOD = 'mutateKeywordPlanCampaignKeywords'
const MUTATE_REQUEST = 'MutateKeywordPlanCampaignKeywordsRequest'
const OPERATION_REQUEST = 'KeywordPlanCampaignKeywordOperation'
const GET_METHOD = 'getKeywordPlanCampaignKeyword'
const GET_REQUEST = 'GetKeywordPlanCampaignKeywordRequest'
const RESOURCE = 'KeywordPlanCampaignKeyword'

export default class KeywordPlanCampaignKeywordService extends Service {
    public async get(id: number | string): Promise<KeywordPlanCampaignKeyword> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as KeywordPlanCampaignKeyword
    }

    public async list(
        options?: ServiceListOptions
    ): Promise<Array<{ keyword_plan_campaign_keyword: KeywordPlanCampaignKeyword }>> {
        return this.getListResults('keyword_plan_campaign_keyword', options)
    }

    public async create(
        keyword_plan_campaign_keyword: KeywordPlanCampaignKeyword | Array<KeywordPlanCampaignKeyword>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, keyword_plan_campaign_keyword],
            ...options,
        })
    }

    public async update(
        keyword_plan_campaign_keyword: KeywordPlanCampaignKeyword | Array<KeywordPlanCampaignKeyword>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, keyword_plan_campaign_keyword],
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
