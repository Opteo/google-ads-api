// @ts-ignore
import { CampaignCriterion } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'campaignCriteria'
const MUTATE_METHOD = 'mutateCampaignCriteria'
const MUTATE_REQUEST = 'MutateCampaignCriteriaRequest'
const OPERATION_REQUEST = 'CampaignCriterionOperation'
const GET_METHOD = 'getCampaignCriterion'
const GET_REQUEST = 'GetCampaignCriterionRequest'
const RESOURCE = 'CampaignCriterion'

export default class CampaignCriterionService extends Service {
    public async get(id: number | string): Promise<CampaignCriterion> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CampaignCriterion
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ campaign_criterion: CampaignCriterion }>> {
        return this.getListResults('campaign_criterion', options)
    }

    public async create(
        campaign_criterion: CampaignCriterion | Array<CampaignCriterion>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_criterion],
            ...options,
        })
    }

    public async update(
        campaign_criterion: CampaignCriterion | Array<CampaignCriterion>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_criterion],
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
