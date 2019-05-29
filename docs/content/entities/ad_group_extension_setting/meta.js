module.exports = {
    name: 'AdGroupExtensionSetting',
    object: {
        ad_group: {
            _description:
                'The resource name of the ad group. The linked extension feed items will serve under this ad group. AdGroup resource names have the form: <code>customers/{customer_id}/adGroups/{ad_group_id}</code>',
            _type: 'string',
        },
        device: {
            _description: 'The device for which the extensions will serve. Optional.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                {
                    s: 'MOBILE',
                    description: 'Mobile. The extensions in the extension setting will only serve on\nmobile devices.',
                },
                {
                    s: 'DESKTOP',
                    description:
                        'Desktop. The extensions in the extension setting will only serve on\ndesktop devices.',
                },
            ],
            _type: 'enum',
        },
        extension_feed_items: {
            _description:
                'The resource names of the extension feed items to serve under the ad group. ExtensionFeedItem resource names have the form: <code>customers/{customer_id}/extensionFeedItems/{feed_item_id}</code>',
            _type: 'array',
        },
        extension_type: {
            _description: 'The extension type of the ad group extension setting.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'NONE', description: 'None.' },
                { s: 'APP', description: 'App.' },
                { s: 'CALL', description: 'Call.' },
                { s: 'CALLOUT', description: 'Callout.' },
                { s: 'MESSAGE', description: 'Message.' },
                { s: 'PRICE', description: 'Price.' },
                { s: 'PROMOTION', description: 'Promotion.' },
                { s: 'REVIEW', description: 'Review.' },
                { s: 'SITELINK', description: 'Sitelink.' },
                { s: 'STRUCTURED_SNIPPET', description: 'Structured snippet.' },
                { s: 'LOCATION', description: 'Location.' },
                { s: 'AFFILIATE_LOCATION', description: 'Affiliate location.' },
            ],
            _type: 'enum',
        },
        resource_name: {
            _description:
                'The resource name of the ad group extension setting. AdGroupExtensionSetting resource names have the form: <code>customers/{customer_id}/adGroupExtensionSettings/{ad_group_id}~{extension_type}</code>',
            _type: 'string',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
