// @ts-ignore
import { CampaignSharedSet } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The campaign_shared_set entity:

const campaign_shared_set = {
    shared_set: 'string', // The shared set associated with the campaign. This may be a negative keyword shared set of another customer. This customer should be a manager of the other customer, otherwise the campaign shared set will exist but have no serving effect. Only negative keyword shared sets can be associated with Shopping campaigns. Only negative placement shared sets can be associated with Display mobile app campaigns.
    status: 'UNSPECIFIED | UNKNOWN | ENABLED | REMOVED', // The status of this campaign shared set. Read only.
    campaign: 'string', // The campaign to which the campaign shared set belongs.
    resource_name: 'string', // The resource name of the campaign shared set. Campaign shared set resource names have the form:  `customers/{customer_id}/campaignSharedSets/{campaign_id}~{shared_set_id}`
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'campaignSharedSets'
const MUTATE_METHOD = 'mutateCampaignSharedSets'
const MUTATE_REQUEST = 'MutateCampaignSharedSetsRequest'
const OPERATION_REQUEST = 'CampaignSharedSetOperation'
const GET_METHOD = 'getCampaignSharedSet'
const GET_REQUEST = 'GetCampaignSharedSetRequest'
const RESOURCE = 'CampaignSharedSet'

export default class CampaignSharedSetService extends Service {
    public async get(id: number | string): Promise<CampaignSharedSet> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CampaignSharedSet
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ campaign_shared_set: CampaignSharedSet }>> {
        return this.getListResults('campaign_shared_set', options)
    }

    public async create(
        campaign_shared_set: CampaignSharedSet | Array<CampaignSharedSet>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_shared_set],
            ...options,
        })
    }

    public async update(
        campaign_shared_set: CampaignSharedSet | Array<CampaignSharedSet>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_shared_set],
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
