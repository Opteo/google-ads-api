// @ts-ignore
import { GroupPlacementView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'groupPlacementViews'
const MUTATE_METHOD = 'mutateGroupPlacementViews'
const MUTATE_REQUEST = 'MutateGroupPlacementViewsRequest'
const OPERATION_REQUEST = 'GroupPlacementViewOperation'
const GET_METHOD = 'getGroupPlacementView'
const GET_REQUEST = 'GetGroupPlacementViewRequest'
const RESOURCE = 'GroupPlacementView'

export default class GroupPlacementViewService extends Service {
    public async get(id: number | string): Promise<GroupPlacementView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as GroupPlacementView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ group_placement_view: GroupPlacementView }>> {
        return this.getListResults('group_placement_view', options)
    }

    public async create(
        group_placement_view: GroupPlacementView | Array<GroupPlacementView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, group_placement_view],
            ...options,
        })
    }

    public async update(
        group_placement_view: GroupPlacementView | Array<GroupPlacementView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, group_placement_view],
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
