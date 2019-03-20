// @ts-ignore
import { AccountBudget } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'accountBudgets'
const MUTATE_METHOD = 'mutateAccountBudgets'
const MUTATE_REQUEST = 'MutateAccountBudgetsRequest'
const OPERATION_REQUEST = 'AccountBudgetOperation'
const GET_METHOD = 'getAccountBudget'
const GET_REQUEST = 'GetAccountBudgetRequest'
const RESOURCE = 'AccountBudget'

export default class AccountBudgetService extends Service {
    public async get(id: number | string): Promise<AccountBudget> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AccountBudget
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ account_budget: AccountBudget }>> {
        return this.getListResults('account_budget', options)
    }

    public async create(
        account_budget: AccountBudget | Array<AccountBudget>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, account_budget],
            ...options,
        })
    }

    public async update(
        account_budget: AccountBudget | Array<AccountBudget>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, account_budget],
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
