// @ts-ignore
import { Campaign } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The campaign entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'campaigns'
const MUTATE_METHOD = 'mutateCampaigns'
const MUTATE_REQUEST = 'MutateCampaignsRequest'
const OPERATION_REQUEST = 'CampaignOperation'
const GET_METHOD = 'getCampaign'
const GET_REQUEST = 'GetCampaignRequest'
const RESOURCE = 'Campaign'

export default class CampaignService extends Service {
    public async get(id: number | string): Promise<Campaign> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as Campaign
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ campaign: Campaign }>> {
        return this.getListResults('campaign', options)
    }

    public async create(campaign: Campaign | Array<Campaign>, options?: ServiceCreateOptions): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign],
            ...options,
        })
    }

    public async update(campaign: Campaign | Array<Campaign>, options?: ServiceCreateOptions): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign],
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
