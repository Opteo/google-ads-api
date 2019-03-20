// @ts-ignore
import { GeographicView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'geographicViews'
const MUTATE_METHOD = 'mutateGeographicViews'
const MUTATE_REQUEST = 'MutateGeographicViewsRequest'
const OPERATION_REQUEST = 'GeographicViewOperation'
const GET_METHOD = 'getGeographicView'
const GET_REQUEST = 'GetGeographicViewRequest'
const RESOURCE = 'GeographicView'

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

    public async create(
        geographic_view: GeographicView | Array<GeographicView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, geographic_view],
            ...options,
        })
    }

    public async update(
        geographic_view: GeographicView | Array<GeographicView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, geographic_view],
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
