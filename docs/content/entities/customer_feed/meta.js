module.exports = {
    name: 'CustomerFeed',
    object: {
        feed: { _description: 'Immutable. The feed being linked to the customer.', _type: 'string' },
        matching_function: {
            _description:
                'Matching function associated with the CustomerFeed. The matching function is used to filter the set of feed items selected. Required.',
        },
        placeholder_types: {
            _description:
                'Indicates which placeholder types the feed may populate under the connected customer. Required.',
            _type: 'array of strings',
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the customer feed. Customer feed resource names have the form: <code>customers/{customer_id}/customerFeeds/{feed_id}</code>',
            _type: 'string',
        },
        status: {
            _description: 'Output only. Status of the customer feed. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'ENABLED', description: 'Feed link is enabled.', index: 2 },
                { s: 'REMOVED', description: 'Feed link has been removed.', index: 3 },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
