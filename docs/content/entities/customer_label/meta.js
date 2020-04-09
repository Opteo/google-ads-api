module.exports = {
    name: 'CustomerLabel',
    object: {
        customer: {
            _description: 'Output only. The resource name of the customer to which the label is attached. Read only.',
            _type: 'string',
        },
        label: {
            _description:
                'Output only. The resource name of the label assigned to the customer. Note: the Customer ID portion of the label resource name is not validated when creating a new CustomerLabel.',
            _type: 'string',
        },
        resource_name: {
            _description:
                'Immutable. Name of the resource. Customer label resource names have the form: <code>customers/{customer_id}/customerLabels/{label_id}</code>',
            _type: 'string',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
