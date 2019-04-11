// @ts-ignore
import { ProductBiddingCategoryConstant } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The product_bidding_category_constant entity:

const product_bidding_category_constant = {
    localized_name: 'string', // Display value of the product bidding category localized according to language_code.
    resource_name: 'string', // The resource name of the product bidding category. Product bidding category resource names have the form:  `productBiddingCategoryConstants/{country_code}~{level}~{id}`
    country_code: 'string', // Two-letter upper-case country code of the product bidding category.
    language_code: 'string', // Language code of the product bidding category.
    status: 'UNSPECIFIED | UNKNOWN | ACTIVE | OBSOLETE', // Status of the product bidding category.
    product_bidding_category_constant_parent: 'string', // Resource name of the parent product bidding category.
    level: 'UNSPECIFIED | UNKNOWN | LEVEL1 | LEVEL2 | LEVEL3 | LEVEL4 | LEVEL5', // Level of the product bidding category.
    id: 'string', // ID of the product bidding category.  This ID is equivalent to the google_product_category ID as described in this article: https://support.google.com/merchants/answer/6324436.
}

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
