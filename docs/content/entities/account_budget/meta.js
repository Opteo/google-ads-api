module.exports = {
    name: 'AccountBudget',
    object: {
        proposed_end_time_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'NOW', description: 'As soon as possible.' },
                { s: 'FOREVER', description: 'An infinite point in the future.' },
            ],
            _description: 'The proposed end time as a well-defined type, e.g. FOREVER.',
            _oneof: 'proposedEndTime',
        },
        proposed_spending_limit_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'INFINITE', description: 'Infinite, indicates unlimited spending power.' },
            ],
            _description: 'The proposed spending limit as a well-defined type, e.g. INFINITE.',
            _oneof: 'proposedSpendingLimit',
        },
        billing_setup: {
            _type: 'string',
            _description:
                'The resource name of the billing setup associated with this account-level budget. BillingSetup resource names have the form: <code>customers/{customer_id}/billingSetups/{billing_setup_id}</code>',
        },
        adjusted_spending_limit_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'INFINITE', description: 'Infinite, indicates unlimited spending power.' },
            ],
            _description:
                'The adjusted spending limit as a well-defined type, e.g. INFINITE. This will only be populated if the adjusted spending limit is INFINITE, which is guaranteed to be true if the approved spending limit is INFINITE.',
            _oneof: 'adjustedSpendingLimit',
        },
        total_adjustments_micros: {
            _type: 'int64',
            _description: 'The total adjustments amount. An example of an adjustment is courtesy credits.',
        },
        pending_proposal: {
            end_time_type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'NOW', description: 'As soon as possible.' },
                    { s: 'FOREVER', description: 'An infinite point in the future.' },
                ],
                _description: 'The end time as a well-defined type, e.g. FOREVER.',
            },
            proposal_type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'CREATE', description: 'Identifies a request to create a new budget.' },
                    { s: 'UPDATE', description: 'Identifies a request to edit an existing budget.' },
                    { s: 'END', description: 'Identifies a request to end a budget that has already started.' },
                    { s: 'REMOVE', description: "Identifies a request to remove a budget that hasn't started yet." },
                ],
                _description: 'The type of this proposal, e.g. END to end the budget associated with this proposal.',
            },
            spending_limit_type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'INFINITE', description: 'Infinite, indicates unlimited spending power.' },
                ],
                _description: 'The spending limit as a well-defined type, e.g. INFINITE.',
            },
            account_budget_proposal: {
                _type: 'string',
                _description:
                    'The resource name of the proposal. AccountBudgetProposal resource names have the form: <code>customers/{customer_id}/accountBudgetProposals/{account_budget_proposal_id}</code>',
            },
            start_date_time: { _type: 'string', _description: 'The start time in yyyy-MM-dd HH:mm:ss format.' },
            purchase_order_number: {
                _type: 'string',
                _description:
                    'A purchase order number is a value that helps users reference this budget in their monthly invoices.',
            },
            creation_date_time: {
                _type: 'string',
                _description:
                    'The time when this account-level budget proposal was created. Formatted as yyyy-MM-dd HH:mm:ss.',
            },
            end_date_time: { _type: 'string', _description: 'The end time in yyyy-MM-dd HH:mm:ss format.' },
            spending_limit_micros: {
                _type: 'int64',
                _description: 'The spending limit in micros. One million is equivalent to one unit.',
            },
            notes: { _type: 'string', _description: 'Notes associated with this budget.' },
            name: { _type: 'string', _description: 'The name to assign to the account-level budget.' },
        },
        approved_spending_limit_micros: {
            _type: 'int64',
            _description:
                'The approved spending limit in micros. One million is equivalent to one unit. This will only be populated if the proposed spending limit is finite, and will always be greater than or equal to the proposed spending limit.',
            _oneof: 'approvedSpendingLimit',
        },
        proposed_end_date_time: {
            _type: 'string',
            _description: 'The proposed end time in yyyy-MM-dd HH:mm:ss format.',
            _oneof: 'proposedEndTime',
        },
        notes: { _type: 'string', _description: 'Notes associated with the budget.' },
        status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'PENDING', description: 'The account budget is pending approval.' },
                { s: 'APPROVED', description: 'The account budget has been approved.' },
                { s: 'CANCELLED', description: 'The account budget has been cancelled by the user.' },
            ],
            _description: 'The status of this account-level budget.',
        },
        proposed_spending_limit_micros: {
            _type: 'int64',
            _description: 'The proposed spending limit in micros. One million is equivalent to one unit.',
            _oneof: 'proposedSpendingLimit',
        },
        name: { _type: 'string', _description: 'The name of the account-level budget.' },
        proposed_start_date_time: {
            _type: 'string',
            _description:
                'The proposed start time of the account-level budget in yyyy-MM-dd HH:mm:ss format. If a start time type of NOW was proposed, this is the time of request.',
        },
        id: { _type: 'int64', _description: 'The ID of the account-level budget.' },
        approved_end_date_time: {
            _type: 'string',
            _description: 'The approved end time in yyyy-MM-dd HH:mm:ss format.',
            _oneof: 'approvedEndTime',
        },
        approved_end_time_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'NOW', description: 'As soon as possible.' },
                { s: 'FOREVER', description: 'An infinite point in the future.' },
            ],
            _description: 'The approved end time as a well-defined type, e.g. FOREVER.',
            _oneof: 'approvedEndTime',
        },
        approved_start_date_time: {
            _type: 'string',
            _description:
                'The approved start time of the account-level budget in yyyy-MM-dd HH:mm:ss format. For example, if a new budget is approved after the proposed start time, the approved start time is the time of approval.',
        },
        amount_served_micros: {
            _type: 'int64',
            _description:
                'The value of Ads that have been served, in micros. This includes overdelivery costs, in which case a credit might be automatically applied to the budget (see total_adjustments_micros).',
        },
        purchase_order_number: {
            _type: 'string',
            _description:
                'A purchase order number is a value that helps users reference this budget in their monthly invoices.',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the account-level budget. AccountBudget resource names have the form: <code>customers/{customer_id}/accountBudgets/{account_budget_id}</code>',
        },
        approved_spending_limit_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'INFINITE', description: 'Infinite, indicates unlimited spending power.' },
            ],
            _description:
                'The approved spending limit as a well-defined type, e.g. INFINITE. This will only be populated if the approved spending limit is INFINITE.',
            _oneof: 'approvedSpendingLimit',
        },
        adjusted_spending_limit_micros: {
            _type: 'int64',
            _description:
                'The adjusted spending limit in micros. One million is equivalent to one unit. If the approved spending limit is finite, the adjusted spending limit may vary depending on the types of adjustments applied to this budget, if applicable. The different kinds of adjustments are described here: https://support.google.com/google-ads/answer/1704323 For example, a debit adjustment reduces how much the account is allowed to spend.',
            _oneof: 'adjustedSpendingLimit',
        },
    },
    methods: ['get', 'list'],
}
