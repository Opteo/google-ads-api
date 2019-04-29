module.exports = {
    name: 'UserInterest',
    object: {
        launched_to_all: {
            _type: 'boolean',
            _description: 'True if the user interest is launched to all channels and locales.',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the user interest. User interest resource names have the form: <code>customers/{customer_id}/userInterests/{user_interest_id}</code>',
        },
        availabilities: { _type: 'array', _description: 'Availability information of the user interest.' },
        user_interest_parent: { _type: 'string', _description: 'The parent of the user interest.' },
        name: { _type: 'string', _description: 'The name of the user interest.' },
        taxonomy_type: {
            _type: 'enum',
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
            _description: 'Taxonomy type of the user interest.',
        },
        user_interest_id: { _type: 'int64', _description: 'The ID of the user interest.' },
    },
    methods: ['get', 'list'],
}
