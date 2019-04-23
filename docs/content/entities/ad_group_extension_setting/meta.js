module.exports = {
    name: 'AdGroupExtensionSetting',
    object: {
        ad_group: {
            _type: 'string',
            _description:
                'The resource name of the ad group. The linked extension feed items will\nserve under this ad group.\nAdGroup resource names have the form:\n\n`customers/{customer_id}/adGroups/{ad_group_id}`',
        },
        extension_feed_items: {
            _type: 'array',
            _description:
                'The resource names of the extension feed items to serve under the ad group.\nExtensionFeedItem resource names have the form:\n\n`customers/{customer_id}/extensionFeedItems/{feed_item_id}`',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the ad group extension setting.\nAdGroupExtensionSetting resource names have the form:\n\n\n`customers/{customer_id}/adGroupExtensionSettings/{ad_group_id}~{extension_type}`',
        },
        extension_type: {
            _type: 'enum',
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
            ],
            _description: 'The extension type of the ad group extension setting.',
        },
        device: {
            _type: 'enum',
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
            _description: 'The device for which the extensions will serve. Optional.',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
