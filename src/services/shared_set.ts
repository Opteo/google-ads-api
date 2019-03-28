// @ts-ignore
import { SharedSet } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'sharedSets'
const MUTATE_METHOD = 'mutateSharedSets'
const MUTATE_REQUEST = 'MutateSharedSetsRequest'
const OPERATION_REQUEST = 'SharedSetOperation'
const GET_METHOD = 'getSharedSet'
const GET_REQUEST = 'GetSharedSetRequest'
const RESOURCE = 'SharedSet'

export default class SharedSetService extends Service {
    public async get(id: number | string): Promise<SharedSet> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as SharedSet
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ shared_set: SharedSet }>> {
        return this.getListResults('shared_set', options)
    }

    public async create(
        shared_set: SharedSet | Array<SharedSet>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, shared_set],
            ...options,
        })
    }

    public async update(
        shared_set: SharedSet | Array<SharedSet>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, shared_set],
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
