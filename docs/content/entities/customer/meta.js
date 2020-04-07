module.exports = {
    name: 'Customer',
    object: {
        tracking_url_template: {
            _type: 'string',
            _description: 'The URL template for constructing a tracking URL out of parameters.',
        },
        auto_tagging_enabled: { _type: 'boolean', _description: 'Whether auto-tagging is enabled for the customer.' },
        currency_code: {
            _type: 'string',
            _description:
                'The currency in which the account operates. A subset of the currency codes from the ISO 4217 standard is supported.',
        },
        remarketing_setting: {
            google_global_site_tag: { _type: 'string', _description: 'The Google global site tag.' },
        },
        conversion_tracking_setting: {
            cross_account_conversion_tracking_id: {
                _type: 'int64',
                _description:
                    "The conversion tracking id of the customer's manager. This is set when the customer is opted into cross account conversion tracking, and it overrides conversion_tracking_id. This field can only be managed through the Google Ads UI. This field is read-only.",
            },
            conversion_tracking_id: {
                _type: 'int64',
                _description:
                    "The conversion tracking id used for this account. This id is automatically assigned after any conversion tracking feature is used. If the customer doesn't use conversion tracking, this is 0. This field is read-only.",
            },
        },
        time_zone: { _type: 'string', _description: 'The local timezone ID of the customer.' },
        call_reporting_setting: {
            call_reporting_enabled: {
                _type: 'boolean',
                _description: 'Enable reporting of phone call events by redirecting them via Google System.',
            },
            call_conversion_action: {
                _type: 'string',
                _description:
                    'Customer-level call conversion action to attribute a call conversion to. If not set a default conversion action is used. Only in effect when call_conversion_reporting_enabled is set to true.',
            },
            call_conversion_reporting_enabled: {
                _type: 'boolean',
                _description: 'Whether to enable call conversion reporting.',
            },
        },
        test_account: { _type: 'boolean', _description: 'Whether the customer is a test account.' },
        manager: { _type: 'boolean', _description: 'Whether the customer is a manager.' },
        descriptive_name: { _type: 'string', _description: 'Optional, non-unique descriptive name of the customer.' },
        id: { _type: 'int64', _description: 'The ID of the customer.' },
        has_partners_badge: {
            _type: 'boolean',
            _description:
                'Whether the Customer has a Partners program badge. If the Customer is not associated with the Partners program, this will be false. For more information, see https://support.google.com/partners/answer/3125774.',
        },
        final_url_suffix: { _type: 'string', _description: 'The URL template for appending params to the final URL' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the customer. Customer resource names have the form: <code>customers/{customer_id}</code>',
        },
    },
    methods: ['get', 'list'],
}
