// @ts-ignore
import { HotelPerformanceView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'hotelPerformanceViews'
const MUTATE_METHOD = 'mutateHotelPerformanceViews'
const MUTATE_REQUEST = 'MutateHotelPerformanceViewsRequest'
const OPERATION_REQUEST = 'HotelPerformanceViewOperation'
const GET_METHOD = 'getHotelPerformanceView'
const GET_REQUEST = 'GetHotelPerformanceViewRequest'
const RESOURCE = 'HotelPerformanceView'

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

    public async create(
        hotel_performance_view: HotelPerformanceView | Array<HotelPerformanceView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, hotel_performance_view],
            ...options,
        })
    }

    public async update(
        hotel_performance_view: HotelPerformanceView | Array<HotelPerformanceView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, hotel_performance_view],
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
