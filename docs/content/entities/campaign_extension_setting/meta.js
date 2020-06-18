module.exports = {
    name: 'CampaignExtensionSetting',
    object: {
        campaign: {
            _description:
                'Immutable. The resource name of the campaign. The linked extension feed items will serve under this campaign. Campaign resource names have the form: <code>customers/{customer_id}/campaigns/{campaign_id}</code>',
            _type: 'string',
        },
        device: {
            _description: 'The device for which the extensions will serve. Optional.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                { s: 'UNKNOWN', description: 'The value is unknown in this version.', index: 1 },
                {
                    s: 'MOBILE',
                    description: 'Mobile. The extensions in the extension setting will only serve on\nmobile devices.',
                    index: 2,
                },
                {
                    s: 'DESKTOP',
                    description:
                        'Desktop. The extensions in the extension setting will only serve on\ndesktop devices.',
                    index: 3,
                },
            ],
            _type: 'enum',
        },
        extension_feed_items: {
            _description:
                'The resource names of the extension feed items to serve under the campaign. ExtensionFeedItem resource names have the form: <code>customers/{customer_id}/extensionFeedItems/{feed_item_id}</code>',
            _type: 'array of strings',
        },
        extension_type: {
            _description: 'Immutable. The extension type of the customer extension setting.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'NONE', description: 'None.', index: 2 },
                { s: 'APP', description: 'App.', index: 3 },
                { s: 'CALL', description: 'Call.', index: 4 },
                { s: 'CALLOUT', description: 'Callout.', index: 5 },
                { s: 'MESSAGE', description: 'Message.', index: 6 },
                { s: 'PRICE', description: 'Price.', index: 7 },
                { s: 'PROMOTION', description: 'Promotion.', index: 8 },
                { s: 'SITELINK', description: 'Sitelink.', index: 10 },
                { s: 'STRUCTURED_SNIPPET', description: 'Structured snippet.', index: 11 },
                { s: 'LOCATION', description: 'Location.', index: 12 },
                { s: 'AFFILIATE_LOCATION', description: 'Affiliate location.', index: 13 },
                { s: 'HOTEL_CALLOUT', description: 'Hotel callout', index: 15 },
            ],
            _type: 'enum',
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the campaign extension setting. CampaignExtensionSetting resource names have the form: <code>customers/{customer_id}/campaignExtensionSettings/{campaign_id}~{extension_type}</code>',
            _type: 'string',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
