module.exports = {
    name: 'CustomerClient',
    object: {
        client_customer: {
            _description: 'The resource name of the client-customer which is linked to the given customer. Read only.',
            _type: 'string',
        },
        hidden: {
            _description:
                'Specifies whether this is a <a href="https://support.google.com/google-ads/answer/7519830">hidden account</a>. Read only.',
            _type: 'boolean',
        },
        level: {
            _description:
                'Distance between given customer and client. For self link, the level value will be 0. Read only.',
            _type: 'int64',
        },
        resource_name: {
            _description:
                'The resource name of the customer client. CustomerClient resource names have the form: <code>customers/{customer_id}/customerClients/{client_customer_id}</code>',
            _type: 'string',
        },
    },
    methods: ['get', 'list'],
}
