// @ts-ignore
import { ShoppingPerformanceView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'shoppingPerformanceViews'
const MUTATE_METHOD = 'mutateShoppingPerformanceViews'
const MUTATE_REQUEST = 'MutateShoppingPerformanceViewsRequest'
const OPERATION_REQUEST = 'ShoppingPerformanceViewOperation'
const GET_METHOD = 'getShoppingPerformanceView'
const GET_REQUEST = 'GetShoppingPerformanceViewRequest'
const RESOURCE = 'ShoppingPerformanceView'

export default class ShoppingPerformanceViewService extends Service {
    public async get(id: number | string): Promise<ShoppingPerformanceView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as ShoppingPerformanceView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ shopping_performance_view: ShoppingPerformanceView }>> {
        return this.getListResults('shopping_performance_view', options)
    }

    public async create(
        shopping_performance_view: ShoppingPerformanceView | Array<ShoppingPerformanceView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, shopping_performance_view],
            ...options,
        })
    }

    public async update(
        shopping_performance_view: ShoppingPerformanceView | Array<ShoppingPerformanceView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, shopping_performance_view],
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
