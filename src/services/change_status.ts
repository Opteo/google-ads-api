// @ts-ignore
import { ChangeStatus } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'changeStatus'
const MUTATE_METHOD = 'mutateChangeStatuss'
const MUTATE_REQUEST = 'MutateChangeStatussRequest'
const OPERATION_REQUEST = 'ChangeStatusOperation'
const GET_METHOD = 'getChangeStatus'
const GET_REQUEST = 'GetChangeStatusRequest'
const RESOURCE = 'ChangeStatus'

export default class ChangeStatusService extends Service {
    public async get(id: number | string): Promise<ChangeStatus> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as ChangeStatus
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ change_status: ChangeStatus }>> {
        return this.getListResults('change_status', options)
    }

    public async create(
        change_status: ChangeStatus | Array<ChangeStatus>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, change_status],
            ...options,
        })
    }

    public async update(
        change_status: ChangeStatus | Array<ChangeStatus>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, change_status],
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
