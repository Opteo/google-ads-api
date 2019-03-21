// @ts-ignore
import { ShoppingPerformanceView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'shoppingPerformanceViews'
const GET_METHOD = 'getShoppingPerformanceView'
const GET_REQUEST = 'GetShoppingPerformanceViewRequest'

export default class ShoppingPerformanceViewService extends Service {
    public async get(id: number | string): Promise<ShoppingPerformanceView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as ShoppingPerformanceView
    }

    public async list(
        options?: ServiceListOptions
    ): Promise<Array<{ shopping_performance_view: ShoppingPerformanceView }>> {
        return this.getListResults('shopping_performance_view', options)
    }
}
