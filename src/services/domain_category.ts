// @ts-ignore
import { DomainCategory } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'domainCategorys'
const MUTATE_METHOD = 'mutateDomainCategorys'
const MUTATE_REQUEST = 'MutateDomainCategorysRequest'
const OPERATION_REQUEST = 'DomainCategoryOperation'
const GET_METHOD = 'getDomainCategory'
const GET_REQUEST = 'GetDomainCategoryRequest'
const RESOURCE = 'DomainCategory'

export default class DomainCategoryService extends Service {
    public async get(id: number | string): Promise<DomainCategory> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as DomainCategory
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ domain_category: DomainCategory }>> {
        return this.getListResults('domain_category', options)
    }

    public async create(
        domain_category: DomainCategory | Array<DomainCategory>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, domain_category],
            ...options,
        })
    }

    public async update(
        domain_category: DomainCategory | Array<DomainCategory>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, domain_category],
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
