// @ts-ignore
import { AdScheduleView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'adScheduleViews'
const MUTATE_METHOD = 'mutateAdScheduleViews'
const MUTATE_REQUEST = 'MutateAdScheduleViewsRequest'
const OPERATION_REQUEST = 'AdScheduleViewOperation'
const GET_METHOD = 'getAdScheduleView'
const GET_REQUEST = 'GetAdScheduleViewRequest'
const RESOURCE = 'AdScheduleView'

export default class AdScheduleViewService extends Service {
    public async get(id: number | string): Promise<AdScheduleView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AdScheduleView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ ad_schedule_view: AdScheduleView }>> {
        return this.getListResults('ad_schedule_view', options)
    }

    public async create(
        ad_schedule_view: AdScheduleView | Array<AdScheduleView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_schedule_view],
            ...options,
        })
    }

    public async update(
        ad_schedule_view: AdScheduleView | Array<AdScheduleView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_schedule_view],
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
