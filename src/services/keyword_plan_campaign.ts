// @ts-ignore
import { KeywordPlanCampaign } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'keywordPlanCampaigns'
const MUTATE_METHOD = 'mutateKeywordPlanCampaigns'
const MUTATE_REQUEST = 'MutateKeywordPlanCampaignsRequest'
const OPERATION_REQUEST = 'KeywordPlanCampaignOperation'
const GET_METHOD = 'getKeywordPlanCampaign'
const GET_REQUEST = 'GetKeywordPlanCampaignRequest'
const RESOURCE = 'KeywordPlanCampaign'

export default class KeywordPlanCampaignService extends Service {
    public async get(id: number | string): Promise<KeywordPlanCampaign> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as KeywordPlanCampaign
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ keyword_plan_campaign: KeywordPlanCampaign }>> {
        return this.getListResults('keyword_plan_campaign', options)
    }

    public async create(
        keyword_plan_campaign: KeywordPlanCampaign | Array<KeywordPlanCampaign>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, keyword_plan_campaign],
            ...options,
        })
    }

    public async update(
        keyword_plan_campaign: KeywordPlanCampaign | Array<KeywordPlanCampaign>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, keyword_plan_campaign],
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
