// @ts-ignore
import { AdGroupCriterionSimulation } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'adGroupCriterionSimulations'
const GET_METHOD = 'getAdGroupCriterionSimulation'
const GET_REQUEST = 'GetAdGroupCriterionSimulationRequest'

export default class AdGroupCriterionSimulationService extends Service {
    public async get(id: number | string): Promise<AdGroupCriterionSimulation> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AdGroupCriterionSimulation
    }

    public async list(
        options?: ServiceListOptions
    ): Promise<Array<{ ad_group_criterion_simulation: AdGroupCriterionSimulation }>> {
        return this.getListResults('ad_group_criterion_simulation', options)
    }
}
