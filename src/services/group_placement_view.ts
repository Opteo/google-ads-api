// @ts-ignore
import { GroupPlacementView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The group_placement_view entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'groupPlacementViews'
const GET_METHOD = 'getGroupPlacementView'
const GET_REQUEST = 'GetGroupPlacementViewRequest'

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
}
