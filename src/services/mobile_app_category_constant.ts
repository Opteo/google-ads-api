// @ts-ignore
import { MobileAppCategoryConstant } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'mobileAppCategoryConstants'
const MUTATE_METHOD = 'mutateMobileAppCategoryConstants'
const MUTATE_REQUEST = 'MutateMobileAppCategoryConstantsRequest'
const OPERATION_REQUEST = 'MobileAppCategoryConstantOperation'
const GET_METHOD = 'getMobileAppCategoryConstant'
const GET_REQUEST = 'GetMobileAppCategoryConstantRequest'
const RESOURCE = 'MobileAppCategoryConstant'

export default class MobileAppCategoryConstantService extends Service {
    public async get(id: number | string): Promise<MobileAppCategoryConstant> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as MobileAppCategoryConstant
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ mobile_app_category_constant: MobileAppCategoryConstant }>> {
        return this.getListResults('mobile_app_category_constant', options)
    }

    public async create(
        mobile_app_category_constant: MobileAppCategoryConstant | Array<MobileAppCategoryConstant>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, mobile_app_category_constant],
            ...options,
        })
    }

    public async update(
        mobile_app_category_constant: MobileAppCategoryConstant | Array<MobileAppCategoryConstant>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, mobile_app_category_constant],
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
