module.exports = {
    name: 'CampaignFeed',
    object: {
        campaign: { _description: 'Immutable. The campaign to which the CampaignFeed belongs.', _type: 'string' },
        feed: { _description: 'Immutable. The feed to which the CampaignFeed belongs.', _type: 'string' },
        matching_function: {
            _description:
                'Matching function associated with the CampaignFeed. The matching function is used to filter the set of feed items selected. Required.',
        },
        placeholder_types: {
            _description:
                'Indicates which placeholder types the feed may populate under the connected campaign. Required.',
            _type: 'array of strings',
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the campaign feed. Campaign feed resource names have the form: `customers/{customer_id}/campaignFeeds/{campaign_id}~{feed_id}',
            _type: 'string',
        },
        status: {
            _description: 'Output only. Status of the campaign feed. This field is read-only.',
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
