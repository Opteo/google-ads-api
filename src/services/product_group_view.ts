// @ts-ignore
import { ProductGroupView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'productGroupViews'
const GET_METHOD = 'getProductGroupView'
const GET_REQUEST = 'GetProductGroupViewRequest'

export default class ProductGroupViewService extends Service {
    public async get(id: number | string): Promise<ProductGroupView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as ProductGroupView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ product_group_view: ProductGroupView }>> {
        return this.getListResults('product_group_view', options)
    }
}
