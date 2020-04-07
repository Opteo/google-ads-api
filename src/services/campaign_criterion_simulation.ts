// @ts-ignore
import { CampaignCriterionSimulation } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'campaignCriterionSimulations'
const GET_METHOD = 'getCampaignCriterionSimulation'
const GET_REQUEST = 'GetCampaignCriterionSimulationRequest'

export default class CampaignCriterionSimulationService extends Service {
    public async get(id: number | string): Promise<CampaignCriterionSimulation> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CampaignCriterionSimulation
    }

    public async list(
        options?: ServiceListOptions
    ): Promise<Array<{ campaign_criterion_simulation: CampaignCriterionSimulation }>> {
        return this.getListResults('campaign_criterion_simulation', options)
    }
}
