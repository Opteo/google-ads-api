// manual_mode: This file has been manually modified and should not be touched by generate_services.js

import { Asset } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'assets'
const MUTATE_METHOD = 'mutateAssets'
const MUTATE_REQUEST = 'MutateAssetsRequest'
const OPERATION_REQUEST = 'AssetOperation'
const GET_METHOD = 'getAsset'
const GET_REQUEST = 'GetAssetRequest'
const RESOURCE = 'Asset'

export default class AdGroupAdService extends Service {
    public async get(id: number | string): Promise<Asset> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as Asset
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ asset: Asset }>> {
        return this.getListResults('asset', options)
    }

    public async create(asset: Asset | Array<Asset>, options?: ServiceCreateOptions): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, asset],
            ...options,
        })
    }
}
