// @ts-ignore
import { ManagedPlacementView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The managed_placement_view entity:

const managed_placement_view = {
    resource_name: 'string', // The resource name of the Managed Placement view. Managed placement view resource names have the form:   `customers/{customer_id}/managedPlacementViews/{ad_group_id}~{criterion_id}`
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'managedPlacementViews'
const GET_METHOD = 'getManagedPlacementView'
const GET_REQUEST = 'GetManagedPlacementViewRequest'

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
}
