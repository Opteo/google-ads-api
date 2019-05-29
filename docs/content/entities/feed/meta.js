module.exports = {
    name: 'Feed',
    object: {
        affiliate_location_feed_data: {
            _oneof: 'systemFeedGenerationData',
            chain_ids: {
                _description: 'The list of chains that the affiliate location feed will sync the locations from.',
                _type: 'array',
            },
            relationship_type: {
                _description: 'The relationship the chains have with the advertiser.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'GENERAL_RETAILER', description: 'General retailer relationship.' },
                ],
                _type: 'enum',
            },
        },
        attribute_operations: {
            _description:
                'The list of operations changing the feed attributes. Attributes can only be added, not removed.',
            _type: 'array',
        },
        attributes: {
            _description:
                "The Feed's attributes. Required on CREATE. Disallowed on UPDATE. Use attribute_operations to add new attributes.",
            _type: 'array',
        },
        id: { _description: 'The ID of the feed. This field is read-only.', _type: 'int64' },
        name: { _description: 'Name of the feed. Required.', _type: 'string' },
        origin: {
            _description: 'Specifies who manages the FeedAttributes for the Feed.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'USER',
                    description:
                        'The FeedAttributes for this Feed are managed by the\nuser. Users can add FeedAttributes to this Feed.',
                },
                {
                    s: 'GOOGLE',
                    description:
                        'The FeedAttributes for an GOOGLE Feed are created by Google. A feed of\nthis type is maintained by Google and will have the correct attributes\nfor the placeholder type of the feed.',
                },
            ],
            _type: 'enum',
        },
        places_location_feed_data: {
            _oneof: 'systemFeedGenerationData',
            business_account_id: {
                _description:
                    'Plus page ID of the managed business whose locations should be used. If this field is not set, then all businesses accessible by the user (specified by email_address) are used. This field is mutate-only and is not selectable.',
                _type: 'string',
            },
            business_name_filter: {
                _description:
                    "Used to filter Google My Business listings by business name. If business_name_filter is set, only listings with a matching business name are candidates to be sync'd into FeedItems.",
                _type: 'string',
            },
            category_filters: {
                _description:
                    "Used to filter Google My Business listings by categories. If entries exist in category_filters, only listings that belong to any of the categories are candidates to be sync'd into FeedItems. If no entries exist in category_filters, then all listings are candidates for syncing.",
                _type: 'array',
            },
            email_address: {
                _description:
                    'Email address of a Google My Business account or email address of a manager of the Google My Business account. Required.',
                _type: 'string',
            },
            label_filters: {
                _description:
                    'Used to filter Google My Business listings by labels. If entries exist in label_filters, only listings that has any of the labels set are candidates to be synchronized into FeedItems. If no entries exist in label_filters, then all listings are candidates for syncing.',
                _type: 'array',
            },
            oauth_info: {
                http_authorization_header: {
                    _description: 'The HTTP authorization header used to obtain authorization.',
                    _type: 'string',
                },
                http_method: { _description: 'The HTTP method used to obtain authorization.', _type: 'string' },
                http_request_url: {
                    _description: 'The HTTP request URL used to obtain authorization.',
                    _type: 'string',
                },
            },
        },
        resource_name: {
            _description:
                'The resource name of the feed. Feed resource names have the form: <code>customers/{customer_id}/feeds/{feed_id}</code>',
            _type: 'string',
        },
        status: {
            _description: 'Status of the feed. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'Feed is enabled.' },
                { s: 'REMOVED', description: 'Feed has been removed.' },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
