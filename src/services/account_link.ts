// @ts-ignore
import { AccountLink } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'accountLinks'
const MUTATE_METHOD = 'mutateAccountLink'
const MUTATE_REQUEST = 'MutateAccountLinkRequest'
const OPERATION_REQUEST = 'AccountLinkOperation'
const GET_METHOD = 'getAccountLink'
const GET_REQUEST = 'GetAccountLinkRequest'
const RESOURCE = 'AccountLink'

export default class AccountLinkService extends Service {
    public async get(id: number | string): Promise<AccountLink> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AccountLink
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ account_link: AccountLink }>> {
        return this.getListResults('account_link', options)
    }

    public async create(
        account_link: AccountLink | Array<AccountLink>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, account_link],
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
