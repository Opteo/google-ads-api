// @ts-ignore
import { Recommendation } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'recommendations'
const GET_METHOD = 'getRecommendation'
const GET_REQUEST = 'GetRecommendationRequest'

export default class RecommendationService extends Service {
    public async get(id: number | string): Promise<Recommendation> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as Recommendation
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ recommendation: Recommendation }>> {
        return this.getListResults('recommendation', options)
    }
}
