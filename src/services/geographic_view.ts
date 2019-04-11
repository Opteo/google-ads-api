// @ts-ignore
import { GeographicView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The geographic_view entity:

const geographic_view = {
    resource_name: 'string', // The resource name of the geographic view. Geographic view resource names have the form:   `customers/{customer_id}/geographicViews/{country_criterion_id}~{location_type}`
    location_type: 'UNSPECIFIED | UNKNOWN | AREA_OF_INTEREST | LOCATION_OF_PRESENCE', // Type of the geo targeting of the campaign.
    country_geo_target_constant: 'string', // CriterionId for the geo target for a country.
}

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
