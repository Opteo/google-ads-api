module.exports = {
    name: 'AdGroupCriterion',
    object: {
        cpv_bid_micros: { _type: 'int64', _description: 'The CPV (cost-per-view) bid.' },
        effective_cpv_bid_micros: { _type: 'int64', _description: 'The effective CPV (cost-per-view) bid.' },
        bid_modifier: {
            _type: 'double',
            _description:
                'The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers.',
        },
        type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'KEYWORD', description: "Keyword. e.g. 'mars cruise'." },
                { s: 'PLACEMENT', description: "Placement, aka Website. e.g. 'www.flowers4sale.com'" },
                { s: 'MOBILE_APP_CATEGORY', description: 'Mobile application categories to target.' },
                { s: 'MOBILE_APPLICATION', description: 'Mobile applications to target.' },
                { s: 'DEVICE', description: 'Devices to target.' },
                { s: 'LOCATION', description: 'Locations to target.' },
                { s: 'LISTING_GROUP', description: 'Listing groups to target.' },
                { s: 'AD_SCHEDULE', description: 'Ad Schedule.' },
                { s: 'AGE_RANGE', description: 'Age range.' },
                { s: 'GENDER', description: 'Gender.' },
                { s: 'INCOME_RANGE', description: 'Income Range.' },
                { s: 'PARENTAL_STATUS', description: 'Parental status.' },
                { s: 'YOUTUBE_VIDEO', description: 'YouTube Video.' },
                { s: 'YOUTUBE_CHANNEL', description: 'YouTube Channel.' },
                { s: 'USER_LIST', description: 'User list.' },
                { s: 'PROXIMITY', description: 'Proximity.' },
                { s: 'TOPIC', description: 'A topic target on the display network (e.g. "Pets & Animals").' },
                { s: 'LISTING_SCOPE', description: 'Listing scope to target.' },
                { s: 'LANGUAGE', description: 'Language.' },
                { s: 'IP_BLOCK', description: 'IpBlock.' },
                { s: 'CONTENT_LABEL', description: 'Content Label for category exclusion.' },
                { s: 'CARRIER', description: 'Carrier.' },
                { s: 'USER_INTEREST', description: 'A category the user is interested in.' },
                { s: 'WEBPAGE', description: 'Webpage criterion for dynamic search ads.' },
                { s: 'OPERATING_SYSTEM_VERSION', description: 'Operating system version.' },
                { s: 'APP_PAYMENT_MODEL', description: 'App payment model.' },
                { s: 'MOBILE_DEVICE', description: 'Mobile device.' },
                { s: 'CUSTOM_AFFINITY', description: 'Custom affinity.' },
                { s: 'CUSTOM_INTENT', description: 'Custom intent.' },
            ],
            _description: 'The type of the criterion.',
        },
        effective_percent_cpc_bid_source: {
            _type: 'enum',
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
            _description: 'Source of the effective Percent CPC bid.',
        },
        user_list: {
            user_list: { _type: 'string', _description: 'The User List resource name.' },
            _oneof: 'criterion',
        },
        user_interest: {
            user_interest_category: { _type: 'string', _description: 'The UserInterest resource name.' },
            _oneof: 'criterion',
        },
        percent_cpc_bid_micros: {
            _type: 'int64',
            _description:
                'The CPC bid amount, expressed as a fraction of the advertised price for some good or service. The valid range for the fraction is [0,1) and the value stored here is 1,000,000 * [fraction].',
        },
        listing_group: {
            parent_ad_group_criterion: {
                _type: 'string',
                _description:
                    'Resource name of ad group criterion which is the parent listing group subdivision. Null for the root group.',
            },
            type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    {
                        s: 'SUBDIVISION',
                        description:
                            'Subdivision of products along some listing dimension. These nodes\nare not used by serving to target listing entries, but is purely\nto define the structure of the tree.',
                    },
                    { s: 'UNIT', description: 'Listing group unit that defines a bid.' },
                ],
                _description: 'Type of the listing group.',
            },
            case_value: {
                product_bidding_category: {
                    id: {
                        _type: 'int64',
                        _description:
                            'ID of the product bidding category. This ID is equivalent to the google_product_category ID as described in this article: https://support.google.com/merchants/answer/6324436.',
                    },
                    country_code: {
                        _type: 'string',
                        _description:
                            'Two-letter upper-case country code of the product bidding category. It must match the campaign.shopping_setting.sales_country field.',
                    },
                    level: {
                        _type: 'enum',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                            },
                            { s: 'LEVEL1', description: 'Level 1.' },
                            { s: 'LEVEL2', description: 'Level 2.' },
                            { s: 'LEVEL3', description: 'Level 3.' },
                            { s: 'LEVEL4', description: 'Level 4.' },
                            { s: 'LEVEL5', description: 'Level 5.' },
                        ],
                        _description: 'Level of the product bidding category.',
                    },
                },
                product_channel_exclusivity: {
                    channel_exclusivity: {
                        _type: 'enum',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                            },
                            {
                                s: 'SINGLE_CHANNEL',
                                description:
                                    'The item is sold through one channel only, either local stores or online\nas indicated by its ProductChannel.',
                            },
                            {
                                s: 'MULTI_CHANNEL',
                                description:
                                    'The item is matched to its online or local stores counterpart, indicating\nit is available for purchase in both ShoppingProductChannels.',
                            },
                        ],
                        _description: 'Value of the availability.',
                    },
                },
                product_condition: {
                    condition: {
                        _type: 'enum',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                            },
                            { s: 'NEW', description: 'The product condition is new.' },
                            { s: 'REFURBISHED', description: 'The product condition is refurbished.' },
                            { s: 'USED', description: 'The product condition is used.' },
                        ],
                        _description: 'Value of the condition.',
                    },
                },
                hotel_class: { value: { _type: 'int64', _description: 'Long value of the hotel class.' } },
                hotel_id: { value: { _type: 'string', _description: 'String value of the hotel ID.' } },
                product_item_id: { value: { _type: 'string', _description: 'Value of the id.' } },
                product_channel: {
                    channel: {
                        _type: 'enum',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                            },
                            { s: 'ONLINE', description: 'The item is sold online.' },
                            { s: 'LOCAL', description: 'The item is sold in local stores.' },
                        ],
                        _description: 'Value of the locality.',
                    },
                },
                listing_brand: { value: { _type: 'string', _description: 'String value of the listing brand.' } },
                product_type: {
                    value: { _type: 'string', _description: 'Value of the type.' },
                    level: {
                        _type: 'enum',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                            },
                            { s: 'LEVEL1', description: 'Level 1.' },
                            { s: 'LEVEL2', description: 'Level 2.' },
                            { s: 'LEVEL3', description: 'Level 3.' },
                            { s: 'LEVEL4', description: 'Level 4.' },
                            { s: 'LEVEL5', description: 'Level 5.' },
                        ],
                        _description: 'Level of the type.',
                    },
                },
                hotel_state: {
                    state_criterion: { _type: 'string', _description: 'The Geo Target Constant resource name.' },
                },
                hotel_city: {
                    city_criterion: { _type: 'string', _description: 'The Geo Target Constant resource name.' },
                },
                hotel_country_region: {
                    country_region_criterion: {
                        _type: 'string',
                        _description: 'The Geo Target Constant resource name.',
                    },
                },
                unknown_listing_dimension: {},
                listing_custom_attribute: {
                    value: { _type: 'string', _description: 'String value of the listing custom attribute.' },
                    index: {
                        _type: 'enum',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                            },
                            { s: 'INDEX0', description: 'First listing custom attribute.' },
                            { s: 'INDEX1', description: 'Second listing custom attribute.' },
                            { s: 'INDEX2', description: 'Third listing custom attribute.' },
                            { s: 'INDEX3', description: 'Fourth listing custom attribute.' },
                            { s: 'INDEX4', description: 'Fifth listing custom attribute.' },
                        ],
                        _description: 'Indicates the index of the custom attribute.',
                    },
                },
            },
            _oneof: 'criterion',
        },
        effective_cpm_bid_source: {
            _type: 'enum',
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
            _description: 'Source of the effective CPM bid.',
        },
        webpage: {
            criterion_name: {
                _type: 'string',
                _description:
                    'The name of the criterion that is defined by this parameter. The name value will be used for identifying, sorting and filtering criteria with this type of parameters. This field is required for CREATE operations and is prohibited on UPDATE operations.',
            },
            conditions: {
                _type: 'array',
                _description:
                    'Conditions, or logical expressions, for webpage targeting. The list of webpage targeting conditions are and-ed together when evaluated for targeting. This field is required for CREATE operations and is prohibited on UPDATE operations.',
            },
            _oneof: 'criterion',
        },
        cpc_bid_micros: { _type: 'int64', _description: 'The CPC (cost-per-click) bid.' },
        placement: {
            url: { _type: 'string', _description: 'URL of the placement. For example, "http://www.domain.com".' },
            _oneof: 'criterion',
        },
        status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                {
                    s: 'UNKNOWN',
                    description: 'The received value is not known in this version.\n\nThis is a response-only value.',
                },
                { s: 'ENABLED', description: 'The ad group criterion is enabled.' },
                { s: 'PAUSED', description: 'The ad group criterion is paused.' },
                { s: 'REMOVED', description: 'The ad group criterion is removed.' },
            ],
            _description: 'The status of the criterion.',
        },
        effective_percent_cpc_bid_micros: { _type: 'int64', _description: 'The effective Percent CPC bid amount.' },
        url_custom_parameters: {
            _type: 'array',
            _description:
                'The list of mappings used to substitute custom parameter tags in a <code>tracking_url_template</code>, <code>final_urls</code>, or <code>mobile_final_urls</code>.',
        },
        final_url_suffix: { _type: 'string', _description: 'URL template for appending params to final URL.' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the ad group criterion. Ad group criterion resource names have the form: <code>customers/{customer_id}/adGroupCriteria/{ad_group_id}~{criterion_id}</code>',
        },
        approval_status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                { s: 'APPROVED', description: 'Approved.' },
                { s: 'DISAPPROVED', description: 'Disapproved.' },
                { s: 'PENDING_REVIEW', description: 'Pending Review.' },
                { s: 'UNDER_REVIEW', description: 'Under review.' },
            ],
            _description: 'Approval status of the criterion.',
        },
        parental_status: {
            type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'PARENT', description: 'Parent.' },
                    { s: 'NOT_A_PARENT', description: 'Not a parent.' },
                    { s: 'UNDETERMINED', description: 'Undetermined parental status.' },
                ],
                _description: 'Type of the parental status.',
            },
            _oneof: 'criterion',
        },
        effective_cpv_bid_source: {
            _type: 'enum',
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
            _description: 'Source of the effective CPV bid.',
        },
        quality_info: {
            post_click_quality_score: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'BELOW_AVERAGE', description: 'Quality of the creative is below average.' },
                    { s: 'AVERAGE', description: 'Quality of the creative is average.' },
                    { s: 'ABOVE_AVERAGE', description: 'Quality of the creative is above average.' },
                ],
                _description: 'The quality score of the landing page.',
            },
            creative_quality_score: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'BELOW_AVERAGE', description: 'Quality of the creative is below average.' },
                    { s: 'AVERAGE', description: 'Quality of the creative is average.' },
                    { s: 'ABOVE_AVERAGE', description: 'Quality of the creative is above average.' },
                ],
                _description: 'The performance of the ad compared to other advertisers.',
            },
            quality_score: {
                _type: 'int32',
                _description:
                    'The quality score. This field may not be populated if Google does not have enough information to determine a value.',
            },
            search_predicted_ctr: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'BELOW_AVERAGE', description: 'Quality of the creative is below average.' },
                    { s: 'AVERAGE', description: 'Quality of the creative is average.' },
                    { s: 'ABOVE_AVERAGE', description: 'Quality of the creative is above average.' },
                ],
                _description: 'The click-through rate compared to that of other advertisers.',
            },
        },
        tracking_url_template: { _type: 'string', _description: 'The URL template for constructing a tracking URL.' },
        criterion_id: { _type: 'int64', _description: 'The ID of the criterion. This field is ignored for mutates.' },
        age_range: {
            type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'AGE_RANGE_18_24', description: 'Between 18 and 24 years old.' },
                    { s: 'AGE_RANGE_25_34', description: 'Between 25 and 34 years old.' },
                    { s: 'AGE_RANGE_35_44', description: 'Between 35 and 44 years old.' },
                    { s: 'AGE_RANGE_45_54', description: 'Between 45 and 54 years old.' },
                    { s: 'AGE_RANGE_55_64', description: 'Between 55 and 64 years old.' },
                    { s: 'AGE_RANGE_65_UP', description: '65 years old and beyond.' },
                    { s: 'AGE_RANGE_UNDETERMINED', description: 'Undetermined age range.' },
                ],
                _description: 'Type of the age range.',
            },
            _oneof: 'criterion',
        },
        youtube_video: {
            video_id: { _type: 'string', _description: 'YouTube video id as it appears on the YouTube watch page.' },
            _oneof: 'criterion',
        },
        custom_affinity: {
            custom_affinity: { _type: 'string', _description: 'The CustomInterest resource name.' },
            _oneof: 'criterion',
        },
        system_serving_status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                { s: 'ELIGIBLE', description: 'Eligible.' },
                { s: 'RARELY_SERVED', description: 'Low search volume.' },
            ],
            _description: 'Serving status of the criterion.',
        },
        youtube_channel: {
            channel_id: {
                _type: 'string',
                _description: 'The YouTube uploader channel id or the channel code of a YouTube channel.',
            },
            _oneof: 'criterion',
        },
        topic: {
            topic_constant: { _type: 'string', _description: 'The Topic Constant resource name.' },
            path: {
                _type: 'array',
                _description:
                    'The category to target or exclude. Each subsequent element in the array describes a more specific sub-category. For example, "Pets &amp; Animals", "Pets", "Dogs" represents the "Pets &amp; Animals/Pets/Dogs" category.',
            },
            _oneof: 'criterion',
        },
        effective_cpc_bid_source: {
            _type: 'enum',
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
            _description: 'Source of the effective CPC bid.',
        },
        negative: {
            _type: 'boolean',
            _description:
                'Whether to target (<code>false</code>) or exclude (<code>true</code>) the criterion. This field is immutable. To switch a criterion from positive to negative, remove then re-add it.',
        },
        app_payment_model: {
            type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'PAID', description: 'Represents paid-for apps.' },
                ],
                _description: 'Type of the app payment model.',
            },
            _oneof: 'criterion',
        },
        ad_group: { _type: 'string', _description: 'The ad group to which the criterion belongs.' },
        mobile_app_category: {
            mobile_app_category_constant: {
                _type: 'string',
                _description: 'The mobile app category constant resource name.',
            },
            _oneof: 'criterion',
        },
        keyword: {
            match_type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'EXACT', description: 'Exact match.' },
                    { s: 'PHRASE', description: 'Phrase match.' },
                    { s: 'BROAD', description: 'Broad match.' },
                ],
                _description: 'The match type of the keyword.',
            },
            text: { _type: 'string', _description: 'The text of the keyword (at most 80 characters and 10 words).' },
            _oneof: 'criterion',
        },
        final_mobile_urls: {
            _type: 'array',
            _description: 'The list of possible final mobile URLs after all cross-domain redirects.',
        },
        gender: {
            type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'MALE', description: 'Male.' },
                    { s: 'FEMALE', description: 'Female.' },
                    { s: 'UNDETERMINED', description: 'Undetermined gender.' },
                ],
                _description: 'Type of the gender.',
            },
            _oneof: 'criterion',
        },
        mobile_application: {
            app_id: {
                _type: 'string',
                _description:
                    'A string that uniquely identifies a mobile application to Google Ads API. The format of this string is "{platform}-{platform_native_id}", where platform is "1" for iOS apps and "2" for Android apps, and where platform_native_id is the mobile application identifier native to the corresponding platform. For iOS, this native identifier is the 9 digit string that appears at the end of an App Store URL (e.g., "476943146" for "Flood-It! 2" whose App Store link is http://itunes.apple.com/us/app/flood-it!-2/id476943146). For Android, this native identifier is the application\'s package name (e.g., "com.labpixies.colordrips" for "Color Drips" given Google Play link https://play.google.com/store/apps/details?id=com.labpixies.colordrips). A well formed app id for Google Ads API would thus be "1-476943146" for iOS and "2-com.labpixies.colordrips" for Android. This field is required and must be set in CREATE operations.',
            },
            _oneof: 'criterion',
        },
        custom_intent: {
            custom_intent: { _type: 'string', _description: 'The CustomInterest resource name.' },
            _oneof: 'criterion',
        },
        final_urls: {
            _type: 'array',
            _description: 'The list of possible final URLs after all cross-domain redirects for the ad.',
        },
        effective_cpc_bid_micros: { _type: 'int64', _description: 'The effective CPC (cost-per-click) bid.' },
        effective_cpm_bid_micros: {
            _type: 'int64',
            _description: 'The effective CPM (cost-per-thousand viewable impressions) bid.',
        },
        cpm_bid_micros: { _type: 'int64', _description: 'The CPM (cost-per-thousand viewable impressions) bid.' },
        income_range: {
            type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'INCOME_RANGE_0_50', description: '0%-50%.' },
                    { s: 'INCOME_RANGE_50_60', description: '50% to 60%.' },
                    { s: 'INCOME_RANGE_60_70', description: '60% to 70%.' },
                    { s: 'INCOME_RANGE_70_80', description: '70% to 80%.' },
                    { s: 'INCOME_RANGE_80_90', description: '80% to 90%.' },
                    { s: 'INCOME_RANGE_90_UP', description: 'Greater than 90%.' },
                    { s: 'INCOME_RANGE_UNDETERMINED', description: 'Undetermined income range.' },
                ],
                _description: 'Type of the income range.',
            },
            _oneof: 'criterion',
        },
        position_estimates: {
            first_page_cpc_micros: {
                _type: 'int64',
                _description:
                    'The estimate of the CPC bid required for ad to be shown on first page of search results.',
            },
            first_position_cpc_micros: {
                _type: 'int64',
                _description:
                    'The estimate of the CPC bid required for ad to be displayed in first position, at the top of the first page of search results.',
            },
            estimated_add_clicks_at_first_position_cpc: {
                _type: 'int64',
                _description:
                    'Estimate of how many clicks per week you might get by changing your keyword bid to the value in first_position_cpc_micros.',
            },
            estimated_add_cost_at_first_position_cpc: {
                _type: 'int64',
                _description:
                    'Estimate of how your cost per week might change when changing your keyword bid to the value in first_position_cpc_micros.',
            },
            top_of_page_cpc_micros: {
                _type: 'int64',
                _description:
                    'The estimate of the CPC bid required for ad to be displayed at the top of the first page of search results.',
            },
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
