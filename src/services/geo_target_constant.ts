import {
    GeoTargetConstant,
    SuggestGeoTargetConstantsRequest,
} from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'
import { values } from 'lodash'

// The geo_target_constant entity:

const geo_target_constant = {
    canonical_name: 'string', // The fully qualified English name, consisting of the target's name and that of its parent and country.
    resource_name: 'string', // The resource name of the geo target constant. Geo target constant resource names have the form:  `geoTargetConstants/{geo_target_constant_id}`
    country_code: 'string', // The ISO-3166-1 alpha-2 country code that is associated with the target.
    target_type: 'string', // Geo target constant target type.
    status: 'UNSPECIFIED | UNKNOWN | ENABLED | REMOVAL_PLANNED', // Geo target constant status.
    name: 'string', // Geo target constant English name.
    id: 'string', // The ID of the geo target constant.
}

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

    public async list(
        options?: ServiceListOptions
    ): Promise<Array<{ geo_target_constant: GeoTargetConstant }>> {
        return this.getListResults('geo_target_constant', options)
    }

    public async suggest(options: SuggestGeoTargetConstantsRequest): Promise<any> {
        const pb = this.buildResource('SuggestGeoTargetConstantsRequest', options)

        const response = await this.service.suggestGeoTargetConstants(pb)

        const parsed = this.parseServiceResults(values(response.geoTargetConstantSuggestions))

        return parsed
    }
}
