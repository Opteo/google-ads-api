module.exports = {
    name: 'UserInterest',
    object: {
        availabilities: {
            _type: 'array of objects',
            channel: {
                advertising_channel_sub_type: {
                    _description: 'Channel subtypes under the channel type the category is available to.',
                    _type: 'array of strings',
                },
                advertising_channel_type: {
                    _description: 'Channel type the category is available to.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.' },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                        },
                        {
                            s: 'SEARCH',
                            description: 'Search Network. Includes display bundled, and Search+ campaigns.',
                        },
                        { s: 'DISPLAY', description: 'Google Display Network only.' },
                        {
                            s: 'SHOPPING',
                            description:
                                'Shopping campaigns serve on the shopping property\nand on google.com search results.',
                        },
                        { s: 'HOTEL', description: 'Hotel Ads campaigns.' },
                        { s: 'VIDEO', description: 'Video campaigns.' },
                        {
                            s: 'MULTI_CHANNEL',
                            description:
                                'App Campaigns, and App Campaigns for Engagement, that run\nacross multiple channels.',
                        },
                    ],
                    _type: 'enum',
                },
                availability_mode: {
                    _description:
                        'Format of the channel availability. Can be ALL_CHANNELS (the rest of the fields will not be set), CHANNEL_TYPE (only advertising_channel_type type will be set, the category is available to all sub types under it) or CHANNEL_TYPE_AND_SUBTYPES (advertising_channel_type, advertising_channel_sub_type, and include_default_channel_sub_type will all be set).',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.' },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                        },
                        {
                            s: 'ALL_CHANNELS',
                            description: 'The category is available to campaigns of all channel types and subtypes.',
                        },
                        {
                            s: 'CHANNEL_TYPE_AND_ALL_SUBTYPES',
                            description:
                                'The category is available to campaigns of a specific channel type,\nincluding all subtypes under it.',
                        },
                        {
                            s: 'CHANNEL_TYPE_AND_SUBSET_SUBTYPES',
                            description:
                                'The category is available to campaigns of a specific channel type and\nsubtype(s).',
                        },
                    ],
                    _type: 'enum',
                },
                include_default_channel_sub_type: {
                    _description:
                        'Whether default channel sub type is included. For example, advertising_channel_type being DISPLAY and include_default_channel_sub_type being false means that the default display campaign where channel sub type is not set is not included in this availability configuration.',
                    _type: 'boolean',
                },
            },
            locale: {
                _type: 'array of objects',
                availability_mode: {
                    _description:
                        'Format of the locale availability. Can be LAUNCHED_TO_ALL (both country and language will be empty), COUNTRY (only country will be set), LANGUAGE (only language wil be set), COUNTRY_AND_LANGUAGE (both country and language will be set).',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.' },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                        },
                        { s: 'ALL_LOCALES', description: 'The category is available to campaigns of all locales.' },
                        {
                            s: 'COUNTRY_AND_ALL_LANGUAGES',
                            description:
                                'The category is available to campaigns within a list of countries,\nregardless of language.',
                        },
                        {
                            s: 'LANGUAGE_AND_ALL_COUNTRIES',
                            description:
                                'The category is available to campaigns within a list of languages,\nregardless of country.',
                        },
                        {
                            s: 'COUNTRY_AND_LANGUAGE',
                            description:
                                'The category is available to campaigns within a list of country, language\npairs.',
                        },
                    ],
                    _type: 'enum',
                },
                country_code: { _description: 'Code of the country.', _type: 'string' },
                language_code: { _description: 'Code of the language.', _type: 'string' },
            },
        },
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
