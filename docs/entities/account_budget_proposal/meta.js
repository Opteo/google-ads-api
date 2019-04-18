module.exports = {
    name: 'AccountBudgetProposal',
    object: {
        proposed_purchase_order_number: {
            _type: 'string',
            _description:
                'A purchase order number is a value that enables the user to help them\nreference this budget in their monthly invoices.',
        },
        proposed_spending_limit_micros: {
            _type: 'int64',
            _description: 'The proposed spending limit in micros.  One million is equivalent to\none unit.',
            _oneof: 'proposedSpendingLimit',
        },
        proposed_notes: { _type: 'string', _description: 'Notes associated with this budget.' },
        proposal_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'CREATE', description: 'Identifies a request to create a new budget.' },
                { s: 'UPDATE', description: 'Identifies a request to edit an existing budget.' },
                { s: 'END', description: 'Identifies a request to end a budget that has already started.' },
                { s: 'REMOVE', description: "Identifies a request to remove a budget that hasn't started yet." },
            ],
            _description: 'The type of this proposal, e.g. END to end the budget associated with this\nproposal.',
        },
        proposed_start_date_time: {
            _type: 'string',
            _description: 'The proposed start date time in yyyy-mm-dd hh:mm:ss format.',
            _oneof: 'proposedStartTime',
        },
        id: { _type: 'int64', _description: 'The ID of the proposal.' },
        approved_end_date_time: {
            _type: 'string',
            _description: 'The approved end date time in yyyy-mm-dd hh:mm:ss format.',
            _oneof: 'approvedEndTime',
        },
        approved_start_date_time: {
            _type: 'string',
            _description: 'The approved start date time in yyyy-mm-dd hh:mm:ss format.',
        },
        approved_end_time_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'NOW', description: 'As soon as possible.' },
                { s: 'FOREVER', description: 'An infinite point in the future.' },
            ],
            _description: 'The approved end date time as a well-defined type, e.g. FOREVER.',
            _oneof: 'approvedEndTime',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the proposal.\nAccountBudgetProposal resource names have the form:\n\n\n`customers/{customer_id}/accountBudgetProposals/{account_budget_proposal_id}`',
        },
        approved_spending_limit_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'INFINITE', description: 'Infinite, indicates unlimited spending power.' },
            ],
            _description: 'The approved spending limit as a well-defined type, e.g. INFINITE.',
            _oneof: 'approvedSpendingLimit',
        },
        proposed_end_time_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'NOW', description: 'As soon as possible.' },
                { s: 'FOREVER', description: 'An infinite point in the future.' },
            ],
            _description: 'The proposed end date time as a well-defined type, e.g. FOREVER.',
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
        approval_date_time: {
            _type: 'string',
            _description: 'The date time when this account-level budget was approved, if applicable.',
        },
        billing_setup: {
            _type: 'string',
            _description: 'The resource name of the billing setup associated with this proposal.',
        },
        account_budget: {
            _type: 'string',
            _description: 'The resource name of the account-level budget associated with this\nproposal.',
        },
        proposed_start_time_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'NOW', description: 'As soon as possible.' },
                { s: 'FOREVER', description: 'An infinite point in the future.' },
            ],
            _description: 'The proposed start date time as a well-defined type, e.g. NOW.',
            _oneof: 'proposedStartTime',
        },
        creation_date_time: {
            _type: 'string',
            _description:
                'The date time when this account-level budget proposal was created, which is\nnot the same as its approval date time, if applicable.',
        },
        approved_spending_limit_micros: {
            _type: 'int64',
            _description: 'The approved spending limit in micros.  One million is equivalent to\none unit.',
            _oneof: 'approvedSpendingLimit',
        },
        proposed_name: { _type: 'string', _description: 'The name to assign to the account-level budget.' },
        proposed_end_date_time: {
            _type: 'string',
            _description: 'The proposed end date time in yyyy-mm-dd hh:mm:ss format.',
            _oneof: 'proposedEndTime',
        },
        status: {
            _type: 'enum',
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
            _description:
                'The status of this proposal.\nWhen a new proposal is created, the status defaults to PENDING.',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
