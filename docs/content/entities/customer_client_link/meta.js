module.exports = {
    name: 'CustomerClientLink',
    object: {
        client_customer: { _description: 'The client customer linked to this customer.', _type: 'string' },
        hidden: {
            _description:
                'The visibility of the link. Users can choose whether or not to see hidden links in the AdWords UI. Default value is false',
            _type: 'boolean',
        },
        manager_link_id: {
            _description: 'This is uniquely identifies a customer client link. Read only.',
            _type: 'int64',
        },
        resource_name: {
            _description:
                'Name of the resource. CustomerClientLink resource names have the form: <code>customers/{customer_id}/customerClientLinks/{client_customer_id}~{manager_link_id}</code>',
            _type: 'string',
        },
        status: {
            _description: 'This is the status of the link between client and manager.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ACTIVE', description: 'Indicates current in-effect relationship' },
                { s: 'INACTIVE', description: 'Indicates terminated relationship' },
                {
                    s: 'PENDING',
                    description:
                        "Indicates relationship has been requested by manager, but the client\nhasn't accepted yet.",
                },
                { s: 'REFUSED', description: 'Relationship was requested by the manager, but the client has refused.' },
                {
                    s: 'CANCELED',
                    description: 'Indicates relationship has been requested by manager, but manager\ncanceled it.',
                },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
