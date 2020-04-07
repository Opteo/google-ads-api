// manual_mode: This file has been manually modified and should not be touched by generate_services.js
import { Ad } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'ads'
const MUTATE_METHOD = 'mutateAds'
const MUTATE_REQUEST = 'MutateAdsRequest'
const OPERATION_REQUEST = 'AdOperation'
const GET_METHOD = 'getAd'
const GET_REQUEST = 'GetAdRequest'
const RESOURCE = 'Ad'

export default class AdGroupAdService extends Service {
    public async get(resource_name: string): Promise<Ad> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${resource_name}`,
            method: GET_METHOD,
            entity_id: resource_name,
        }) as Ad
    }

    public async update(ad: Ad | Array<Ad>, options?: ServiceCreateOptions): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad],
            ...options,
        })
    }
}
