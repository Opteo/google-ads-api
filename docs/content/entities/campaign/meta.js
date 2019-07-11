module.exports = {
    name: 'Campaign',
    object: {
        ad_serving_optimization_status: {
            _description: 'The ad serving optimization status of the campaign.',
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
            _type: 'enum',
        },
        advertising_channel_sub_type: {
            _description:
                'Optional refinement to <code>advertising_channel_type</code>. Must be a valid sub-type of the parent channel type. Can be set only when creating campaigns. After campaign is created, the field can not be changed.',
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
                {
                    s: 'APP_CAMPAIGN',
                    description:
                        "App Campaign that allows you to easily promote your Android or iOS app\nacross Google's top properties including Search, Play, YouTube, and the\nGoogle Display Network.",
                },
                {
                    s: 'APP_CAMPAIGN_FOR_ENGAGEMENT',
                    description:
                        'App Campaign for engagement, focused on driving re-engagement with the\napp across several of Google’s top properties including Search, YouTube,\nand the Google Display Network.',
                },
                { s: 'SHOPPING_COMPARISON_LISTING_ADS', description: 'Shopping Comparison Listing campaigns.' },
            ],
            _type: 'enum',
        },
        advertising_channel_type: {
            _description:
                'The primary serving target for ads within the campaign. The targeting options can be refined in <code>network_settings</code>. This field is required and should not be empty when creating new campaigns. Can be set only when creating campaigns. After the campaign is created, the field can not be changed.',
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
                    description: 'App Campaigns, and App Campaigns for Engagement, that run\nacross multiple channels.',
                },
            ],
            _type: 'enum',
        },
        app_campaign_setting: {
            app_id: { _description: 'A string that uniquely identifies a mobile application.', _type: 'string' },
            app_store: {
                _description: 'The application store that distributes this specific app.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'APPLE_APP_STORE', description: 'Apple app store.' },
                    { s: 'GOOGLE_APP_STORE', description: 'Google play.' },
                ],
                _type: 'enum',
            },
            bidding_strategy_goal_type: {
                _description:
                    'Represents the goal which the bidding strategy of this app campaign should optimize towards.',
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
                _type: 'enum',
            },
        },
        base_campaign: {
            _description:
                'The resource name of the base campaign of a draft or experiment campaign. For base campaigns, this is equal to <code>resource_name</code>. This field is read-only.',
            _type: 'string',
        },
        bidding_strategy: {
            _description: 'Portfolio bidding strategy used by campaign.',
            _oneof: 'campaignBiddingStrategy',
            _type: 'string',
        },
        bidding_strategy_type: {
            _description:
                'The type of bidding strategy. A bidding strategy can be created by setting either the bidding scheme to create a standard bidding strategy or the <code>bidding_strategy</code> field to create a portfolio bidding strategy. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'COMMISSION',
                    description:
                        'Commission is an automatic bidding strategy in which the advertiser pays\na certain portion of the conversion value.',
                },
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
                        'Page-One Promoted bidding scheme, which sets max cpc bids to\ntarget impressions on page one or page one promoted slots on google.com.\nThis enum value is deprecated.',
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
                        'Target Outrank Share is an automated bidding strategy that sets bids\nbased on the target fraction of auctions where the advertiser\nshould outrank a specific competitor.\nThis enum value is deprecated.',
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
            _type: 'enum',
        },
        campaign_budget: { _description: 'The budget of the campaign.', _type: 'string' },
        commission: {
            _oneof: 'campaignBiddingStrategy',
            commission_rate_micros: {
                _description:
                    'Commission rate defines the portion of the conversion value that the advertiser will be billed. A commission rate of x should be passed into this field as (x * 1,000,000). For example, 106,000 represents a commission rate of 0.106 (10.6%).',
                _type: 'int64',
            },
        },
        dynamic_search_ads_setting: {
            domain_name: {
                _description:
                    'The Internet domain name that this setting represents, e.g., "google.com" or "www.google.com".',
                _type: 'string',
            },
            feeds: { _description: 'The list of page feeds associated with the campaign.', _type: 'array' },
            language_code: {
                _description: 'The language code specifying the language of the domain, e.g., "en".',
                _type: 'string',
            },
            use_supplied_urls_only: {
                _description: 'Whether the campaign uses advertiser supplied URLs exclusively.',
                _type: 'boolean',
            },
        },
        end_date: {
            _description: 'The date when campaign ended. This field must not be used in WHERE clauses.',
            _type: 'string',
        },
        experiment_type: {
            _description: 'The type of campaign: normal, draft, or experiment.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'BASE', description: 'This is a regular campaign.' },
                {
                    s: 'DRAFT',
                    description:
                        'This is a draft version of a campaign.\nIt has some modifications from a base campaign,\nbut it does not serve or accrue metrics.',
                },
                {
                    s: 'EXPERIMENT',
                    description:
                        'This is an experiment version of a campaign.\nIt has some modifications from a base campaign,\nand a percentage of traffic is being diverted\nfrom the BASE campaign to this experiment campaign.',
                },
            ],
            _type: 'enum',
        },
        final_url_suffix: {
            _description:
                'Suffix used to append query parameters to landing pages that are served with parallel tracking.',
            _type: 'string',
        },
        frequency_caps: {
            _description: "A list that limits how often each user will see this campaign's ads.",
            _type: 'array',
        },
        geo_target_type_setting: {
            negative_geo_target_type: {
                _description: 'The setting used for negative geotargeting in this particular campaign.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                    {
                        s: 'PRESENCE_OR_INTEREST',
                        description:
                            "Specifies that a user is excluded from seeing the ad if they\nare in, or show interest in, advertiser's excluded locations.",
                    },
                    {
                        s: 'PRESENCE',
                        description:
                            "Specifies that a user is excluded from seeing the ad if they\nare in advertiser's excluded locations.",
                    },
                ],
                _type: 'enum',
            },
            positive_geo_target_type: {
                _description: 'The setting used for positive geotargeting in this particular campaign.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                    {
                        s: 'PRESENCE_OR_INTEREST',
                        description:
                            "Specifies that an ad is triggered if the user is in,\nor shows interest in, advertiser's targeted locations.",
                    },
                    {
                        s: 'SEARCH_INTEREST',
                        description:
                            "Specifies that an ad is triggered if the user\nsearches for advertiser's targeted locations.",
                    },
                    {
                        s: 'PRESENCE',
                        description:
                            "Specifies that an ad is triggered if the user is in\nor regularly in advertiser's targeted locations.",
                    },
                ],
                _type: 'enum',
            },
        },
        hotel_setting: { hotel_center_id: { _description: 'The linked Hotel Center account.', _type: 'int64' } },
        id: { _description: 'The ID of the campaign.', _type: 'int64' },
        labels: { _description: 'The resource names of labels attached to this campaign.', _type: 'array' },
        manual_cpc: {
            _oneof: 'campaignBiddingStrategy',
            enhanced_cpc_enabled: {
                _description: 'Whether bids are to be enhanced based on conversion optimizer data.',
                _type: 'boolean',
            },
        },
        manual_cpm: { _oneof: 'campaignBiddingStrategy' },
        manual_cpv: { _oneof: 'campaignBiddingStrategy' },
        maximize_conversion_value: {
            _oneof: 'campaignBiddingStrategy',
            target_roas: {
                _description:
                    'The target return on ad spend (ROAS) option. If set, the bid strategy will maximize revenue while averaging the target return on ad spend. If the target ROAS is high, the bid strategy may not be able to spend the full budget. If the target ROAS is not set, the bid strategy will aim to achieve the highest possible ROAS for the budget.',
                _type: 'double',
            },
        },
        maximize_conversions: { _oneof: 'campaignBiddingStrategy' },
        name: {
            _description:
                'The name of the campaign. This field is required and should not be empty when creating new campaigns. It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters.',
            _type: 'string',
        },
        network_settings: {
            target_content_network: {
                _description:
                    'Whether ads will be served on specified placements in the Google Display Network. Placements are specified using the Placement criterion.',
                _type: 'boolean',
            },
            target_google_search: {
                _description: 'Whether ads will be served with google.com search results.',
                _type: 'boolean',
            },
            target_partner_search_network: {
                _description:
                    'Whether ads will be served on the Google Partner Network. This is available only to some select Google partner accounts.',
                _type: 'boolean',
            },
            target_search_network: {
                _description:
                    'Whether ads will be served on partner sites in the Google Search Network (requires <code>target_google_search</code> to also be <code>true</code>).',
                _type: 'boolean',
            },
        },
        payment_mode: {
            _description: 'Payment mode for the campaign.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'CLICKS', description: 'Pay per click.' },
                {
                    s: 'CONVERSION_VALUE',
                    description:
                        'Pay per conversion value. This mode is only supported by campaigns with\nAdvertisingChannelType.HOTEL, BiddingStrategyType.COMMISSION, and\nBudgetType.HOTEL_ADS_COMMISSION.',
                },
                {
                    s: 'CONVERSIONS',
                    description:
                        'Pay per conversion. This mode is only supported by campaigns with\nAdvertisingChannelType.DISPLAY (excluding\nAdvertisingChannelSubType.DISPLAY_GMAIL), BiddingStrategyType.TARGET_CPA,\nand BudgetType.FIXED_CPA. The customer must also be eligible for this\nmode. See Customer.eligibility_failure_reasons for details.',
                },
            ],
            _type: 'enum',
        },
        percent_cpc: {
            _oneof: 'campaignBiddingStrategy',
            cpc_bid_ceiling_micros: {
                _description:
                    'Maximum bid limit that can be set by the bid strategy. This is an optional field entered by the advertiser and specified in local micros. Note: A zero value is interpreted in the same way as having bid_ceiling undefined.',
                _type: 'int64',
            },
            enhanced_cpc_enabled: {
                _description:
                    'Adjusts the bid for each auction upward or downward, depending on the likelihood of a conversion. Individual bids may exceed cpc_bid_ceiling_micros, but the average bid amount for a campaign should not.',
                _type: 'boolean',
            },
        },
        real_time_bidding_setting: {
            opt_in: { _description: 'Whether the campaign is opted in to real-time bidding.', _type: 'boolean' },
        },
        resource_name: {
            _description:
                'The resource name of the campaign. Campaign resource names have the form: <code>customers/{customer_id}/campaigns/{campaign_id}</code>',
            _type: 'string',
        },
        selective_optimization: {
            conversion_actions: {
                _description: 'The selected set of conversion actions for optimizing this campaign.',
                _type: 'array',
            },
        },
        serving_status: {
            _description: 'The ad serving status of the campaign.',
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
            _type: 'enum',
        },
        shopping_setting: {
            campaign_priority: {
                _description:
                    'Priority of the campaign. Campaigns with numerically higher priorities take precedence over those with lower priorities. This field is required for Shopping campaigns, with values between 0 and 2, inclusive. This field is optional for Smart Shopping campaigns, but must be equal to 3 if set.',
                _type: 'int32',
            },
            enable_local: { _description: 'Whether to include local products.', _type: 'boolean' },
            merchant_id: {
                _description:
                    'ID of the Merchant Center account. This field is required for create operations. This field is immutable for Shopping campaigns.',
                _type: 'int64',
            },
            sales_country: {
                _description:
                    "Sales country of products to include in the campaign. This field is required for Shopping campaigns. This field is immutable. This field is optional for non-Shopping campaigns, but it must be equal to 'ZZ' if set.",
                _type: 'string',
            },
        },
        start_date: {
            _description: 'The date when campaign started. This field must not be used in WHERE clauses.',
            _type: 'string',
        },
        status: {
            _description: 'The status of the campaign. When a new campaign is added, the status defaults to ENABLED.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'Campaign is currently serving ads depending on budget information.' },
                { s: 'PAUSED', description: 'Campaign has been paused by the user.' },
                { s: 'REMOVED', description: 'Campaign has been removed.' },
            ],
            _type: 'enum',
        },
        target_cpa: {
            _oneof: 'campaignBiddingStrategy',
            cpc_bid_ceiling_micros: {
                _description:
                    'Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.',
                _type: 'int64',
            },
            cpc_bid_floor_micros: {
                _description:
                    'Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.',
                _type: 'int64',
            },
            target_cpa_micros: {
                _description:
                    'Average CPA target. This target should be greater than or equal to minimum billable unit based on the currency for the account.',
                _type: 'int64',
            },
        },
        target_cpm: { _oneof: 'campaignBiddingStrategy' },
        target_impression_share: {
            _oneof: 'campaignBiddingStrategy',
            cpc_bid_ceiling_micros: {
                _description:
                    'The highest CPC bid the automated bidding system is permitted to specify. This is a required field entered by the advertiser that sets the ceiling and specified in local micros.',
                _type: 'int64',
            },
            location: {
                _description: 'The targeted location on the search results page.',
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
                _type: 'enum',
            },
            location_fraction_micros: {
                _description:
                    'The desired fraction of ads to be shown in the targeted location in micros. E.g. 1% equals 10,000.',
                _type: 'int64',
            },
        },
        target_roas: {
            _oneof: 'campaignBiddingStrategy',
            cpc_bid_ceiling_micros: {
                _description:
                    'Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.',
                _type: 'int64',
            },
            cpc_bid_floor_micros: {
                _description:
                    'Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.',
                _type: 'int64',
            },
            target_roas: {
                _description:
                    'Required. The desired revenue (based on conversion data) per unit of spend. Value must be between 0.01 and 1000.0, inclusive.',
                _type: 'double',
            },
        },
        target_spend: {
            _oneof: 'campaignBiddingStrategy',
            cpc_bid_ceiling_micros: {
                _description:
                    'Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.',
                _type: 'int64',
            },
            target_spend_micros: {
                _description:
                    'The spend target under which to maximize clicks. A TargetSpend bidder will attempt to spend the smaller of this value or the natural throttling spend amount. If not specified, the budget is used as the spend target.',
                _type: 'int64',
            },
        },
        targeting_setting: {
            target_restrictions: {
                _description: 'The per-targeting-dimension setting to restrict the reach of your campaign or ad group.',
                _type: 'array',
            },
        },
        tracking_setting: { tracking_url: { _description: 'The url used for dynamic tracking.', _type: 'string' } },
        tracking_url_template: { _description: 'The URL template for constructing a tracking URL.', _type: 'string' },
        url_custom_parameters: {
            _description:
                'The list of mappings used to substitute custom parameter tags in a <code>tracking_url_template</code>, <code>final_urls</code>, or <code>mobile_final_urls</code>.',
            _type: 'array',
        },
        vanity_pharma: {
            vanity_pharma_display_url_mode: {
                _description: 'The display mode for vanity pharma URLs.',
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
                _type: 'enum',
            },
            vanity_pharma_text: {
                _description:
                    'The text that will be displayed in display URL of the text ad when website description is the selected display mode for vanity pharma URLs.',
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
                _type: 'enum',
            },
        },
        video_brand_safety_suitability: {
            _description: '3-Tier Brand Safety setting for the campaign.',
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
            _type: 'enum',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
