// @ts-ignore
import { AccountBudgetProposal } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'accountBudgetProposals'
const MUTATE_METHOD = 'mutateAccountBudgetProposal'
const MUTATE_REQUEST = 'MutateAccountBudgetProposalRequest'
const OPERATION_REQUEST = 'AccountBudgetProposalOperation'
const GET_METHOD = 'getAccountBudgetProposal'
const GET_REQUEST = 'GetAccountBudgetProposalRequest'
const RESOURCE = 'AccountBudgetProposal'

export default class AccountBudgetProposalService extends Service {
    public async get(id: number | string): Promise<AccountBudgetProposal> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AccountBudgetProposal
    }

    public async list(
        options?: ServiceListOptions
    ): Promise<Array<{ account_budget_proposal: AccountBudgetProposal }>> {
        return this.getListResults('account_budget_proposal', options)
    }

    public async create(
        account_budget_proposal: AccountBudgetProposal | Array<AccountBudgetProposal>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, account_budget_proposal],
            ...options,
        })
    }

    public async update(
        account_budget_proposal: AccountBudgetProposal | Array<AccountBudgetProposal>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, account_budget_proposal],
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
