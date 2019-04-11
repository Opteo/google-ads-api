// @ts-ignore
import { HotelPerformanceView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The hotel_performance_view entity:

const hotel_performance_view = {
    resource_name: 'string', // The resource name of the hotel performance view. Hotel performance view resource names have the form:  `customers/{customer_id}/hotelPerformanceView`
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'hotelPerformanceViews'
const GET_METHOD = 'getHotelPerformanceView'
const GET_REQUEST = 'GetHotelPerformanceViewRequest'

export default class HotelPerformanceViewService extends Service {
    public async get(id: number | string): Promise<HotelPerformanceView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as HotelPerformanceView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ hotel_performance_view: HotelPerformanceView }>> {
        return this.getListResults('hotel_performance_view', options)
    }
}
