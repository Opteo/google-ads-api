module.exports = {
    name: 'UserInterest',
    object: {
        availabilities: {
            _parent_description: 'Output only. Availability information of the user interest.',
            _type: 'array of objects',
            channel: {
                _parent_description: 'Channel types and subtypes that are available to the category.',
                advertising_channel_sub_type: {
                    _description: 'Channel subtypes under the channel type the category is available to.',
                    _type: 'array of strings',
                },
                advertising_channel_type: {
                    _description: 'Channel type the category is available to.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                            index: 1,
                        },
                        {
                            s: 'SEARCH',
                            description: 'Search Network. Includes display bundled, and Search+ campaigns.',
                            index: 2,
                        },
                        { s: 'DISPLAY', description: 'Google Display Network only.', index: 3 },
                        {
                            s: 'SHOPPING',
                            description:
                                'Shopping campaigns serve on the shopping property\nand on google.com search results.',
                            index: 4,
                        },
                        { s: 'HOTEL', description: 'Hotel Ads campaigns.', index: 5 },
                        { s: 'VIDEO', description: 'Video campaigns.', index: 6 },
                        {
                            s: 'MULTI_CHANNEL',
                            description:
                                'App Campaigns, and App Campaigns for Engagement, that run\nacross multiple channels.',
                            index: 7,
                        },
                    ],
                    _type: 'enum',
                },
                availability_mode: {
                    _description:
                        'Format of the channel availability. Can be ALL_CHANNELS (the rest of the fields will not be set), CHANNEL_TYPE (only advertising_channel_type type will be set, the category is available to all sub types under it) or CHANNEL_TYPE_AND_SUBTYPES (advertising_channel_type, advertising_channel_sub_type, and include_default_channel_sub_type will all be set).',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                            index: 1,
                        },
                        {
                            s: 'ALL_CHANNELS',
                            description: 'The category is available to campaigns of all channel types and subtypes.',
                            index: 2,
                        },
                        {
                            s: 'CHANNEL_TYPE_AND_ALL_SUBTYPES',
                            description:
                                'The category is available to campaigns of a specific channel type,\nincluding all subtypes under it.',
                            index: 3,
                        },
                        {
                            s: 'CHANNEL_TYPE_AND_SUBSET_SUBTYPES',
                            description:
                                'The category is available to campaigns of a specific channel type and\nsubtype(s).',
                            index: 4,
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
                _parent_description: 'Locales that are available to the category for the channel.',
                _type: 'array of objects',
                availability_mode: {
                    _description:
                        'Format of the locale availability. Can be LAUNCHED_TO_ALL (both country and language will be empty), COUNTRY (only country will be set), LANGUAGE (only language wil be set), COUNTRY_AND_LANGUAGE (both country and language will be set).',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                            index: 1,
                        },
                        {
                            s: 'ALL_LOCALES',
                            description: 'The category is available to campaigns of all locales.',
                            index: 2,
                        },
                        {
                            s: 'COUNTRY_AND_ALL_LANGUAGES',
                            description:
                                'The category is available to campaigns within a list of countries,\nregardless of language.',
                            index: 3,
                        },
                        {
                            s: 'LANGUAGE_AND_ALL_COUNTRIES',
                            description:
                                'The category is available to campaigns within a list of languages,\nregardless of country.',
                            index: 4,
                        },
                        {
                            s: 'COUNTRY_AND_LANGUAGE',
                            description:
                                'The category is available to campaigns within a list of country, language\npairs.',
                            index: 5,
                        },
                    ],
                    _type: 'enum',
                },
                country_code: { _description: 'Code of the country.', _type: 'string' },
                language_code: { _description: 'Code of the language.', _type: 'string' },
            },
        },
        launched_to_all: {
            _description: 'Output only. True if the user interest is launched to all channels and locales.',
            _type: 'boolean',
        },
        name: { _description: 'Output only. The name of the user interest.', _type: 'string' },
        resource_name: {
            _description:
                'Output only. The resource name of the user interest. User interest resource names have the form: <code>customers/{customer_id}/userInterests/{user_interest_id}</code>',
            _type: 'string',
        },
        taxonomy_type: {
            _description: 'Output only. Taxonomy type of the user interest.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'AFFINITY', description: 'The affinity for this user interest.', index: 2 },
                { s: 'IN_MARKET', description: 'The market for this user interest.', index: 3 },
                {
                    s: 'MOBILE_APP_INSTALL_USER',
                    description: 'Users known to have installed applications in the specified categories.',
                    index: 4,
                },
                {
                    s: 'VERTICAL_GEO',
                    description: 'The geographical location of the interest-based vertical.',
                    index: 5,
                },
                {
                    s: 'NEW_SMART_PHONE_USER',
                    description: 'User interest criteria for new smart phone users.',
                    index: 6,
                },
            ],
            _type: 'enum',
        },
        user_interest_id: { _description: 'Output only. The ID of the user interest.', _type: 'int64' },
        user_interest_parent: { _description: 'Output only. The parent of the user interest.', _type: 'string' },
    },
    methods: ['get', 'list'],
}
