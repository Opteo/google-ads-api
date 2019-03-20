// @ts-ignore
import { CustomInterest } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'customInterests'
const MUTATE_METHOD = 'mutateCustomInterests'
const MUTATE_REQUEST = 'MutateCustomInterestsRequest'
const OPERATION_REQUEST = 'CustomInterestOperation'
const GET_METHOD = 'getCustomInterest'
const GET_REQUEST = 'GetCustomInterestRequest'
const RESOURCE = 'CustomInterest'

export default class CustomInterestService extends Service {
    public async get(id: number | string): Promise<CustomInterest> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CustomInterest
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ custom_interest: CustomInterest }>> {
        return this.getListResults('custom_interest', options)
    }

    public async create(
        custom_interest: CustomInterest | Array<CustomInterest>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, custom_interest],
            ...options,
        })
    }

    public async update(
        custom_interest: CustomInterest | Array<CustomInterest>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, custom_interest],
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
