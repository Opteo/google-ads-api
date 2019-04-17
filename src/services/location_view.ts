// @ts-ignore
import { LocationView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The location_view entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'locationViews'
const GET_METHOD = 'getLocationView'
const GET_REQUEST = 'GetLocationViewRequest'

export default class LocationViewService extends Service {
    public async get(id: number | string): Promise<LocationView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as LocationView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ location_view: LocationView }>> {
        return this.getListResults('location_view', options)
    }
}
