module.exports = {
    name: 'AdGroupCriterion',
    object: {
        ad_group: { _description: 'The ad group to which the criterion belongs.', _type: 'string' },
        age_range: {
            _oneof: 'criterion',
            type: {
                _description: 'Type of the age range.',
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
                _type: 'enum',
            },
        },
        app_payment_model: {
            _oneof: 'criterion',
            type: {
                _description: 'Type of the app payment model.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'PAID', description: 'Represents paid-for apps.' },
                ],
                _type: 'enum',
            },
        },
        approval_status: {
            _description: 'Approval status of the criterion.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                { s: 'APPROVED', description: 'Approved.' },
                { s: 'DISAPPROVED', description: 'Disapproved.' },
                { s: 'PENDING_REVIEW', description: 'Pending Review.' },
                { s: 'UNDER_REVIEW', description: 'Under review.' },
            ],
            _type: 'enum',
        },
        bid_modifier: {
            _description:
                'The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers.',
            _type: 'double',
        },
        cpc_bid_micros: { _description: 'The CPC (cost-per-click) bid.', _type: 'int64' },
        cpm_bid_micros: { _description: 'The CPM (cost-per-thousand viewable impressions) bid.', _type: 'int64' },
        cpv_bid_micros: { _description: 'The CPV (cost-per-view) bid.', _type: 'int64' },
        criterion_id: { _description: 'The ID of the criterion. This field is ignored for mutates.', _type: 'int64' },
        custom_affinity: {
            _oneof: 'criterion',
            custom_affinity: { _description: 'The CustomInterest resource name.', _type: 'string' },
        },
        custom_intent: {
            _oneof: 'criterion',
            custom_intent: { _description: 'The CustomInterest resource name.', _type: 'string' },
        },
        effective_cpc_bid_micros: { _description: 'The effective CPC (cost-per-click) bid.', _type: 'int64' },
        effective_cpc_bid_source: {
            _description: 'Source of the effective CPC bid.',
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
        effective_cpm_bid_micros: {
            _description: 'The effective CPM (cost-per-thousand viewable impressions) bid.',
            _type: 'int64',
        },
        effective_cpm_bid_source: {
            _description: 'Source of the effective CPM bid.',
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
        effective_cpv_bid_micros: { _description: 'The effective CPV (cost-per-view) bid.', _type: 'int64' },
        effective_cpv_bid_source: {
            _description: 'Source of the effective CPV bid.',
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
        effective_percent_cpc_bid_micros: { _description: 'The effective Percent CPC bid amount.', _type: 'int64' },
        effective_percent_cpc_bid_source: {
            _description: 'Source of the effective Percent CPC bid.',
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
        final_mobile_urls: {
            _description: 'The list of possible final mobile URLs after all cross-domain redirects.',
            _type: 'array',
        },
        final_url_suffix: { _description: 'URL template for appending params to final URL.', _type: 'string' },
        final_urls: {
            _description: 'The list of possible final URLs after all cross-domain redirects for the ad.',
            _type: 'array',
        },
        gender: {
            _oneof: 'criterion',
            type: {
                _description: 'Type of the gender.',
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
                _type: 'enum',
            },
        },
        income_range: {
            _oneof: 'criterion',
            type: {
                _description: 'Type of the income range.',
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
                _type: 'enum',
            },
        },
        keyword: {
            _oneof: 'criterion',
            match_type: {
                _description: 'The match type of the keyword.',
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
                _type: 'enum',
            },
            text: { _description: 'The text of the keyword (at most 80 characters and 10 words).', _type: 'string' },
        },
        listing_group: {
            _oneof: 'criterion',
            case_value: {
                hotel_city: {
                    city_criterion: { _description: 'The Geo Target Constant resource name.', _type: 'string' },
                },
                hotel_class: { value: { _description: 'Long value of the hotel class.', _type: 'int64' } },
                hotel_country_region: {
                    country_region_criterion: {
                        _description: 'The Geo Target Constant resource name.',
                        _type: 'string',
                    },
                },
                hotel_id: { value: { _description: 'String value of the hotel ID.', _type: 'string' } },
                hotel_state: {
                    state_criterion: { _description: 'The Geo Target Constant resource name.', _type: 'string' },
                },
                listing_brand: { value: { _description: 'String value of the listing brand.', _type: 'string' } },
                listing_custom_attribute: {
                    index: {
                        _description: 'Indicates the index of the custom attribute.',
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
                        _type: 'enum',
                    },
                    value: { _description: 'String value of the listing custom attribute.', _type: 'string' },
                },
                product_bidding_category: {
                    country_code: {
                        _description:
                            'Two-letter upper-case country code of the product bidding category. It must match the campaign.shopping_setting.sales_country field.',
                        _type: 'string',
                    },
                    id: {
                        _description:
                            'ID of the product bidding category. This ID is equivalent to the google_product_category ID as described in this article: https://support.google.com/merchants/answer/6324436.',
                        _type: 'int64',
                    },
                    level: {
                        _description: 'Level of the product bidding category.',
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
                        _type: 'enum',
                    },
                },
                product_channel: {
                    channel: {
                        _description: 'Value of the locality.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                            },
                            { s: 'ONLINE', description: 'The item is sold online.' },
                            { s: 'LOCAL', description: 'The item is sold in local stores.' },
                        ],
                        _type: 'enum',
                    },
                },
                product_channel_exclusivity: {
                    channel_exclusivity: {
                        _description: 'Value of the availability.',
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
                        _type: 'enum',
                    },
                },
                product_condition: {
                    condition: {
                        _description: 'Value of the condition.',
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
                        _type: 'enum',
                    },
                },
                product_item_id: { value: { _description: 'Value of the id.', _type: 'string' } },
                product_type: {
                    level: {
                        _description: 'Level of the type.',
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
                        _type: 'enum',
                    },
                    value: { _description: 'Value of the type.', _type: 'string' },
                },
                unknown_listing_dimension: {},
            },
            parent_ad_group_criterion: {
                _description:
                    'Resource name of ad group criterion which is the parent listing group subdivision. Null for the root group.',
                _type: 'string',
            },
            type: {
                _description: 'Type of the listing group.',
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
                _type: 'enum',
            },
        },
        mobile_app_category: {
            _oneof: 'criterion',
            mobile_app_category_constant: {
                _description: 'The mobile app category constant resource name.',
                _type: 'string',
            },
        },
        mobile_application: {
            _oneof: 'criterion',
            app_id: {
                _description:
                    'A string that uniquely identifies a mobile application to Google Ads API. The format of this string is "{platform}-{platform_native_id}", where platform is "1" for iOS apps and "2" for Android apps, and where platform_native_id is the mobile application identifier native to the corresponding platform. For iOS, this native identifier is the 9 digit string that appears at the end of an App Store URL (e.g., "476943146" for "Flood-It! 2" whose App Store link is http://itunes.apple.com/us/app/flood-it!-2/id476943146). For Android, this native identifier is the application\'s package name (e.g., "com.labpixies.colordrips" for "Color Drips" given Google Play link https://play.google.com/store/apps/details?id=com.labpixies.colordrips). A well formed app id for Google Ads API would thus be "1-476943146" for iOS and "2-com.labpixies.colordrips" for Android. This field is required and must be set in CREATE operations.',
                _type: 'string',
            },
            name: { _description: 'Name of this mobile application.', _type: 'string' },
        },
        negative: {
            _description:
                'Whether to target (<code>false</code>) or exclude (<code>true</code>) the criterion. This field is immutable. To switch a criterion from positive to negative, remove then re-add it.',
            _type: 'boolean',
        },
        parental_status: {
            _oneof: 'criterion',
            type: {
                _description: 'Type of the parental status.',
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
                _type: 'enum',
            },
        },
        percent_cpc_bid_micros: {
            _description:
                'The CPC bid amount, expressed as a fraction of the advertised price for some good or service. The valid range for the fraction is [0,1) and the value stored here is 1,000,000 * [fraction].',
            _type: 'int64',
        },
        placement: {
            _oneof: 'criterion',
            url: { _description: 'URL of the placement. For example, "http://www.domain.com".', _type: 'string' },
        },
        position_estimates: {
            estimated_add_clicks_at_first_position_cpc: {
                _description:
                    'Estimate of how many clicks per week you might get by changing your keyword bid to the value in first_position_cpc_micros.',
                _type: 'int64',
            },
            estimated_add_cost_at_first_position_cpc: {
                _description:
                    'Estimate of how your cost per week might change when changing your keyword bid to the value in first_position_cpc_micros.',
                _type: 'int64',
            },
            first_page_cpc_micros: {
                _description:
                    'The estimate of the CPC bid required for ad to be shown on first page of search results.',
                _type: 'int64',
            },
            first_position_cpc_micros: {
                _description:
                    'The estimate of the CPC bid required for ad to be displayed in first position, at the top of the first page of search results.',
                _type: 'int64',
            },
            top_of_page_cpc_micros: {
                _description:
                    'The estimate of the CPC bid required for ad to be displayed at the top of the first page of search results.',
                _type: 'int64',
            },
        },
        quality_info: {
            creative_quality_score: {
                _description: 'The performance of the ad compared to other advertisers.',
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
                _type: 'enum',
            },
            post_click_quality_score: {
                _description: 'The quality score of the landing page.',
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
                _type: 'enum',
            },
            quality_score: {
                _description:
                    'The quality score. This field may not be populated if Google does not have enough information to determine a value.',
                _type: 'int32',
            },
            search_predicted_ctr: {
                _description: 'The click-through rate compared to that of other advertisers.',
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
                _type: 'enum',
            },
        },
        resource_name: {
            _description:
                'The resource name of the ad group criterion. Ad group criterion resource names have the form: <code>customers/{customer_id}/adGroupCriteria/{ad_group_id}~{criterion_id}</code>',
            _type: 'string',
        },
        status: {
            _description: 'The status of the criterion.',
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
            _type: 'enum',
        },
        system_serving_status: {
            _description: 'Serving status of the criterion.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                { s: 'ELIGIBLE', description: 'Eligible.' },
                { s: 'RARELY_SERVED', description: 'Low search volume.' },
            ],
            _type: 'enum',
        },
        topic: {
            _oneof: 'criterion',
            path: {
                _description:
                    'The category to target or exclude. Each subsequent element in the array describes a more specific sub-category. For example, "Pets &amp; Animals", "Pets", "Dogs" represents the "Pets &amp; Animals/Pets/Dogs" category.',
                _type: 'array',
            },
            topic_constant: { _description: 'The Topic Constant resource name.', _type: 'string' },
        },
        tracking_url_template: { _description: 'The URL template for constructing a tracking URL.', _type: 'string' },
        type: {
            _description: 'The type of the criterion.',
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
                { s: 'LOCATION_GROUP', description: 'Location group.' },
            ],
            _type: 'enum',
        },
        url_custom_parameters: {
            _description:
                'The list of mappings used to substitute custom parameter tags in a <code>tracking_url_template</code>, <code>final_urls</code>, or <code>mobile_final_urls</code>.',
            _type: 'array',
        },
        user_interest: {
            _oneof: 'criterion',
            user_interest_category: { _description: 'The UserInterest resource name.', _type: 'string' },
        },
        user_list: {
            _oneof: 'criterion',
            user_list: { _description: 'The User List resource name.', _type: 'string' },
        },
        webpage: {
            _oneof: 'criterion',
            conditions: {
                _description:
                    'Conditions, or logical expressions, for webpage targeting. The list of webpage targeting conditions are and-ed together when evaluated for targeting. This field is required for CREATE operations and is prohibited on UPDATE operations.',
                _type: 'array',
            },
            criterion_name: {
                _description:
                    'The name of the criterion that is defined by this parameter. The name value will be used for identifying, sorting and filtering criteria with this type of parameters. This field is required for CREATE operations and is prohibited on UPDATE operations.',
                _type: 'string',
            },
        },
        youtube_channel: {
            _oneof: 'criterion',
            channel_id: {
                _description: 'The YouTube uploader channel id or the channel code of a YouTube channel.',
                _type: 'string',
            },
        },
        youtube_video: {
            _oneof: 'criterion',
            video_id: { _description: 'YouTube video id as it appears on the YouTube watch page.', _type: 'string' },
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
