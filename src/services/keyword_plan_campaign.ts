// @ts-ignore
import { KeywordPlanCampaign } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The keyword_plan_campaign entity:

const keyword_plan_campaign = {
    keyword_plan_network: 'UNSPECIFIED | UNKNOWN | GOOGLE_SEARCH | GOOGLE_SEARCH_AND_PARTNERS', // Targeting network.  This field is required and should not be empty when creating Keyword Plan campaigns.
    cpc_bid_micros: 'string', // A default max cpc bid in micros, and in the account currency, for all ad groups under the campaign.  This field is required and should not be empty when creating Keyword Plan campaigns.
    name: 'string', // The name of the Keyword Plan campaign.  This field is required and should not be empty when creating Keyword Plan campaigns.
    language_constants: 'array', // The languages targeted for the Keyword Plan campaign. Max allowed: 1.
    id: 'string', // The ID of the Keyword Plan campaign.
    geo_targets: 'array', // The geo targets. Max number allowed: 20.
    resource_name: 'string', // The resource name of the Keyword Plan campaign. KeywordPlanCampaign resource names have the form:  `customers/{customer_id}/keywordPlanCampaigns/{kp_campaign_id}`
    keyword_plan: 'string', // The keyword plan this campaign belongs to.
}

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
