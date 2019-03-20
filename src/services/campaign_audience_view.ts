// @ts-ignore
import { CampaignAudienceView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'campaignAudienceViews'
const MUTATE_METHOD = 'mutateCampaignAudienceViews'
const MUTATE_REQUEST = 'MutateCampaignAudienceViewsRequest'
const OPERATION_REQUEST = 'CampaignAudienceViewOperation'
const GET_METHOD = 'getCampaignAudienceView'
const GET_REQUEST = 'GetCampaignAudienceViewRequest'
const RESOURCE = 'CampaignAudienceView'

export default class CampaignAudienceViewService extends Service {
    public async get(id: number | string): Promise<CampaignAudienceView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CampaignAudienceView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ campaign_audience_view: CampaignAudienceView }>> {
        return this.getListResults('campaign_audience_view', options)
    }

    public async create(
        campaign_audience_view: CampaignAudienceView | Array<CampaignAudienceView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_audience_view],
            ...options,
        })
    }

    public async update(
        campaign_audience_view: CampaignAudienceView | Array<CampaignAudienceView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_audience_view],
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
