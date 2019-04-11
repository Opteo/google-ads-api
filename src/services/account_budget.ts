// @ts-ignore
import { AccountBudget } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The account_budget entity:

const account_budget = {
    proposed_end_time_type: 'UNSPECIFIED | UNKNOWN | NOW | FOREVER', // The proposed end time as a well-defined type, e.g. FOREVER.
    proposed_spending_limit_type: 'UNSPECIFIED | UNKNOWN | INFINITE', // The proposed spending limit as a well-defined type, e.g. INFINITE.
    billing_setup: 'string', // The resource name of the billing setup associated with this account-level budget.  BillingSetup resource names have the form:  `customers/{customer_id}/billingSetups/{billing_setup_id}`
    adjusted_spending_limit_type: 'UNSPECIFIED | UNKNOWN | INFINITE', // The adjusted spending limit as a well-defined type, e.g. INFINITE. This will only be populated if the adjusted spending limit is INFINITE, which is guaranteed to be true if the approved spending limit is INFINITE.
    total_adjustments_micros: 'string', // The total adjustments amount.  An example of an adjustment is courtesy credits.
    pending_proposal: {
        end_time_type: 'UNSPECIFIED | UNKNOWN | NOW | FOREVER', // The end time as a well-defined type, e.g. FOREVER.
        proposal_type: 'UNSPECIFIED | UNKNOWN | CREATE | UPDATE | END | REMOVE', // The type of this proposal, e.g. END to end the budget associated with this proposal.
        spending_limit_type: 'UNSPECIFIED | UNKNOWN | INFINITE', // The spending limit as a well-defined type, e.g. INFINITE.
        account_budget_proposal: 'string', // The resource name of the proposal. AccountBudgetProposal resource names have the form:   `customers/{customer_id}/accountBudgetProposals/{account_budget_proposal_id}`
        start_date_time: 'string', // The start time in yyyy-MM-dd HH:mm:ss format.
        purchase_order_number: 'string', // A purchase order number is a value that helps users reference this budget in their monthly invoices.
        creation_date_time: 'string', // The time when this account-level budget proposal was created. Formatted as yyyy-MM-dd HH:mm:ss.
        end_date_time: 'string', // The end time in yyyy-MM-dd HH:mm:ss format.
        spending_limit_micros: 'string', // The spending limit in micros.  One million is equivalent to one unit.
        notes: 'string', // Notes associated with this budget.
        name: 'string', // The name to assign to the account-level budget.
    },
    approved_spending_limit_micros: 'string', // The approved spending limit in micros.  One million is equivalent to one unit.  This will only be populated if the proposed spending limit is finite, and will always be greater than or equal to the proposed spending limit.
    proposed_end_date_time: 'string', // The proposed end time in yyyy-MM-dd HH:mm:ss format.
    notes: 'string', // Notes associated with the budget.
    status: 'UNSPECIFIED | UNKNOWN | PENDING | APPROVED | CANCELLED', // The status of this account-level budget.
    proposed_spending_limit_micros: 'string', // The proposed spending limit in micros.  One million is equivalent to one unit.
    name: 'string', // The name of the account-level budget.
    proposed_start_date_time: 'string', // The proposed start time of the account-level budget in yyyy-MM-dd HH:mm:ss format.  If a start time type of NOW was proposed, this is the time of request.
    id: 'string', // The ID of the account-level budget.
    approved_end_date_time: 'string', // The approved end time in yyyy-MM-dd HH:mm:ss format.
    approved_end_time_type: 'UNSPECIFIED | UNKNOWN | NOW | FOREVER', // The approved end time as a well-defined type, e.g. FOREVER.
    approved_start_date_time: 'string', // The approved start time of the account-level budget in yyyy-MM-dd HH:mm:ss format.  For example, if a new budget is approved after the proposed start time, the approved start time is the time of approval.
    amount_served_micros: 'string', // The value of Ads that have been served, in micros.  This includes overdelivery costs, in which case a credit might be automatically applied to the budget (see total_adjustments_micros).
    purchase_order_number: 'string', // A purchase order number is a value that helps users reference this budget in their monthly invoices.
    resource_name: 'string', // The resource name of the account-level budget. AccountBudget resource names have the form:  `customers/{customer_id}/accountBudgets/{account_budget_id}`
    approved_spending_limit_type: 'UNSPECIFIED | UNKNOWN | INFINITE', // The approved spending limit as a well-defined type, e.g. INFINITE.  This will only be populated if the approved spending limit is INFINITE.
    adjusted_spending_limit_micros: 'string', // The adjusted spending limit in micros.  One million is equivalent to one unit.  If the approved spending limit is finite, the adjusted spending limit may vary depending on the types of adjustments applied to this budget, if applicable.  The different kinds of adjustments are described here: https://support.google.com/google-ads/answer/1704323  For example, a debit adjustment reduces how much the account is allowed to spend.
}

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
