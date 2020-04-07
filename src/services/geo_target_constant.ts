// manual_mode: This file has been manually modified and should not be touched by generate_services.js

// @ts-ignore
import { values } from 'lodash'
import { GeoTargetConstant, SuggestGeoTargetConstantsRequest } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

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

    public async suggest(options: SuggestGeoTargetConstantsRequest): Promise<any> {
        const pb = this.buildResource('SuggestGeoTargetConstantsRequest', options)

        const response: any = await new Promise((resolve, reject) => {
            this.service.suggestGeoTargetConstants(pb, (err: any, res: any) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })

        const parsed = this.parseServiceResults(values(response.geoTargetConstantSuggestions))

        return parsed
    }
}
