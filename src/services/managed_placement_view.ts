// @ts-ignore
import { ManagedPlacementView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'managedPlacementViews'
const MUTATE_METHOD = 'mutateManagedPlacementViews'
const MUTATE_REQUEST = 'MutateManagedPlacementViewsRequest'
const OPERATION_REQUEST = 'ManagedPlacementViewOperation'
const GET_METHOD = 'getManagedPlacementView'
const GET_REQUEST = 'GetManagedPlacementViewRequest'
const RESOURCE = 'ManagedPlacementView'

export default class ManagedPlacementViewService extends Service {
    public async get(id: number | string): Promise<ManagedPlacementView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as ManagedPlacementView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ managed_placement_view: ManagedPlacementView }>> {
        return this.getListResults('managed_placement_view', options)
    }

    public async create(
        managed_placement_view: ManagedPlacementView | Array<ManagedPlacementView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, managed_placement_view],
            ...options,
        })
    }

    public async update(
        managed_placement_view: ManagedPlacementView | Array<ManagedPlacementView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, managed_placement_view],
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
