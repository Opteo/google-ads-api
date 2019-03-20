// @ts-ignore
import { CustomerNegativeCriterion } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'customerNegativeCriterions'
const MUTATE_METHOD = 'mutateCustomerNegativeCriterions'
const MUTATE_REQUEST = 'MutateCustomerNegativeCriterionsRequest'
const OPERATION_REQUEST = 'CustomerNegativeCriterionOperation'
const GET_METHOD = 'getCustomerNegativeCriterion'
const GET_REQUEST = 'GetCustomerNegativeCriterionRequest'
const RESOURCE = 'CustomerNegativeCriterion'

export default class CustomerNegativeCriterionService extends Service {
    public async get(id: number | string): Promise<CustomerNegativeCriterion> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CustomerNegativeCriterion
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ customer_negative_criterion: CustomerNegativeCriterion }>> {
        return this.getListResults('customer_negative_criterion', options)
    }

    public async create(
        customer_negative_criterion: CustomerNegativeCriterion | Array<CustomerNegativeCriterion>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, customer_negative_criterion],
            ...options,
        })
    }

    public async update(
        customer_negative_criterion: CustomerNegativeCriterion | Array<CustomerNegativeCriterion>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, customer_negative_criterion],
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
