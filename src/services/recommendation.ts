// @ts-ignore
import { Recommendation } from 'google-ads-node/build/lib/resources'
import {
    ApplyRecommendationRequest,
    ApplyRecommendationOperation,
    ApplyRecommendationResponse,
    DismissRecommendationRequest,
    DismissRecommendationResponse,
} from 'google-ads-node'

import Service, { Mutation } from './service'
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

    public async applyRecommendation(resourceName: string, options?: ServiceCreateOptions): Promise<Mutation> {
        const request = new ApplyRecommendationRequest()
        const operation = new ApplyRecommendationOperation()
        operation.setResourceName(resourceName)
        request.setCustomerId(this.cid)
        request.setOperationsList([operation])

        if (options && options.hasOwnProperty('partial_failure')) {
            if (!request.setPartialFailure) {
                throw new Error(`This method does not support the partial_failure option.`)
            }
            request.setPartialFailure(options.partial_failure as boolean)
        }

        const response: ApplyRecommendationResponse.AsObject = await this.service.applyRecommendation(request)
        return {
            request: request.toObject(),
            partial_failure_error: response.partialFailureError,
            results: response.resultsList.map(r => r.resourceName),
        }
    }

    public async dismissRecommendation(resourceName: string, options?: ServiceCreateOptions): Promise<Mutation> {
        const request = new DismissRecommendationRequest()
        const operation = new DismissRecommendationRequest.DismissRecommendationOperation()
        operation.setResourceName(resourceName)

        request.setCustomerId(this.cid)
        request.setOperationsList([operation])

        if (options && options.hasOwnProperty('partial_failure')) {
            if (!request.setPartialFailure) {
                throw new Error(`This method does not support the partial_failure option.`)
            }
            request.setPartialFailure(options.partial_failure as boolean)
        }

        const response: DismissRecommendationResponse.AsObject = await this.service.dismissRecommendation(request)
        return {
            request: request.toObject(),
            partial_failure_error: response.partialFailureError,
            results: response.resultsList.map(r => r.resourceName),
        }
    }
}
