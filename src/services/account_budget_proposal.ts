// @ts-ignore
import { AccountBudgetProposal } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The account_budget_proposal entity:

const account_budget_proposal = {
    proposed_purchase_order_number: 'string', // A purchase order number is a value that enables the user to help them reference this budget in their monthly invoices.
    proposed_spending_limit_micros: 'string', // The proposed spending limit in micros.  One million is equivalent to one unit.
    proposed_notes: 'string', // Notes associated with this budget.
    proposal_type: 'UNSPECIFIED | UNKNOWN | CREATE | UPDATE | END | REMOVE', // The type of this proposal, e.g. END to end the budget associated with this proposal.
    proposed_start_date_time: 'string', // The proposed start date time in yyyy-mm-dd hh:mm:ss format.
    id: 'string', // The ID of the proposal.
    approved_end_date_time: 'string', // The approved end date time in yyyy-mm-dd hh:mm:ss format.
    approved_start_date_time: 'string', // The approved start date time in yyyy-mm-dd hh:mm:ss format.
    approved_end_time_type: 'UNSPECIFIED | UNKNOWN | NOW | FOREVER', // The approved end date time as a well-defined type, e.g. FOREVER.
    resource_name: 'string', // The resource name of the proposal. AccountBudgetProposal resource names have the form:   `customers/{customer_id}/accountBudgetProposals/{account_budget_proposal_id}`
    approved_spending_limit_type: 'UNSPECIFIED | UNKNOWN | INFINITE', // The approved spending limit as a well-defined type, e.g. INFINITE.
    proposed_end_time_type: 'UNSPECIFIED | UNKNOWN | NOW | FOREVER', // The proposed end date time as a well-defined type, e.g. FOREVER.
    proposed_spending_limit_type: 'UNSPECIFIED | UNKNOWN | INFINITE', // The proposed spending limit as a well-defined type, e.g. INFINITE.
    approval_date_time: 'string', // The date time when this account-level budget was approved, if applicable.
    billing_setup: 'string', // The resource name of the billing setup associated with this proposal.
    account_budget: 'string', // The resource name of the account-level budget associated with this proposal.
    proposed_start_time_type: 'UNSPECIFIED | UNKNOWN | NOW | FOREVER', // The proposed start date time as a well-defined type, e.g. NOW.
    creation_date_time: 'string', // The date time when this account-level budget proposal was created, which is not the same as its approval date time, if applicable.
    approved_spending_limit_micros: 'string', // The approved spending limit in micros.  One million is equivalent to one unit.
    proposed_name: 'string', // The name to assign to the account-level budget.
    proposed_end_date_time: 'string', // The proposed end date time in yyyy-mm-dd hh:mm:ss format.
    status: 'UNSPECIFIED | UNKNOWN | PENDING | APPROVED_HELD | APPROVED | CANCELLED | REJECTED', // The status of this proposal. When a new proposal is created, the status defaults to PENDING.
}

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
