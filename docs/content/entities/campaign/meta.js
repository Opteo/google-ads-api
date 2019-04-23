module.exports = {
    name: 'Campaign',
    object: {
        vanity_pharma: {
            vanity_pharma_display_url_mode: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    {
                        s: 'MANUFACTURER_WEBSITE_URL',
                        description: 'Replace vanity pharma URL with manufacturer website url.',
                    },
                    {
                        s: 'WEBSITE_DESCRIPTION',
                        description: 'Replace vanity pharma URL with description of the website.',
                    },
                ],
                _description: 'The display mode for vanity pharma URLs.',
            },
            vanity_pharma_text: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    {
                        s: 'PRESCRIPTION_TREATMENT_WEBSITE_EN',
                        description: 'Prescription treatment website with website content in English.',
                    },
                    {
                        s: 'PRESCRIPTION_TREATMENT_WEBSITE_ES',
                        description:
                            'Prescription treatment website with website content in Spanish\n(Sitio de tratamientos con receta).',
                    },
                    {
                        s: 'PRESCRIPTION_DEVICE_WEBSITE_EN',
                        description: 'Prescription device website with website content in English.',
                    },
                    {
                        s: 'PRESCRIPTION_DEVICE_WEBSITE_ES',
                        description:
                            'Prescription device website with website content in Spanish (Sitio de\ndispositivos con receta).',
                    },
                    {
                        s: 'MEDICAL_DEVICE_WEBSITE_EN',
                        description: 'Medical device website with website content in English.',
                    },
                    {
                        s: 'MEDICAL_DEVICE_WEBSITE_ES',
                        description:
                            'Medical device website with website content in Spanish (Sitio de\ndispositivos médicos).',
                    },
                    {
                        s: 'PREVENTATIVE_TREATMENT_WEBSITE_EN',
                        description: 'Preventative treatment website with website content in English.',
                    },
                    {
                        s: 'PREVENTATIVE_TREATMENT_WEBSITE_ES',
                        description:
                            'Preventative treatment website with website content in Spanish (Sitio de\ntratamientos preventivos).',
                    },
                    {
                        s: 'PRESCRIPTION_CONTRACEPTION_WEBSITE_EN',
                        description: 'Prescription contraception website with website content in English.',
                    },
                    {
                        s: 'PRESCRIPTION_CONTRACEPTION_WEBSITE_ES',
                        description:
                            'Prescription contraception website with website content in Spanish (Sitio\nde anticonceptivos con receta).',
                    },
                    {
                        s: 'PRESCRIPTION_VACCINE_WEBSITE_EN',
                        description: 'Prescription vaccine website with website content in English.',
                    },
                    {
                        s: 'PRESCRIPTION_VACCINE_WEBSITE_ES',
                        description:
                            'Prescription vaccine website with website content in Spanish (Sitio de\nvacunas con receta).',
                    },
                ],
                _description:
                    'The text that will be displayed in display URL of the text ad when\nwebsite description is the selected display mode for vanity pharma URLs.',
            },
        },
        id: { _type: 'int64', _description: 'The ID of the campaign.' },
        target_cpa: {
            cpc_bid_ceiling_micros: {
                _type: 'int64',
                _description:
                    'Maximum bid limit that can be set by the bid strategy.\nThe limit applies to all keywords managed by the strategy.',
            },
            cpc_bid_floor_micros: {
                _type: 'int64',
                _description:
                    'Minimum bid limit that can be set by the bid strategy.\nThe limit applies to all keywords managed by the strategy.',
            },
            target_cpa_micros: {
                _type: 'int64',
                _description:
                    'Average CPA target.\nThis target should be greater than or equal to minimum billable unit based\non the currency for the account.',
            },
            _oneof: 'campaignBiddingStrategy',
        },
        bidding_strategy: {
            _type: 'string',
            _description: 'Portfolio bidding strategy used by campaign.',
            _oneof: 'campaignBiddingStrategy',
        },
        commission: {
            commission_rate_micros: {
                _type: 'int64',
                _description:
                    'Commission rate defines the portion of the conversion value that the\nadvertiser will be billed. A commission rate of x should be passed into\nthis field as (x * 1,000,000). For example, 106,000 represents a commission\nrate of 0.106 (10.6%).',
            },
            _oneof: 'campaignBiddingStrategy',
        },
        campaign_budget: { _type: 'string', _description: 'The budget of the campaign.' },
        real_time_bidding_setting: {
            opt_in: { _type: 'boolean', _description: 'Whether the campaign is opted in to real-time bidding.' },
        },
        maximize_conversions: { _oneof: 'campaignBiddingStrategy' },
        target_roas: {
            cpc_bid_ceiling_micros: {
                _type: 'int64',
                _description:
                    'Maximum bid limit that can be set by the bid strategy.\nThe limit applies to all keywords managed by the strategy.',
            },
            target_roas: {
                _type: 'double',
                _description:
                    'Required. The desired revenue (based on conversion data) per unit of spend.\nValue must be between 0.01 and 1000.0, inclusive.',
            },
            cpc_bid_floor_micros: {
                _type: 'int64',
                _description:
                    'Minimum bid limit that can be set by the bid strategy.\nThe limit applies to all keywords managed by the strategy.',
            },
            _oneof: 'campaignBiddingStrategy',
        },
        target_impression_share: {
            cpc_bid_ceiling_micros: {
                _type: 'int64',
                _description:
                    'The highest CPC bid the automated bidding system is permitted to specify.\nThis is a required field entered by the advertiser that sets the ceiling\nand specified in local micros.',
            },
            location: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'ANYWHERE_ON_PAGE', description: 'Any location on the web page.' },
                    { s: 'TOP_OF_PAGE', description: 'Top box of ads.' },
                    { s: 'ABSOLUTE_TOP_OF_PAGE', description: 'Top slot in the top box of ads.' },
                ],
                _description: 'The targeted location on the search results page.',
            },
            location_fraction_micros: {
                _type: 'int64',
                _description:
                    'The desired fraction of ads to be shown in the targeted location in micros.\nE.g. 1% equals 10,000.',
            },
            _oneof: 'campaignBiddingStrategy',
        },
        tracking_setting: { tracking_url: { _type: 'string', _description: 'The url used for dynamic tracking.' } },
        advertising_channel_sub_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used as a return value only. Represents value unknown in this version.' },
                { s: 'SEARCH_MOBILE_APP', description: 'Mobile app campaigns for Search.' },
                { s: 'DISPLAY_MOBILE_APP', description: 'Mobile app campaigns for Display.' },
                { s: 'SEARCH_EXPRESS', description: 'AdWords express campaigns for search.' },
                { s: 'DISPLAY_EXPRESS', description: 'AdWords Express campaigns for display.' },
                { s: 'SHOPPING_SMART_ADS', description: 'Smart Shopping campaigns.' },
                { s: 'DISPLAY_GMAIL_AD', description: 'Gmail Ad campaigns.' },
                { s: 'DISPLAY_SMART_CAMPAIGN', description: 'Smart display campaigns.' },
                { s: 'VIDEO_OUTSTREAM', description: 'Video Outstream campaigns.' },
                { s: 'VIDEO_ACTION', description: 'Video TrueView for Action campaigns.' },
                { s: 'VIDEO_NON_SKIPPABLE', description: 'Video campaigns with non-skippable video ads.' },
                { s: 'APP_CAMPAIGN', description: 'Universal App Campaign.' },
            ],
            _description:
                'Optional refinement to `advertising_channel_type`.\nMust be a valid sub-type of the parent channel type.\n\nCan be set only when creating campaigns.\nAfter campaign is created, the field can not be changed.',
        },
        network_settings: {
            target_search_network: {
                _type: 'boolean',
                _description:
                    'Whether ads will be served on partner sites in the Google Search Network\n(requires `target_google_search` to also be `true`).',
            },
            target_content_network: {
                _type: 'boolean',
                _description:
                    'Whether ads will be served on specified placements in the Google Display\nNetwork. Placements are specified using the Placement criterion.',
            },
            target_google_search: {
                _type: 'boolean',
                _description: 'Whether ads will be served with google.com search results.',
            },
            target_partner_search_network: {
                _type: 'boolean',
                _description:
                    'Whether ads will be served on the Google Partner Network.\nThis is available only to some select Google partner accounts.',
            },
        },
        video_brand_safety_suitability: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'EXPANDED_INVENTORY',
                    description:
                        'This option lets you show ads across all inventory on YouTube and video\npartners that meet our standards for monetization. This option may be an\nappropriate choice for brands that want maximum access to the full\nbreadth of videos eligible for ads, including, for example, videos that\nhave strong profanity in the context of comedy or a documentary, or\nexcessive violence as featured in video games.',
                },
                {
                    s: 'STANDARD_INVENTORY',
                    description:
                        "This option lets you show ads across a wide range of content that's\nappropriate for most brands, such as popular music videos, documentaries,\nand movie trailers. The content you can show ads on is based on YouTube's\nadvertiser-friendly content guidelines that take into account, for\nexample, the strength or frequency of profanity, or the appropriateness\nof subject matter like sensitive events. Ads won't show, for example, on\ncontent with repeated strong profanity, strong sexual content, or graphic\nviolence.",
                },
                {
                    s: 'LIMITED_INVENTORY',
                    description:
                        "This option lets you show ads on a reduced range of content that's\nappropriate for brands with particularly strict guidelines around\ninappropriate language and sexual suggestiveness; above and beyond what\nYouTube's advertiser-friendly content guidelines address. The videos\naccessible in this sensitive category meet heightened requirements,\nespecially for inappropriate language and sexual suggestiveness. For\nexample, your ads will be excluded from showing on some of YouTube's most\npopular music videos and other pop culture content across YouTube and\nGoogle video partners.",
                },
            ],
            _description: '3-Tier Brand Safety setting for the campaign.',
        },
        shopping_setting: {
            campaign_priority: {
                _type: 'int32',
                _description:
                    'Priority of the campaign. Campaigns with numerically higher priorities\ntake precedence over those with lower priorities.\nThis field is required for Shopping campaigns, with values between 0 and\n2, inclusive.\nThis field is optional for Smart Shopping campaigns, but must be equal to\n3 if set.',
            },
            sales_country: {
                _type: 'string',
                _description:
                    "Sales country of products to include in the campaign.\nThis field is required for Shopping campaigns. This field is immutable.\nThis field is optional for non-Shopping campaigns, but it must be equal\nto 'ZZ' if set.",
            },
            enable_local: { _type: 'boolean', _description: 'Whether to include local products.' },
            merchant_id: {
                _type: 'int64',
                _description:
                    'ID of the Merchant Center account.\nThis field is required for create operations. This field is immutable for\nShopping campaigns.',
            },
        },
        app_campaign_setting: {
            app_store: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'APPLE_APP_STORE', description: 'Apple app store.' },
                    { s: 'GOOGLE_APP_STORE', description: 'Google play.' },
                ],
                _description: 'The application store that distributes this specific app.',
            },
            bidding_strategy_goal_type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    {
                        s: 'OPTIMIZE_INSTALLS_TARGET_INSTALL_COST',
                        description:
                            'Aim to maximize the number of app installs. The cpa bid is the\ntarget cost per install.',
                    },
                    {
                        s: 'OPTIMIZE_IN_APP_CONVERSIONS_TARGET_INSTALL_COST',
                        description:
                            'Aim to maximize the long term number of selected in-app conversions from\napp installs. The cpa bid is the target cost per install.',
                    },
                    {
                        s: 'OPTIMIZE_IN_APP_CONVERSIONS_TARGET_CONVERSION_COST',
                        description:
                            'Aim to maximize the long term number of selected in-app conversions from\napp installs. The cpa bid is the target cost per in-app conversion. Note\nthat the actual cpa may seem higher than the target cpa at first, since\nthe long term conversions haven’t happened yet.',
                    },
                    {
                        s: 'OPTIMIZE_RETURN_ON_ADVERTISING_SPEND',
                        description:
                            "Aim to maximize all conversions' value, i.e. install + selected in-app\nconversions while achieving or exceeding target return on advertising\nspend.",
                    },
                ],
                _description:
                    'Represents the goal which the bidding strategy of this app campaign\nshould optimize towards.',
            },
            app_id: { _type: 'string', _description: 'A string that uniquely identifies a mobile application.' },
        },
        percent_cpc: {
            cpc_bid_ceiling_micros: {
                _type: 'int64',
                _description:
                    'Maximum bid limit that can be set by the bid strategy. This is\nan optional field entered by the advertiser and specified in local micros.\nNote: A zero value is interpreted in the same way as having bid_ceiling\nundefined.',
            },
            enhanced_cpc_enabled: {
                _type: 'boolean',
                _description:
                    'Adjusts the bid for each auction upward or downward, depending on the\nlikelihood of a conversion. Individual bids may exceed\ncpc_bid_ceiling_micros, but the average bid amount for a campaign should\nnot.',
            },
            _oneof: 'campaignBiddingStrategy',
        },
        targeting_setting: {
            target_restrictions: {
                _type: 'array',
                _description:
                    'The per-targeting-dimension setting to restrict the reach of your campaign\nor ad group.',
            },
        },
        selective_optimization: {
            conversion_actions: {
                _type: 'array',
                _description: 'The selected set of conversion actions for optimizing this campaign.',
            },
        },
        end_date: {
            _type: 'string',
            _description: 'The date when campaign ended.\n\nThis field must not be used in WHERE clauses.',
        },
        target_spend: {
            cpc_bid_ceiling_micros: {
                _type: 'int64',
                _description:
                    'Maximum bid limit that can be set by the bid strategy.\nThe limit applies to all keywords managed by the strategy.',
            },
            target_spend_micros: {
                _type: 'int64',
                _description:
                    'The spend target under which to maximize clicks.\nA TargetSpend bidder will attempt to spend the smaller of this value\nor the natural throttling spend amount.\nIf not specified, the budget is used as the spend target.',
            },
            _oneof: 'campaignBiddingStrategy',
        },
        status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'Campaign is currently serving ads depending on budget information.' },
                { s: 'PAUSED', description: 'Campaign has been paused by the user.' },
                { s: 'REMOVED', description: 'Campaign has been removed.' },
            ],
            _description:
                'The status of the campaign.\n\nWhen a new campaign is added, the status defaults to ENABLED.',
        },
        manual_cpv: { _oneof: 'campaignBiddingStrategy' },
        bidding_strategy_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'ENHANCED_CPC',
                    description:
                        'Enhanced CPC is a bidding strategy that raises bids for clicks\nthat seem more likely to lead to a conversion and lowers\nthem for clicks where they seem less likely.',
                },
                { s: 'MANUAL_CPC', description: 'Manual click based bidding where user pays per click.' },
                {
                    s: 'MANUAL_CPM',
                    description: 'Manual impression based bidding\nwhere user pays per thousand impressions.',
                },
                { s: 'MANUAL_CPV', description: 'A bidding strategy that pays a configurable amount per video view.' },
                {
                    s: 'MAXIMIZE_CONVERSIONS',
                    description:
                        'A bidding strategy that automatically maximizes number of conversions\ngiven a daily budget.',
                },
                {
                    s: 'MAXIMIZE_CONVERSION_VALUE',
                    description:
                        'An automated bidding strategy that automatically sets bids to maximize\nrevenue while spending your budget.',
                },
                {
                    s: 'PAGE_ONE_PROMOTED',
                    description:
                        'Page-One Promoted bidding scheme, which sets max cpc bids to\ntarget impressions on page one or page one promoted slots on google.com.',
                },
                {
                    s: 'PERCENT_CPC',
                    description:
                        'Percent Cpc is bidding strategy where bids are a fraction of the\nadvertised price for some good or service.',
                },
                {
                    s: 'TARGET_CPA',
                    description:
                        'Target CPA is an automated bid strategy that sets bids\nto help get as many conversions as possible\nat the target cost-per-acquisition (CPA) you set.',
                },
                {
                    s: 'TARGET_CPM',
                    description:
                        'Target CPM is an automated bid strategy that sets bids to help get\nas many impressions as possible at the target cost per one thousand\nimpressions (CPM) you set.',
                },
                {
                    s: 'TARGET_IMPRESSION_SHARE',
                    description:
                        'An automated bidding strategy that sets bids so that a certain percentage\nof search ads are shown at the top of the first page (or other targeted\nlocation).',
                },
                {
                    s: 'TARGET_OUTRANK_SHARE',
                    description:
                        'Target Outrank Share is an automated bidding strategy that sets bids\nbased on the target fraction of auctions where the advertiser\nshould outrank a specific competitor.',
                },
                {
                    s: 'TARGET_ROAS',
                    description:
                        'Target ROAS is an automated bidding strategy\nthat helps you maximize revenue while averaging\na specific target Return On Average Spend (ROAS).',
                },
                {
                    s: 'TARGET_SPEND',
                    description:
                        'Target Spend is an automated bid strategy that sets your bids\nto help get as many clicks as possible within your budget.',
                },
            ],
            _description:
                'The type of bidding strategy.\n\nA bidding strategy can be created by setting either the bidding scheme to\ncreate a standard bidding strategy or the `bidding_strategy` field to\ncreate a portfolio bidding strategy.\n\nThis field is read-only.',
        },
        dynamic_search_ads_setting: {
            language_code: {
                _type: 'string',
                _description: 'The language code specifying the language of the domain, e.g., "en".',
            },
            domain_name: {
                _type: 'string',
                _description:
                    'The Internet domain name that this setting represents, e.g., "google.com"\nor "www.google.com".',
            },
            use_supplied_urls_only: {
                _type: 'boolean',
                _description: 'Whether the campaign uses advertiser supplied URLs exclusively.',
            },
            feeds: { _type: 'array', _description: 'The list of page feeds associated with the campaign.' },
        },
        name: {
            _type: 'string',
            _description:
                'The name of the campaign.\n\nThis field is required and should not be empty when creating new\ncampaigns.\n\nIt must not contain any null (code point 0x0), NL line feed\n(code point 0xA) or carriage return (code point 0xD) characters.',
        },
        ad_serving_optimization_status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                {
                    s: 'UNKNOWN',
                    description: 'The received value is not known in this version.\n\nThis is a response-only value.',
                },
                { s: 'OPTIMIZE', description: 'Ad serving is optimized based on CTR for the campaign.' },
                {
                    s: 'CONVERSION_OPTIMIZE',
                    description:
                        'Ad serving is optimized based on CTR * Conversion for the campaign. If\nthe campaign is not in the conversion optimizer bidding strategy, it will\ndefault to OPTIMIZED.',
                },
                { s: 'ROTATE', description: 'Ads are rotated evenly for 90 days, then optimized for clicks.' },
                {
                    s: 'ROTATE_INDEFINITELY',
                    description:
                        'Show lower performing ads more evenly with higher performing ads, and do\nnot optimize.',
                },
                { s: 'UNAVAILABLE', description: 'Ad serving optimization status is not available.' },
            ],
            _description: 'The ad serving optimization status of the campaign.',
        },
        payment_mode: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'CLICKS', description: 'Pay per click.' },
                { s: 'CONVERSION_VALUE', description: 'Pay per conversion value.' },
            ],
            _description: 'Payment mode for the campaign.',
        },
        manual_cpc: {
            enhanced_cpc_enabled: {
                _type: 'boolean',
                _description: 'Whether bids are to be enhanced based on conversion optimizer data.',
            },
            _oneof: 'campaignBiddingStrategy',
        },
        url_custom_parameters: {
            _type: 'array',
            _description:
                'The list of mappings used to substitute custom parameter tags in a\n`tracking_url_template`, `final_urls`, or `mobile_final_urls`.',
        },
        maximize_conversion_value: {
            target_roas: {
                _type: 'double',
                _description:
                    'The target return on ad spend (ROAS) option. If set, the bid strategy will\nmaximize revenue while averaging the target return on ad spend. If the\ntarget ROAS is high, the bid strategy may not be able to spend the full\nbudget. If the target ROAS is not set, the bid strategy will aim to\nachieve the highest possible ROAS for the budget.',
            },
            _oneof: 'campaignBiddingStrategy',
        },
        final_url_suffix: {
            _type: 'string',
            _description:
                'Suffix used to append query parameters to landing pages that are served\nwith parallel tracking.',
        },
        geo_target_type_setting: {
            negative_geo_target_type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                    {
                        s: 'DONT_CARE',
                        description:
                            'Specifies that a user is excluded from seeing the ad if either their\nArea of Interest (AOI) or their Location of Presence (LOP) matches the\ngeo target.',
                    },
                    {
                        s: 'LOCATION_OF_PRESENCE',
                        description:
                            'Specifies that a user is excluded from seeing the ad\nonly if their Location of Presence (LOP) matches the geo target.',
                    },
                ],
                _description: 'The setting used for negative geotargeting in this particular campaign.',
            },
            positive_geo_target_type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                    {
                        s: 'DONT_CARE',
                        description:
                            'Specifies that either Area of Interest (AOI) or\nLocation of Presence (LOP) may trigger the ad.',
                    },
                    {
                        s: 'AREA_OF_INTEREST',
                        description:
                            "Specifies that the ad is triggered only if the user's Area of Interest\n(AOI) matches.",
                    },
                    {
                        s: 'LOCATION_OF_PRESENCE',
                        description:
                            "Specifies that the ad is triggered only if the user's\nLocation of Presence (LOP) matches.",
                    },
                ],
                _description: 'The setting used for positive geotargeting in this particular campaign.',
            },
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the campaign.\nCampaign resource names have the form:\n\n`customers/{customer_id}/campaigns/{campaign_id}`',
        },
        frequency_caps: {
            _type: 'array',
            _description: "A list that limits how often each user will see this campaign's ads.",
        },
        serving_status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                {
                    s: 'UNKNOWN',
                    description: 'The received value is not known in this version.\n\nThis is a response-only value.',
                },
                { s: 'SERVING', description: 'Serving.' },
                { s: 'NONE', description: 'None.' },
                { s: 'ENDED', description: 'Ended.' },
                { s: 'PENDING', description: 'Pending.' },
                { s: 'SUSPENDED', description: 'Suspended.' },
            ],
            _description: 'The ad serving status of the campaign.',
        },
        tracking_url_template: { _type: 'string', _description: 'The URL template for constructing a tracking URL.' },
        start_date: {
            _type: 'string',
            _description: 'The date when campaign started.\n\nThis field must not be used in WHERE clauses.',
        },
        manual_cpm: { _oneof: 'campaignBiddingStrategy' },
        target_cpm: { _oneof: 'campaignBiddingStrategy' },
        advertising_channel_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'SEARCH', description: 'Search Network. Includes display bundled, and Search+ campaigns.' },
                { s: 'DISPLAY', description: 'Google Display Network only.' },
                {
                    s: 'SHOPPING',
                    description: 'Shopping campaigns serve on the shopping property\nand on google.com search results.',
                },
                { s: 'HOTEL', description: 'Hotel Ads campaigns.' },
                { s: 'VIDEO', description: 'Video campaigns.' },
                {
                    s: 'MULTI_CHANNEL',
                    description:
                        'Universal App Campaigns, including universal app install and universal\napp reengagement campaigns, that run across multiple channels.',
                },
            ],
            _description:
                'The primary serving target for ads within the campaign.\nThe targeting options can be refined in `network_settings`.\n\nThis field is required and should not be empty when creating new\ncampaigns.\n\nCan be set only when creating campaigns.\nAfter the campaign is created, the field can not be changed.',
        },
        hotel_setting: { hotel_center_id: { _type: 'int64', _description: 'The linked Hotel Center account.' } },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
