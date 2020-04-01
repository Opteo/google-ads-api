module.exports = {
    name: 'CustomInterest',
    object: {
        description: { _description: 'Description of this custom interest audience.', _type: 'string' },
        id: { _description: 'Output only. Id of the custom interest.', _type: 'int64' },
        members: {
            _parent_description:
                'List of custom interest members that this custom interest is composed of. Members can be added during CustomInterest creation. If members are presented in UPDATE operation, existing members will be overridden.',
            _type: 'array of objects',
            member_type: {
                _description: 'The type of custom interest member, KEYWORD or URL.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'KEYWORD', description: 'Custom interest member type KEYWORD.' },
                    { s: 'URL', description: 'Custom interest member type URL.' },
                ],
                _type: 'enum',
            },
            parameter: {
                _description: 'Keyword text when member_type is KEYWORD or URL string when member_type is URL.',
                _type: 'string',
            },
        },
        name: {
            _description:
                'Name of the custom interest. It should be unique across the same custom affinity audience. This field is required for create operations.',
            _type: 'string',
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the custom interest. Custom interest resource names have the form: <code>customers/{customer_id}/customInterests/{custom_interest_id}</code>',
            _type: 'string',
        },
        status: {
            _description:
                'Status of this custom interest. Indicates whether the custom interest is enabled or removed.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'Enabled status - custom interest is enabled and can be targeted to.' },
                {
                    s: 'REMOVED',
                    description: 'Removed status - custom interest is removed and cannot be used for\ntargeting.',
                },
            ],
            _type: 'enum',
        },
        type: {
            _description:
                'Type of the custom interest, CUSTOM_AFFINITY or CUSTOM_INTENT. By default the type is set to CUSTOM_AFFINITY.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'CUSTOM_AFFINITY',
                    description: 'Allows brand advertisers to define custom affinity audience lists.',
                },
                { s: 'CUSTOM_INTENT', description: 'Allows advertisers to define custom intent audience lists.' },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
