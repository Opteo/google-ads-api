// @ts-ignore
import { CampaignLabel } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The campaign_label entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'campaignLabels'
const MUTATE_METHOD = 'mutateCampaignLabels'
const MUTATE_REQUEST = 'MutateCampaignLabelsRequest'
const OPERATION_REQUEST = 'CampaignLabelOperation'
const GET_METHOD = 'getCampaignLabel'
const GET_REQUEST = 'GetCampaignLabelRequest'
const RESOURCE = 'CampaignLabel'

export default class CampaignLabelService extends Service {
    public async get(id: number | string): Promise<CampaignLabel> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CampaignLabel
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ campaign_label: CampaignLabel }>> {
        return this.getListResults('campaign_label', options)
    }

    public async create(
        campaign_label: CampaignLabel | Array<CampaignLabel>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_label],
            ...options,
        })
    }

    public async update(
        campaign_label: CampaignLabel | Array<CampaignLabel>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_label],
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
