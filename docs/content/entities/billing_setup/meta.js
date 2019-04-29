module.exports = {
    name: 'BillingSetup',
    object: {
        start_date_time: {
            _type: 'string',
            _description:
                'The start date time in yyyy-MM-dd or yyyy-MM-dd HH:mm:ss format. Only a future time is allowed.',
            _oneof: 'startTime',
        },
        end_date_time: {
            _type: 'string',
            _description: 'The end date time in yyyy-MM-dd or yyyy-MM-dd HH:mm:ss format.',
            _oneof: 'endTime',
        },
        payments_account: {
            _type: 'string',
            _description:
                'The resource name of the Payments account associated with this billing setup. Payments resource names have the form: <code>customers/{customer_id}/paymentsAccounts/{payments_account_id}</code> When setting up billing, this is used to signup with an existing Payments account (and then payments_account_info should not be set). When getting a billing setup, this and payments_account_info will be populated.',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the billing setup. BillingSetup resource names have the form: <code>customers/{customer_id}/billingSetups/{billing_setup_id}</code>',
        },
        payments_account_info: {
            payments_profile_id: {
                _type: 'string',
                _description:
                    'A 12 digit id used to identify the Payments profile associated with the billing setup. This must be passed in as a string with dashes, e.g. "1234-5678-9012".',
            },
            payments_account_id: {
                _type: 'string',
                _description:
                    'A 16 digit id used to identify the Payments account associated with the billing setup. This must be passed as a string with dashes, e.g. "1234-5678-9012-3456".',
            },
            payments_account_name: {
                _type: 'string',
                _description:
                    'The name of the Payments account associated with the billing setup. This enables the user to specify a meaningful name for a Payments account to aid in reconciling monthly invoices. This name will be printed in the monthly invoices.',
            },
            payments_profile_name: {
                _type: 'string',
                _description: 'The name of the Payments profile associated with the billing setup.',
            },
            secondary_payments_profile_id: {
                _type: 'string',
                _description:
                    'A secondary payments profile id present in uncommon situations, e.g. when a sequential liability agreement has been arranged.',
            },
        },
        status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'PENDING', description: 'The billing setup is pending approval.' },
                {
                    s: 'APPROVED_HELD',
                    description:
                        'The billing setup has been approved but the corresponding first budget\nhas not.  This can only occur for billing setups configured for monthly\ninvoicing.',
                },
                { s: 'APPROVED', description: 'The billing setup has been approved.' },
                { s: 'CANCELLED', description: 'The billing setup was cancelled by the user prior to approval.' },
            ],
            _description: 'The status of the billing setup.',
        },
        start_time_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'NOW', description: 'As soon as possible.' },
                { s: 'FOREVER', description: 'An infinite point in the future.' },
            ],
            _description: 'The start time as a type. Only NOW is allowed.',
            _oneof: 'startTime',
        },
        end_time_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'NOW', description: 'As soon as possible.' },
                { s: 'FOREVER', description: 'An infinite point in the future.' },
            ],
            _description: 'The end time as a type. The only possible value is FOREVER.',
            _oneof: 'endTime',
        },
        id: { _type: 'int64', _description: 'The ID of the billing setup.' },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
