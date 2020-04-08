module.exports = {
    name: 'AdGroup',
    object: {
        ad_rotation_mode: {
            _description: 'The ad rotation mode of the ad group.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'The ad rotation mode has not been specified.' },
                {
                    s: 'UNKNOWN',
                    description: 'The received value is not known in this version.\n\nThis is a response-only value.',
                },
                { s: 'OPTIMIZE', description: 'Optimize ad group ads based on clicks or conversions.' },
                { s: 'ROTATE_FOREVER', description: 'Rotate evenly forever.' },
            ],
            _type: 'enum',
        },
        base_ad_group: {
            _description:
                'Output only. For draft or experiment ad groups, this field is the resource name of the base ad group from which this ad group was created. If a draft or experiment ad group does not have a base ad group, then this field is null. For base ad groups, this field equals the ad group resource name. This field is read-only.',
            _type: 'string',
        },
        campaign: { _description: 'Immutable. The campaign to which the ad group belongs.', _type: 'string' },
        cpc_bid_micros: { _description: 'The maximum CPC (cost-per-click) bid.', _type: 'int64' },
        cpm_bid_micros: {
            _description: 'The maximum CPM (cost-per-thousand viewable impressions) bid.',
            _type: 'int64',
        },
        cpv_bid_micros: { _description: 'Output only. The CPV (cost-per-view) bid.', _type: 'int64' },
        display_custom_bid_dimension: {
            _description:
                'Allows advertisers to specify a targeting dimension on which to place absolute bids. This is only applicable for campaigns that target only the display network and not search.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'KEYWORD',
                    description:
                        'Keyword criteria, e.g. \'mars cruise\'. KEYWORD may be used as a custom bid\ndimension. Keywords are always a targeting dimension, so may not be set\nas a target "ALL" dimension with TargetRestriction.',
                },
                {
                    s: 'AUDIENCE',
                    description:
                        'Audience criteria, which include user list, user interest, custom\naffinity,  and custom in market.',
                },
                {
                    s: 'TOPIC',
                    description:
                        "Topic criteria for targeting categories of content, e.g.\n'category::Animals>Pets' Used for Display and Video targeting.",
                },
                { s: 'GENDER', description: 'Criteria for targeting gender.' },
                { s: 'AGE_RANGE', description: 'Criteria for targeting age ranges.' },
                {
                    s: 'PLACEMENT',
                    description:
                        "Placement criteria, which include websites like 'www.flowers4sale.com',\nas well as mobile applications, mobile app categories, YouTube videos,\nand YouTube channels.",
                },
                { s: 'PARENTAL_STATUS', description: 'Criteria for parental status targeting.' },
                { s: 'INCOME_RANGE', description: 'Criteria for income range targeting.' },
            ],
            _type: 'enum',
        },
        effective_target_cpa_micros: {
            _description: 'Output only. The effective target CPA (cost-per-acquisition). This field is read-only.',
            _type: 'int64',
        },
        effective_target_cpa_source: {
            _description: 'Output only. Source of the effective target CPA. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'CAMPAIGN_BIDDING_STRATEGY',
                    description: 'Effective bid or target is inherited from campaign bidding strategy.',
                },
                { s: 'AD_GROUP', description: 'The bid or target is defined on the ad group.' },
                { s: 'AD_GROUP_CRITERION', description: 'The bid or target is defined on the ad group criterion.' },
            ],
            _type: 'enum',
        },
        effective_target_roas: {
            _description: 'Output only. The effective target ROAS (return-on-ad-spend). This field is read-only.',
            _type: 'double',
        },
        effective_target_roas_source: {
            _description: 'Output only. Source of the effective target ROAS. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'CAMPAIGN_BIDDING_STRATEGY',
                    description: 'Effective bid or target is inherited from campaign bidding strategy.',
                },
                { s: 'AD_GROUP', description: 'The bid or target is defined on the ad group.' },
                { s: 'AD_GROUP_CRITERION', description: 'The bid or target is defined on the ad group criterion.' },
            ],
            _type: 'enum',
        },
        explorer_auto_optimizer_setting: {
            _parent_description: 'Settings for the Display Campaign Optimizer, initially termed "Explorer".',
            opt_in: { _description: 'Indicates whether the optimizer is turned on.', _type: 'boolean' },
        },
        final_url_suffix: { _description: 'URL template for appending params to Final URL.', _type: 'string' },
        id: { _description: 'Output only. The ID of the ad group.', _type: 'int64' },
        labels: {
            _description: 'Output only. The resource names of labels attached to this ad group.',
            _type: 'array of strings',
        },
        name: {
            _description:
                'The name of the ad group. This field is required and should not be empty when creating new ad groups. It must contain fewer than 255 UTF-8 full-width characters. It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters.',
            _type: 'string',
        },
        percent_cpc_bid_micros: {
            _description:
                'The percent cpc bid amount, expressed as a fraction of the advertised price for some good or service. The valid range for the fraction is [0,1) and the value stored here is 1,000,000 * [fraction].',
            _type: 'int64',
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the ad group. Ad group resource names have the form: <code>customers/{customer_id}/adGroups/{ad_group_id}</code>',
            _type: 'string',
        },
        status: {
            _description: 'The status of the ad group.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'The status has not been specified.' },
                {
                    s: 'UNKNOWN',
                    description: 'The received value is not known in this version.\n\nThis is a response-only value.',
                },
                { s: 'ENABLED', description: 'The ad group is enabled.' },
                { s: 'PAUSED', description: 'The ad group is paused.' },
                { s: 'REMOVED', description: 'The ad group is removed.' },
            ],
            _type: 'enum',
        },
        target_cpa_micros: { _description: 'The target CPA (cost-per-acquisition).', _type: 'int64' },
        target_cpm_micros: {
            _description:
                'Average amount in micros that the advertiser is willing to pay for every thousand times the ad is shown.',
            _type: 'int64',
        },
        target_roas: {
            _description:
                "The target ROAS (return-on-ad-spend) override. If the ad group's campaign bidding strategy is a standard Target ROAS strategy, then this field overrides the target ROAS specified in the campaign's bidding strategy. Otherwise, this value is ignored.",
            _type: 'double',
        },
        targeting_setting: {
            _parent_description: 'Setting for targeting related features.',
            target_restriction_operations: {
                _parent_description:
                    'The list of operations changing the target restrictions. Adding a target restriction with a targeting dimension that already exists causes the existing target restriction to be replaced with the new value.',
                _type: 'array of objects',
                operator: {
                    _description: 'Type of list operation to perform.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Unspecified.' },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                        },
                        { s: 'ADD', description: 'Add the restriction to the existing restrictions.' },
                        { s: 'REMOVE', description: 'Remove the restriction from the existing restrictions.' },
                    ],
                    _type: 'enum',
                },
                value: {
                    _parent_description: 'The target restriction being added to or removed from the list.',
                    bid_only: {
                        _description:
                            'Indicates whether to restrict your ads to show only for the criteria you have selected for this targeting_dimension, or to target all values for this targeting_dimension and show ads based on your targeting in other TargetingDimensions. A value of <code>true</code> means that these criteria will only apply bid modifiers, and not affect targeting. A value of <code>false</code> means that these criteria will restrict targeting as well as applying bid modifiers.',
                        _type: 'boolean',
                    },
                    targeting_dimension: {
                        _description: 'The targeting dimension that these settings apply to.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                            },
                            {
                                s: 'KEYWORD',
                                description:
                                    'Keyword criteria, e.g. \'mars cruise\'. KEYWORD may be used as a custom bid\ndimension. Keywords are always a targeting dimension, so may not be set\nas a target "ALL" dimension with TargetRestriction.',
                            },
                            {
                                s: 'AUDIENCE',
                                description:
                                    'Audience criteria, which include user list, user interest, custom\naffinity,  and custom in market.',
                            },
                            {
                                s: 'TOPIC',
                                description:
                                    "Topic criteria for targeting categories of content, e.g.\n'category::Animals>Pets' Used for Display and Video targeting.",
                            },
                            { s: 'GENDER', description: 'Criteria for targeting gender.' },
                            { s: 'AGE_RANGE', description: 'Criteria for targeting age ranges.' },
                            {
                                s: 'PLACEMENT',
                                description:
                                    "Placement criteria, which include websites like 'www.flowers4sale.com',\nas well as mobile applications, mobile app categories, YouTube videos,\nand YouTube channels.",
                            },
                            { s: 'PARENTAL_STATUS', description: 'Criteria for parental status targeting.' },
                            { s: 'INCOME_RANGE', description: 'Criteria for income range targeting.' },
                        ],
                        _type: 'enum',
                    },
                },
            },
            target_restrictions: {
                _parent_description:
                    'The per-targeting-dimension setting to restrict the reach of your campaign or ad group.',
                _type: 'array of objects',
                bid_only: {
                    _description:
                        'Indicates whether to restrict your ads to show only for the criteria you have selected for this targeting_dimension, or to target all values for this targeting_dimension and show ads based on your targeting in other TargetingDimensions. A value of <code>true</code> means that these criteria will only apply bid modifiers, and not affect targeting. A value of <code>false</code> means that these criteria will restrict targeting as well as applying bid modifiers.',
                    _type: 'boolean',
                },
                targeting_dimension: {
                    _description: 'The targeting dimension that these settings apply to.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.' },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                        },
                        {
                            s: 'KEYWORD',
                            description:
                                'Keyword criteria, e.g. \'mars cruise\'. KEYWORD may be used as a custom bid\ndimension. Keywords are always a targeting dimension, so may not be set\nas a target "ALL" dimension with TargetRestriction.',
                        },
                        {
                            s: 'AUDIENCE',
                            description:
                                'Audience criteria, which include user list, user interest, custom\naffinity,  and custom in market.',
                        },
                        {
                            s: 'TOPIC',
                            description:
                                "Topic criteria for targeting categories of content, e.g.\n'category::Animals>Pets' Used for Display and Video targeting.",
                        },
                        { s: 'GENDER', description: 'Criteria for targeting gender.' },
                        { s: 'AGE_RANGE', description: 'Criteria for targeting age ranges.' },
                        {
                            s: 'PLACEMENT',
                            description:
                                "Placement criteria, which include websites like 'www.flowers4sale.com',\nas well as mobile applications, mobile app categories, YouTube videos,\nand YouTube channels.",
                        },
                        { s: 'PARENTAL_STATUS', description: 'Criteria for parental status targeting.' },
                        { s: 'INCOME_RANGE', description: 'Criteria for income range targeting.' },
                    ],
                    _type: 'enum',
                },
            },
        },
        tracking_url_template: { _description: 'The URL template for constructing a tracking URL.', _type: 'string' },
        type: {
            _description: 'Immutable. The type of the ad group.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'The type has not been specified.' },
                {
                    s: 'UNKNOWN',
                    description: 'The received value is not known in this version.\n\nThis is a response-only value.',
                },
                { s: 'SEARCH_STANDARD', description: 'The default ad group type for Search campaigns.' },
                { s: 'DISPLAY_STANDARD', description: 'The default ad group type for Display campaigns.' },
                {
                    s: 'SHOPPING_PRODUCT_ADS',
                    description: 'The ad group type for Shopping campaigns serving standard product ads.',
                },
                { s: 'HOTEL_ADS', description: 'The default ad group type for Hotel campaigns.' },
                { s: 'SHOPPING_SMART_ADS', description: 'The type for ad groups in Smart Shopping campaigns.' },
                { s: 'VIDEO_BUMPER', description: 'Short unskippable in-stream video ads.' },
                { s: 'VIDEO_TRUE_VIEW_IN_STREAM', description: 'TrueView (skippable) in-stream video ads.' },
                { s: 'VIDEO_TRUE_VIEW_IN_DISPLAY', description: 'TrueView in-display video ads.' },
                { s: 'VIDEO_NON_SKIPPABLE_IN_STREAM', description: 'Unskippable in-stream video ads.' },
                { s: 'VIDEO_OUTSTREAM', description: 'Outstream video ads.' },
                { s: 'SEARCH_DYNAMIC_ADS', description: 'Ad group type for Dynamic Search Ads ad groups.' },
                {
                    s: 'SHOPPING_COMPARISON_LISTING_ADS',
                    description: 'The type for ad groups in Shopping Comparison Listing campaigns.',
                },
                { s: 'PROMOTED_HOTEL_ADS', description: 'The ad group type for Promoted Hotel ad groups.' },
            ],
            _type: 'enum',
        },
        url_custom_parameters: {
            _parent_description:
                'The list of mappings used to substitute custom parameter tags in a <code>tracking_url_template</code>, <code>final_urls</code>, or <code>mobile_final_urls</code>.',
            _type: 'array of objects',
            key: { _description: 'The key matching the parameter tag name.', _type: 'string' },
            value: { _description: 'The value to be substituted.', _type: 'string' },
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
