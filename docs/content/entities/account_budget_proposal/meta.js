module.exports = {
    name: 'AccountBudgetProposal',
    object: {
        account_budget: {
            _description: 'The resource name of the account-level budget associated with this proposal.',
            _type: 'string',
        },
        approval_date_time: {
            _description: 'The date time when this account-level budget was approved, if applicable.',
            _type: 'string',
        },
        approved_end_date_time: {
            _description: 'The approved end date time in yyyy-mm-dd hh:mm:ss format.',
            _oneof: 'approvedEndTime',
            _type: 'string',
        },
        approved_end_time_type: {
            _description: 'The approved end date time as a well-defined type, e.g. FOREVER.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'NOW', description: 'As soon as possible.' },
                { s: 'FOREVER', description: 'An infinite point in the future.' },
            ],
            _oneof: 'approvedEndTime',
            _type: 'enum',
        },
        approved_spending_limit_micros: {
            _description: 'The approved spending limit in micros. One million is equivalent to one unit.',
            _oneof: 'approvedSpendingLimit',
            _type: 'int64',
        },
        approved_spending_limit_type: {
            _description: 'The approved spending limit as a well-defined type, e.g. INFINITE.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'INFINITE', description: 'Infinite, indicates unlimited spending power.' },
            ],
            _oneof: 'approvedSpendingLimit',
            _type: 'enum',
        },
        approved_start_date_time: {
            _description: 'The approved start date time in yyyy-mm-dd hh:mm:ss format.',
            _type: 'string',
        },
        billing_setup: {
            _description: 'The resource name of the billing setup associated with this proposal.',
            _type: 'string',
        },
        creation_date_time: {
            _description:
                'The date time when this account-level budget proposal was created, which is not the same as its approval date time, if applicable.',
            _type: 'string',
        },
        id: { _description: 'The ID of the proposal.', _type: 'int64' },
        proposal_type: {
            _description: 'The type of this proposal, e.g. END to end the budget associated with this proposal.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'CREATE', description: 'Identifies a request to create a new budget.' },
                { s: 'UPDATE', description: 'Identifies a request to edit an existing budget.' },
                { s: 'END', description: 'Identifies a request to end a budget that has already started.' },
                { s: 'REMOVE', description: "Identifies a request to remove a budget that hasn't started yet." },
            ],
            _type: 'enum',
        },
        proposed_end_date_time: {
            _description: 'The proposed end date time in yyyy-mm-dd hh:mm:ss format.',
            _oneof: 'proposedEndTime',
            _type: 'string',
        },
        proposed_end_time_type: {
            _description: 'The proposed end date time as a well-defined type, e.g. FOREVER.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'NOW', description: 'As soon as possible.' },
                { s: 'FOREVER', description: 'An infinite point in the future.' },
            ],
            _oneof: 'proposedEndTime',
            _type: 'enum',
        },
        proposed_name: { _description: 'The name to assign to the account-level budget.', _type: 'string' },
        proposed_notes: { _description: 'Notes associated with this budget.', _type: 'string' },
        proposed_purchase_order_number: {
            _description:
                'A purchase order number is a value that enables the user to help them reference this budget in their monthly invoices.',
            _type: 'string',
        },
        proposed_spending_limit_micros: {
            _description: 'The proposed spending limit in micros. One million is equivalent to one unit.',
            _oneof: 'proposedSpendingLimit',
            _type: 'int64',
        },
        proposed_spending_limit_type: {
            _description: 'The proposed spending limit as a well-defined type, e.g. INFINITE.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'INFINITE', description: 'Infinite, indicates unlimited spending power.' },
            ],
            _oneof: 'proposedSpendingLimit',
            _type: 'enum',
        },
        proposed_start_date_time: {
            _description: 'The proposed start date time in yyyy-mm-dd hh:mm:ss format.',
            _oneof: 'proposedStartTime',
            _type: 'string',
        },
        proposed_start_time_type: {
            _description: 'The proposed start date time as a well-defined type, e.g. NOW.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'NOW', description: 'As soon as possible.' },
                { s: 'FOREVER', description: 'An infinite point in the future.' },
            ],
            _oneof: 'proposedStartTime',
            _type: 'enum',
        },
        resource_name: {
            _description:
                'The resource name of the proposal. AccountBudgetProposal resource names have the form: <code>customers/{customer_id}/accountBudgetProposals/{account_budget_proposal_id}</code>',
            _type: 'string',
        },
        status: {
            _description:
                'The status of this proposal. When a new proposal is created, the status defaults to PENDING.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'PENDING', description: 'The proposal is pending approval.' },
                {
                    s: 'APPROVED_HELD',
                    description:
                        'The proposal has been approved but the corresponding billing setup\nhas not.  This can occur for proposals that set up the first budget\nwhen signing up for billing or when performing a change of bill-to\noperation.',
                },
                { s: 'APPROVED', description: 'The proposal has been approved.' },
                { s: 'CANCELLED', description: 'The proposal has been cancelled by the user.' },
                {
                    s: 'REJECTED',
                    description: 'The proposal has been rejected by the user, e.g. by rejecting an\nacceptance email.',
                },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
