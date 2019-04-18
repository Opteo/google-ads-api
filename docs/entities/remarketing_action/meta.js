module.exports = {
    name: 'RemarketingAction',
    object: {
        id: { _type: 'int64', _description: 'Id of the remarketing action.' },
        tag_snippets: { _type: 'array', _description: 'The snippets used for tracking remarketing actions.' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the remarketing action.\nRemarketing action resource names have the form:\n\n`customers/{customer_id}/remarketingActions/{remarketing_action_id}`',
        },
        name: {
            _type: 'string',
            _description:
                'The name of the remarketing action.\n\nThis field is required and should not be empty when creating new\nremarketing actions.',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
