// @ts-ignore
import { CustomInterest } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The custom_interest entity:

const custom_interest = {
    members: 'array', // List of custom interest members that this custom interest is composed of. Members can be added during CustomInterest creation. If members are presented in UPDATE operation, existing members will be overridden.
    status: 'UNSPECIFIED | UNKNOWN | ENABLED | REMOVED', // Status of this custom interest. Indicates whether the custom interest is enabled or removed.
    name: 'string', // Name of the custom interest. It should be unique across the same custom affinity audience. This field is required for create operations.
    type: 'UNSPECIFIED | UNKNOWN | CUSTOM_AFFINITY | CUSTOM_INTENT', // Type of the custom interest, CUSTOM_AFFINITY or CUSTOM_INTENT. By default the type is set to CUSTOM_AFFINITY.
    id: 'string', // Id of the custom interest.
    resource_name: 'string', // The resource name of the custom interest. Custom interest resource names have the form:  `customers/{customer_id}/customInterests/{custom_interest_id}`
    description: 'string', // Description of this custom interest audience.
}

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
