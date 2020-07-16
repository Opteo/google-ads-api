module.exports = {
    name: 'AccountBudget',
    object: {
        adjusted_spending_limit_micros: {
            _description:
                'Output only. The adjusted spending limit in micros. One million is equivalent to one unit. If the approved spending limit is finite, the adjusted spending limit may vary depending on the types of adjustments applied to this budget, if applicable. The different kinds of adjustments are described here: https://support.google.com/google-ads/answer/1704323 For example, a debit adjustment reduces how much the account is allowed to spend.',
            _oneof: 'adjustedSpendingLimit',
            _type: 'int64',
        },
        adjusted_spending_limit_type: {
            _description:
                'Output only. The adjusted spending limit as a well-defined type, e.g. INFINITE. This will only be populated if the adjusted spending limit is INFINITE, which is guaranteed to be true if the approved spending limit is INFINITE.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'INFINITE', description: 'Infinite, indicates unlimited spending power.', index: 2 },
            ],
            _oneof: 'adjustedSpendingLimit',
            _type: 'enum',
        },
        amount_served_micros: {
            _description:
                'Output only. The value of Ads that have been served, in micros. This includes overdelivery costs, in which case a credit might be automatically applied to the budget (see total_adjustments_micros).',
            _type: 'int64',
        },
        approved_end_date_time: {
            _description: 'Output only. The approved end time in yyyy-MM-dd HH:mm:ss format.',
            _oneof: 'approvedEndTime',
            _type: 'string',
        },
        approved_end_time_type: {
            _description: 'Output only. The approved end time as a well-defined type, e.g. FOREVER.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'NOW', description: 'As soon as possible.', index: 2 },
                { s: 'FOREVER', description: 'An infinite point in the future.', index: 3 },
            ],
            _oneof: 'approvedEndTime',
            _type: 'enum',
        },
        approved_spending_limit_micros: {
            _description:
                'Output only. The approved spending limit in micros. One million is equivalent to one unit. This will only be populated if the proposed spending limit is finite, and will always be greater than or equal to the proposed spending limit.',
            _oneof: 'approvedSpendingLimit',
            _type: 'int64',
        },
        approved_spending_limit_type: {
            _description:
                'Output only. The approved spending limit as a well-defined type, e.g. INFINITE. This will only be populated if the approved spending limit is INFINITE.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'INFINITE', description: 'Infinite, indicates unlimited spending power.', index: 2 },
            ],
            _oneof: 'approvedSpendingLimit',
            _type: 'enum',
        },
        approved_start_date_time: {
            _description:
                'Output only. The approved start time of the account-level budget in yyyy-MM-dd HH:mm:ss format. For example, if a new budget is approved after the proposed start time, the approved start time is the time of approval.',
            _type: 'string',
        },
        billing_setup: {
            _description:
                'Output only. The resource name of the billing setup associated with this account-level budget. BillingSetup resource names have the form: <code>customers/{customer_id}/billingSetups/{billing_setup_id}</code>',
            _type: 'string',
        },
        id: { _description: 'Output only. The ID of the account-level budget.', _type: 'int64' },
        name: { _description: 'Output only. The name of the account-level budget.', _type: 'string' },
        notes: { _description: 'Output only. Notes associated with the budget.', _type: 'string' },
        pending_proposal: {
            _parent_description: 'Output only. The pending proposal to modify this budget, if applicable.',
            account_budget_proposal: {
                _description:
                    'Output only. The resource name of the proposal. AccountBudgetProposal resource names have the form: <code>customers/{customer_id}/accountBudgetProposals/{account_budget_proposal_id}</code>',
                _type: 'string',
            },
            creation_date_time: {
                _description:
                    'Output only. The time when this account-level budget proposal was created. Formatted as yyyy-MM-dd HH:mm:ss.',
                _type: 'string',
            },
            end_date_time: {
                _description: 'Output only. The end time in yyyy-MM-dd HH:mm:ss format.',
                _type: 'string',
            },
            end_time_type: {
                _description: 'Output only. The end time as a well-defined type, e.g. FOREVER.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'NOW', description: 'As soon as possible.', index: 2 },
                    { s: 'FOREVER', description: 'An infinite point in the future.', index: 3 },
                ],
                _type: 'enum',
            },
            name: { _description: 'Output only. The name to assign to the account-level budget.', _type: 'string' },
            notes: { _description: 'Output only. Notes associated with this budget.', _type: 'string' },
            proposal_type: {
                _description:
                    'Output only. The type of this proposal, e.g. END to end the budget associated with this proposal.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'CREATE', description: 'Identifies a request to create a new budget.', index: 2 },
                    { s: 'UPDATE', description: 'Identifies a request to edit an existing budget.', index: 3 },
                    {
                        s: 'END',
                        description: 'Identifies a request to end a budget that has already started.',
                        index: 4,
                    },
                    {
                        s: 'REMOVE',
                        description: "Identifies a request to remove a budget that hasn't started yet.",
                        index: 5,
                    },
                ],
                _type: 'enum',
            },
            purchase_order_number: {
                _description:
                    'Output only. A purchase order number is a value that helps users reference this budget in their monthly invoices.',
                _type: 'string',
            },
            spending_limit_micros: {
                _description: 'Output only. The spending limit in micros. One million is equivalent to one unit.',
                _type: 'int64',
            },
            spending_limit_type: {
                _description: 'Output only. The spending limit as a well-defined type, e.g. INFINITE.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'INFINITE', description: 'Infinite, indicates unlimited spending power.', index: 2 },
                ],
                _type: 'enum',
            },
            start_date_time: {
                _description: 'Output only. The start time in yyyy-MM-dd HH:mm:ss format.',
                _type: 'string',
            },
        },
        proposed_end_date_time: {
            _description: 'Output only. The proposed end time in yyyy-MM-dd HH:mm:ss format.',
            _oneof: 'proposedEndTime',
            _type: 'string',
        },
        proposed_end_time_type: {
            _description: 'Output only. The proposed end time as a well-defined type, e.g. FOREVER.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'NOW', description: 'As soon as possible.', index: 2 },
                { s: 'FOREVER', description: 'An infinite point in the future.', index: 3 },
            ],
            _oneof: 'proposedEndTime',
            _type: 'enum',
        },
        proposed_spending_limit_micros: {
            _description: 'Output only. The proposed spending limit in micros. One million is equivalent to one unit.',
            _oneof: 'proposedSpendingLimit',
            _type: 'int64',
        },
        proposed_spending_limit_type: {
            _description: 'Output only. The proposed spending limit as a well-defined type, e.g. INFINITE.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'INFINITE', description: 'Infinite, indicates unlimited spending power.', index: 2 },
            ],
            _oneof: 'proposedSpendingLimit',
            _type: 'enum',
        },
        proposed_start_date_time: {
            _description:
                'Output only. The proposed start time of the account-level budget in yyyy-MM-dd HH:mm:ss format. If a start time type of NOW was proposed, this is the time of request.',
            _type: 'string',
        },
        purchase_order_number: {
            _description:
                'Output only. A purchase order number is a value that helps users reference this budget in their monthly invoices.',
            _type: 'string',
        },
        resource_name: {
            _description:
                'Output only. The resource name of the account-level budget. AccountBudget resource names have the form: <code>customers/{customer_id}/accountBudgets/{account_budget_id}</code>',
            _type: 'string',
        },
        status: {
            _description: 'Output only. The status of this account-level budget.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'PENDING', description: 'The account budget is pending approval.', index: 2 },
                { s: 'APPROVED', description: 'The account budget has been approved.', index: 3 },
                { s: 'CANCELLED', description: 'The account budget has been cancelled by the user.', index: 4 },
            ],
            _type: 'enum',
        },
        total_adjustments_micros: {
            _description: 'Output only. The total adjustments amount. An example of an adjustment is courtesy credits.',
            _type: 'int64',
        },
    },
    methods: ['get', 'list'],
}
