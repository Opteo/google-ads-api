module.exports = {
    name: 'CustomerManagerLink',
    object: {
        manager_customer: { _type: 'string', _description: 'The manager customer linked to the customer.' },
        manager_link_id: { _type: 'int64', _description: 'ID of the customer-manager link. This field is read only.' },
        status: {
            _type: 'enum',
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
            _description: 'Status of the link between the customer and the manager.',
        },
        resource_name: {
            _type: 'string',
            _description:
                'Name of the resource. CustomerManagerLink resource names have the form: <code>customers/{customer_id}/customerManagerLinks/{manager_customer_id}~{manager_link_id}</code>',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
