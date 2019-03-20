// @ts-ignore
import { GeoTargetConstant } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'geoTargetConstants'
const MUTATE_METHOD = 'mutateGeoTargetConstants'
const MUTATE_REQUEST = 'MutateGeoTargetConstantsRequest'
const OPERATION_REQUEST = 'GeoTargetConstantOperation'
const GET_METHOD = 'getGeoTargetConstant'
const GET_REQUEST = 'GetGeoTargetConstantRequest'
const RESOURCE = 'GeoTargetConstant'

export default class GeoTargetConstantService extends Service {
    public async get(id: number | string): Promise<GeoTargetConstant> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as GeoTargetConstant
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ geo_target_constant: GeoTargetConstant }>> {
        return this.getListResults('geo_target_constant', options)
    }

    public async create(
        geo_target_constant: GeoTargetConstant | Array<GeoTargetConstant>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, geo_target_constant],
            ...options,
        })
    }

    public async update(
        geo_target_constant: GeoTargetConstant | Array<GeoTargetConstant>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, geo_target_constant],
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
