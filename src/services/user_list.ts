// @ts-ignore
import { UserList } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'userLists'
const MUTATE_METHOD = 'mutateUserLists'
const MUTATE_REQUEST = 'MutateUserListsRequest'
const OPERATION_REQUEST = 'UserListOperation'
const GET_METHOD = 'getUserList'
const GET_REQUEST = 'GetUserListRequest'
const RESOURCE = 'UserList'

export default class UserListService extends Service {
    public async get(id: number | string): Promise<UserList> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as UserList
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ user_list: UserList }>> {
        return this.getListResults('user_list', options)
    }

    public async create(
        user_list: UserList | Array<UserList>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, user_list],
            ...options,
        })
    }

    public async update(
        user_list: UserList | Array<UserList>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, user_list],
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
