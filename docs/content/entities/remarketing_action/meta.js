module.exports = {
    name: 'RemarketingAction',
    object: {
        id: { _description: 'Id of the remarketing action.', _type: 'int64' },
        name: {
            _description:
                'The name of the remarketing action. This field is required and should not be empty when creating new remarketing actions.',
            _type: 'string',
        },
        resource_name: {
            _description:
                'The resource name of the remarketing action. Remarketing action resource names have the form: <code>customers/{customer_id}/remarketingActions/{remarketing_action_id}</code>',
            _type: 'string',
        },
        tag_snippets: { _description: 'The snippets used for tracking remarketing actions.', _type: 'array' },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
