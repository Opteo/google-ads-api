// @ts-ignore
import { LocationView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'locationViews'
const MUTATE_METHOD = 'mutateLocationViews'
const MUTATE_REQUEST = 'MutateLocationViewsRequest'
const OPERATION_REQUEST = 'LocationViewOperation'
const GET_METHOD = 'getLocationView'
const GET_REQUEST = 'GetLocationViewRequest'
const RESOURCE = 'LocationView'

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

    public async create(
        location_view: LocationView | Array<LocationView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, location_view],
            ...options,
        })
    }

    public async update(
        location_view: LocationView | Array<LocationView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, location_view],
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
