// @ts-ignore
import { ParentalStatusView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'parentalStatusViews'
const MUTATE_METHOD = 'mutateParentalStatusViews'
const MUTATE_REQUEST = 'MutateParentalStatusViewsRequest'
const OPERATION_REQUEST = 'ParentalStatusViewOperation'
const GET_METHOD = 'getParentalStatusView'
const GET_REQUEST = 'GetParentalStatusViewRequest'
const RESOURCE = 'ParentalStatusView'

export default class ParentalStatusViewService extends Service {
    public async get(id: number | string): Promise<ParentalStatusView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as ParentalStatusView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ parental_status_view: ParentalStatusView }>> {
        return this.getListResults('parental_status_view', options)
    }

    public async create(
        parental_status_view: ParentalStatusView | Array<ParentalStatusView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, parental_status_view],
            ...options,
        })
    }

    public async update(
        parental_status_view: ParentalStatusView | Array<ParentalStatusView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, parental_status_view],
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
