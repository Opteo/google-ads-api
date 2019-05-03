// @ts-ignore
import { AccountBudget } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'accountBudgets'
const GET_METHOD = 'getAccountBudget'
const GET_REQUEST = 'GetAccountBudgetRequest'

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
}
