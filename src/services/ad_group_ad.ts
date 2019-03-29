// @ts-ignore
import { AdGroupAd } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'adGroupAds'
const MUTATE_METHOD = 'mutateAdGroupAds'
const MUTATE_REQUEST = 'MutateAdGroupAdsRequest'
const OPERATION_REQUEST = 'AdGroupAdOperation'
const GET_METHOD = 'getAdGroupAd'
const GET_REQUEST = 'GetAdGroupAdRequest'
const RESOURCE = 'AdGroupAd'

export default class AdGroupAdService extends Service {
    public async get(id: number | string): Promise<AdGroupAd> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AdGroupAd
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ ad_group_ad: AdGroupAd }>> {
        return this.getListResults('ad_group_ad', options)
    }

    public async create(
        ad_group_ad: AdGroupAd | Array<AdGroupAd>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_ad],
            ...options,
        })
    }

    public async update(
        ad_group_ad: AdGroupAd | Array<AdGroupAd>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_ad],
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
