module.exports = {
    name: 'Label',
    object: {
        id: { _description: 'Output only. Id of the label. Read only.', _type: 'int64' },
        name: {
            _description:
                'The name of the label. This field is required and should not be empty when creating a new label. The length of this string should be between 1 and 80, inclusive.',
            _type: 'string',
        },
        resource_name: {
            _description:
                'Immutable. Name of the resource. Label resource names have the form: <code>customers/{customer_id}/labels/{label_id}</code>',
            _type: 'string',
        },
        status: {
            _description: 'Output only. Status of the label. Read only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'Label is enabled.' },
                { s: 'REMOVED', description: 'Label is removed.' },
            ],
            _type: 'enum',
        },
        text_label: {
            _parent_description: 'A type of label displaying text on a colored background.',
            background_color: {
                _description:
                    "Background color of the label in RGB format. This string must match the regular expression '^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$'. Note: The background color may not be visible for manager accounts.",
                _type: 'string',
            },
            description: {
                _description: 'A short description of the label. The length must be no more than 200 characters.',
                _type: 'string',
            },
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
