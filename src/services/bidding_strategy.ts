// @ts-ignore
import { BiddingStrategy } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The bidding_strategy entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'biddingStrategies'
const MUTATE_METHOD = 'mutatebiddingStrategies'
const MUTATE_REQUEST = 'MutateBiddingStrategiesRequest'
const OPERATION_REQUEST = 'BiddingStrategyOperation'
const GET_METHOD = 'getBiddingStrategy'
const GET_REQUEST = 'GetBiddingStrategyRequest'
const RESOURCE = 'BiddingStrategy'

export default class BiddingStrategyService extends Service {
    public async get(id: number | string): Promise<BiddingStrategy> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as BiddingStrategy
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ bidding_strategy: BiddingStrategy }>> {
        return this.getListResults('bidding_strategy', options)
    }

    public async create(
        bidding_strategy: BiddingStrategy | Array<BiddingStrategy>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, bidding_strategy],
            ...options,
        })
    }

    public async update(
        bidding_strategy: BiddingStrategy | Array<BiddingStrategy>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, bidding_strategy],
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
