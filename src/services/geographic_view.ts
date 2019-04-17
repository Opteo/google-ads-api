// @ts-ignore
import { GeographicView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The geographic_view entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'geographicViews'
const GET_METHOD = 'getGeographicView'
const GET_REQUEST = 'GetGeographicViewRequest'

export default class GeographicViewService extends Service {
    public async get(id: number | string): Promise<GeographicView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as GeographicView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ geographic_view: GeographicView }>> {
        return this.getListResults('geographic_view', options)
    }
}
