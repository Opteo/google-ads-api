// @ts-ignore
import { UserInterest } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'userInterests'
const MUTATE_METHOD = 'mutateUserInterests'
const MUTATE_REQUEST = 'MutateUserInterestsRequest'
const OPERATION_REQUEST = 'UserInterestOperation'
const GET_METHOD = 'getUserInterest'
const GET_REQUEST = 'GetUserInterestRequest'
const RESOURCE = 'UserInterest'

export default class UserInterestService extends Service {
    public async get(id: number | string): Promise<UserInterest> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as UserInterest
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ user_interest: UserInterest }>> {
        return this.getListResults('user_interest', options)
    }

    public async create(
        user_interest: UserInterest | Array<UserInterest>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, user_interest],
            ...options,
        })
    }

    public async update(
        user_interest: UserInterest | Array<UserInterest>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, user_interest],
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
