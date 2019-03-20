// @ts-ignore
import { HotelGroupView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'hotelGroupViews'
const MUTATE_METHOD = 'mutateHotelGroupViews'
const MUTATE_REQUEST = 'MutateHotelGroupViewsRequest'
const OPERATION_REQUEST = 'HotelGroupViewOperation'
const GET_METHOD = 'getHotelGroupView'
const GET_REQUEST = 'GetHotelGroupViewRequest'
const RESOURCE = 'HotelGroupView'

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

    public async create(
        hotel_group_view: HotelGroupView | Array<HotelGroupView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, hotel_group_view],
            ...options,
        })
    }

    public async update(
        hotel_group_view: HotelGroupView | Array<HotelGroupView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, hotel_group_view],
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
