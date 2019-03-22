/*

    INCOMPLETE

*/

// @ts-ignore
import { GeoTargetConstant } from 'google-ads-node/build/lib/resources'
import * as grpc from 'google-ads-node'
import Service from './service'
import { ServiceListOptions } from '../types'

interface SuggestGeoTargetConstantsRequest {
    locale: string
    country_code: string
    location_names?: {
        names: Array<string>
    }
    geo_targets?: {
        geo_target_constants: Array<string>
    }
}
/**
 * @constants
 */
const RESOURCE_URL_NAME = 'geoTargetConstants'
const GET_METHOD = 'getGeoTargetConstant'
const GET_REQUEST = 'GetGeoTargetConstantRequest'
// const SUGGEST_REQUEST = 'SuggestGeoTargetConstantsRequest'
// const SUGGEST_METHOD = 'suggestGeoTargetConstants'

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
        const request = new grpc.SuggestGeoTargetConstantsRequest()

        request.setLocale(options.locale)

        const pb = this.buildResource(
            'SuggestGeoTargetConstantsRequest',
            options
        ) as grpc.SuggestGeoTargetConstantsRequest

        console.log(pb)

        // await this.service.mutateCustomer(request)
    }
}
