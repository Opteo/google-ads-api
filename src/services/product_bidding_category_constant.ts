// @ts-ignore
import { ProductBiddingCategoryConstant } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The product_bidding_category_constant entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'productBiddingCategoryConstants'
const GET_METHOD = 'getProductBiddingCategoryConstant'
const GET_REQUEST = 'GetProductBiddingCategoryConstantRequest'

export default class ProductBiddingCategoryConstantService extends Service {
    public async get(id: number | string): Promise<ProductBiddingCategoryConstant> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as ProductBiddingCategoryConstant
    }

    public async list(
        options?: ServiceListOptions
    ): Promise<Array<{ product_bidding_category_constant: ProductBiddingCategoryConstant }>> {
        return this.getListResults('product_bidding_category_constant', options)
    }
}
