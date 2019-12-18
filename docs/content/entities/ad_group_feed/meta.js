module.exports = {
    name: 'AdGroupFeed',
    object: {
        ad_group: { _description: 'The ad group being linked to the feed.', _type: 'string' },
        feed: { _description: 'The feed being linked to the ad group.', _type: 'string' },
        matching_function: {
            _description:
                'Matching function associated with the AdGroupFeed. The matching function is used to filter the set of feed items selected. Required.',
        },
        placeholder_types: {
            _description:
                'Indicates which placeholder types the feed may populate under the connected ad group. Required.',
            _type: 'array of strings',
        },
        resource_name: {
            _description:
                'The resource name of the ad group feed. Ad group feed resource names have the form: `customers/{customer_id}/adGroupFeeds/{ad_group_id}~{feed_id}',
            _type: 'string',
        },
        status: {
            _description: 'Status of the ad group feed. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'Feed link is enabled.' },
                { s: 'REMOVED', description: 'Feed link has been removed.' },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
