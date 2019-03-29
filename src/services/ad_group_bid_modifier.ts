// @ts-ignore
import { AdGroupBidModifier } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'adGroupBidModifiers'
const MUTATE_METHOD = 'mutateAdGroupBidModifiers'
const MUTATE_REQUEST = 'MutateAdGroupBidModifiersRequest'
const OPERATION_REQUEST = 'AdGroupBidModifierOperation'
const GET_METHOD = 'getAdGroupBidModifier'
const GET_REQUEST = 'GetAdGroupBidModifierRequest'
const RESOURCE = 'AdGroupBidModifier'

export default class AdGroupBidModifierService extends Service {
    public async get(id: number | string): Promise<AdGroupBidModifier> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AdGroupBidModifier
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ ad_group_bid_modifier: AdGroupBidModifier }>> {
        return this.getListResults('ad_group_bid_modifier', options)
    }

    public async create(
        ad_group_bid_modifier: AdGroupBidModifier | Array<AdGroupBidModifier>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_bid_modifier],
            ...options,
        })
    }

    public async update(
        ad_group_bid_modifier: AdGroupBidModifier | Array<AdGroupBidModifier>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_bid_modifier],
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
