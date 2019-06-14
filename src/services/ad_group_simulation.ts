// @ts-ignore
import { AdGroupSimulation } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'adGroupSimulations'
const GET_METHOD = 'getAdGroupSimulation'
const GET_REQUEST = 'GetAdGroupSimulationRequest'

export default class AdGroupSimulationService extends Service {
    public async get(id: number | string): Promise<AdGroupSimulation> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AdGroupSimulation
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ ad_group_simulation: AdGroupSimulation }>> {
        return this.getListResults('ad_group_simulation', options)
    }
}
