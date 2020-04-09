module.exports = {
    name: 'CustomerClient',
    object: {
        client_customer: {
            _description:
                'Output only. The resource name of the client-customer which is linked to the given customer. Read only.',
            _type: 'string',
        },
        currency_code: {
            _description: "Output only. Currency code (e.g. 'USD', 'EUR') for the client. Read only.",
            _type: 'string',
        },
        descriptive_name: { _description: 'Output only. Descriptive name for the client. Read only.', _type: 'string' },
        hidden: {
            _description:
                'Output only. Specifies whether this is a <a href="https://support.google.com/google-ads/answer/7519830">hidden account</a>. Read only.',
            _type: 'boolean',
        },
        id: { _description: 'Output only. The ID of the client customer. Read only.', _type: 'int64' },
        level: {
            _description:
                'Output only. Distance between given customer and client. For self link, the level value will be 0. Read only.',
            _type: 'int64',
        },
        manager: { _description: 'Output only. Identifies if the client is a manager. Read only.', _type: 'boolean' },
        resource_name: {
            _description:
                'Output only. The resource name of the customer client. CustomerClient resource names have the form: <code>customers/{customer_id}/customerClients/{client_customer_id}</code>',
            _type: 'string',
        },
        test_account: {
            _description: 'Output only. Identifies if the client is a test account. Read only.',
            _type: 'boolean',
        },
        time_zone: {
            _description:
                'Output only. Common Locale Data Repository (CLDR) string representation of the time zone of the client, e.g. America/Los_Angeles. Read only.',
            _type: 'string',
        },
    },
    methods: ['get', 'list'],
}
