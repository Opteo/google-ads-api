module.exports = {
    name: 'UserInterest',
    object: {
        availabilities: { _description: 'Availability information of the user interest.', _type: 'array' },
        launched_to_all: {
            _description: 'True if the user interest is launched to all channels and locales.',
            _type: 'boolean',
        },
        name: { _description: 'The name of the user interest.', _type: 'string' },
        resource_name: {
            _description:
                'The resource name of the user interest. User interest resource names have the form: <code>customers/{customer_id}/userInterests/{user_interest_id}</code>',
            _type: 'string',
        },
        taxonomy_type: {
            _description: 'Taxonomy type of the user interest.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'AFFINITY', description: 'The affinity for this user interest.' },
                { s: 'IN_MARKET', description: 'The market for this user interest.' },
                {
                    s: 'MOBILE_APP_INSTALL_USER',
                    description: 'Users known to have installed applications in the specified categories.',
                },
                { s: 'VERTICAL_GEO', description: 'The geographical location of the interest-based vertical.' },
                { s: 'NEW_SMART_PHONE_USER', description: 'User interest criteria for new smart phone users.' },
            ],
            _type: 'enum',
        },
        user_interest_id: { _description: 'The ID of the user interest.', _type: 'int64' },
        user_interest_parent: { _description: 'The parent of the user interest.', _type: 'string' },
    },
    methods: ['get', 'list'],
}
