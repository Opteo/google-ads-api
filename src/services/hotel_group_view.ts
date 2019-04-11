// @ts-ignore
import { HotelGroupView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The hotel_group_view entity:

const hotel_group_view = {
    resource_name: 'string', // The resource name of the hotel group view. Hotel Group view resource names have the form:  `customers/{customer_id}/hotelGroupViews/{ad_group_id}~{criterion_id}`
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'hotelGroupViews'
const GET_METHOD = 'getHotelGroupView'
const GET_REQUEST = 'GetHotelGroupViewRequest'

export default class HotelGroupViewService extends Service {
    public async get(id: number | string): Promise<HotelGroupView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as HotelGroupView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ hotel_group_view: HotelGroupView }>> {
        return this.getListResults('hotel_group_view', options)
    }
}
