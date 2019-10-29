// @ts-ignore
import { Recommendation } from 'google-ads-node/build/lib/resources'
import { ApplyRecommendationRequest, ApplyRecommendationOperation, ApplyRecommendationResponse } from 'google-ads-node'

import Service from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

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

    public async applyRecommendation(
        resourceName: string,
        options?: ServiceCreateOptions
    ): Promise<ApplyRecommendationResponse.AsObject> {
        const request = new ApplyRecommendationRequest()
        const operation = new ApplyRecommendationOperation()
        operation.setResourceName(resourceName)
        request.setCustomerId(this.cid)
        request.setOperationsList([operation])
        return this.service.applyRecommendation(request, options)
    }
}
