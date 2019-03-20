// @ts-ignore
import { ProductGroupView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'productGroupViews'
const MUTATE_METHOD = 'mutateProductGroupViews'
const MUTATE_REQUEST = 'MutateProductGroupViewsRequest'
const OPERATION_REQUEST = 'ProductGroupViewOperation'
const GET_METHOD = 'getProductGroupView'
const GET_REQUEST = 'GetProductGroupViewRequest'
const RESOURCE = 'ProductGroupView'

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

    public async create(
        product_group_view: ProductGroupView | Array<ProductGroupView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, product_group_view],
            ...options,
        })
    }

    public async update(
        product_group_view: ProductGroupView | Array<ProductGroupView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, product_group_view],
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
