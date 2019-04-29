module.exports = {
    name: 'CustomerClient',
    object: {
        level: {
            _type: 'int64',
            _description:
                'Distance between given customer and client. For self link, the level value will be 0. Read only.',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the customer client. CustomerClient resource names have the form: <code>customers/{customer_id}/customerClients/{client_customer_id}</code>',
        },
        client_customer: {
            _type: 'string',
            _description: 'The resource name of the client-customer which is linked to the given customer. Read only.',
        },
        hidden: {
            _type: 'boolean',
            _description:
                'Specifies whether this is a hidden account. Learn more about hidden accounts <a href="https://support.google.com/google-ads/answer/7519830">here</a>. Read only.',
        },
    },
    methods: ['get', 'list'],
}
