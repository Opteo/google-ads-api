// @ts-ignore
import { OperatingSystemVersionConstant } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'operatingSystemVersionConstants'
const MUTATE_METHOD = 'mutateOperatingSystemVersionConstants'
const MUTATE_REQUEST = 'MutateOperatingSystemVersionConstantsRequest'
const OPERATION_REQUEST = 'OperatingSystemVersionConstantOperation'
const GET_METHOD = 'getOperatingSystemVersionConstant'
const GET_REQUEST = 'GetOperatingSystemVersionConstantRequest'
const RESOURCE = 'OperatingSystemVersionConstant'

export default class OperatingSystemVersionConstantService extends Service {
    public async get(id: number | string): Promise<OperatingSystemVersionConstant> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as OperatingSystemVersionConstant
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ operating_system_version_constant: OperatingSystemVersionConstant }>> {
        return this.getListResults('operating_system_version_constant', options)
    }

    public async create(
        operating_system_version_constant: OperatingSystemVersionConstant | Array<OperatingSystemVersionConstant>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, operating_system_version_constant],
            ...options,
        })
    }

    public async update(
        operating_system_version_constant: OperatingSystemVersionConstant | Array<OperatingSystemVersionConstant>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, operating_system_version_constant],
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
