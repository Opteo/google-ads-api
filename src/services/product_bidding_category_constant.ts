// @ts-ignore
import { ProductBiddingCategoryConstant } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'productBiddingCategoryConstants'
const MUTATE_METHOD = 'mutateProductBiddingCategoryConstants'
const MUTATE_REQUEST = 'MutateProductBiddingCategoryConstantsRequest'
const OPERATION_REQUEST = 'ProductBiddingCategoryConstantOperation'
const GET_METHOD = 'getProductBiddingCategoryConstant'
const GET_REQUEST = 'GetProductBiddingCategoryConstantRequest'
const RESOURCE = 'ProductBiddingCategoryConstant'

export default class ProductBiddingCategoryConstantService extends Service {
    public async get(id: number | string): Promise<ProductBiddingCategoryConstant> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as ProductBiddingCategoryConstant
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ product_bidding_category_constant: ProductBiddingCategoryConstant }>> {
        return this.getListResults('product_bidding_category_constant', options)
    }

    public async create(
        product_bidding_category_constant: ProductBiddingCategoryConstant | Array<ProductBiddingCategoryConstant>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, product_bidding_category_constant],
            ...options,
        })
    }

    public async update(
        product_bidding_category_constant: ProductBiddingCategoryConstant | Array<ProductBiddingCategoryConstant>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, product_bidding_category_constant],
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
