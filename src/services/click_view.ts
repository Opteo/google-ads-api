// @ts-ignore
import { ClickView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'clickViews'
const MUTATE_METHOD = 'mutateClickViews'
const MUTATE_REQUEST = 'MutateClickViewsRequest'
const OPERATION_REQUEST = 'ClickViewOperation'
const GET_METHOD = 'getClickView'
const GET_REQUEST = 'GetClickViewRequest'
const RESOURCE = 'ClickView'

export default class ClickViewService extends Service {
    public async get(id: number | string): Promise<ClickView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as ClickView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ click_view: ClickView }>> {
        return this.getListResults('click_view', options)
    }

    public async create(
        click_view: ClickView | Array<ClickView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, click_view],
            ...options,
        })
    }

    public async update(
        click_view: ClickView | Array<ClickView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, click_view],
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
