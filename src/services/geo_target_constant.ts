// @ts-ignore
import { GeoTargetConstant } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The geo_target_constant entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'geoTargetConstants'
const GET_METHOD = 'getGeoTargetConstant'
const GET_REQUEST = 'GetGeoTargetConstantRequest'

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
}
