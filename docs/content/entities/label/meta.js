module.exports = {
    name: 'Label',
    object: {
        status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'Label is enabled.' },
                { s: 'REMOVED', description: 'Label is removed.' },
            ],
            _description: 'Status of the label. Read only.',
        },
        resource_name: {
            _type: 'string',
            _description:
                'Name of the resource. Label resource names have the form: <code>customers/{customer_id}/labels/{label_id}</code>',
        },
        name: {
            _type: 'string',
            _description:
                'The name of the label. This field is required and should not be empty when creating a new label. The length of this string should be between 1 and 80, inclusive.',
        },
        text_label: {
            description: {
                _type: 'string',
                _description: 'A short description of the label. The length must be no more than 200 characters.',
            },
            background_color: {
                _type: 'string',
                _description:
                    "Background color of the label in RGB format. This string must match the regular expression '^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$'. Note: The background color may not be visible for manager accounts.",
            },
        },
        id: { _type: 'int64', _description: 'Id of the label. Read only.' },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
