module.exports = {
    name: 'AdGroupCriterion',
    object: {
        ad_group: { _description: 'Immutable. The ad group to which the criterion belongs.', _type: 'string' },
        age_range: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Age range.',
            type: {
                _description: 'Type of the age range.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'AGE_RANGE_18_24', description: 'Between 18 and 24 years old.', index: 503001 },
                    { s: 'AGE_RANGE_25_34', description: 'Between 25 and 34 years old.', index: 503002 },
                    { s: 'AGE_RANGE_35_44', description: 'Between 35 and 44 years old.', index: 503003 },
                    { s: 'AGE_RANGE_45_54', description: 'Between 45 and 54 years old.', index: 503004 },
                    { s: 'AGE_RANGE_55_64', description: 'Between 55 and 64 years old.', index: 503005 },
                    { s: 'AGE_RANGE_65_UP', description: '65 years old and beyond.', index: 503006 },
                    { s: 'AGE_RANGE_UNDETERMINED', description: 'Undetermined age range.', index: 503999 },
                ],
                _type: 'enum',
            },
        },
        app_payment_model: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. App Payment Model.',
            type: {
                _description: 'Type of the app payment model.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'PAID', description: 'Represents paid-for apps.', index: 30 },
                ],
                _type: 'enum',
            },
        },
        approval_status: {
            _description: 'Output only. Approval status of the criterion.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                { s: 'UNKNOWN', description: 'The value is unknown in this version.', index: 1 },
                { s: 'APPROVED', description: 'Approved.', index: 2 },
                { s: 'DISAPPROVED', description: 'Disapproved.', index: 3 },
                { s: 'PENDING_REVIEW', description: 'Pending Review.', index: 4 },
                { s: 'UNDER_REVIEW', description: 'Under review.', index: 5 },
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
        criterion_id: {
            _description: 'Output only. The ID of the criterion. This field is ignored for mutates.',
            _type: 'int64',
        },
        custom_affinity: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Custom Affinity.',
            custom_affinity: { _description: 'The CustomInterest resource name.', _type: 'string' },
        },
        custom_intent: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Custom Intent.',
            custom_intent: { _description: 'The CustomInterest resource name.', _type: 'string' },
        },
        effective_cpc_bid_micros: {
            _description: 'Output only. The effective CPC (cost-per-click) bid.',
            _type: 'int64',
        },
        effective_cpc_bid_source: {
            _description: 'Output only. Source of the effective CPC bid.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                {
                    s: 'CAMPAIGN_BIDDING_STRATEGY',
                    description: 'Effective bid or target is inherited from campaign bidding strategy.',
                    index: 5,
                },
                { s: 'AD_GROUP', description: 'The bid or target is defined on the ad group.', index: 6 },
                {
                    s: 'AD_GROUP_CRITERION',
                    description: 'The bid or target is defined on the ad group criterion.',
                    index: 7,
                },
            ],
            _type: 'enum',
        },
        effective_cpm_bid_micros: {
            _description: 'Output only. The effective CPM (cost-per-thousand viewable impressions) bid.',
            _type: 'int64',
        },
        effective_cpm_bid_source: {
            _description: 'Output only. Source of the effective CPM bid.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                {
                    s: 'CAMPAIGN_BIDDING_STRATEGY',
                    description: 'Effective bid or target is inherited from campaign bidding strategy.',
                    index: 5,
                },
                { s: 'AD_GROUP', description: 'The bid or target is defined on the ad group.', index: 6 },
                {
                    s: 'AD_GROUP_CRITERION',
                    description: 'The bid or target is defined on the ad group criterion.',
                    index: 7,
                },
            ],
            _type: 'enum',
        },
        effective_cpv_bid_micros: {
            _description: 'Output only. The effective CPV (cost-per-view) bid.',
            _type: 'int64',
        },
        effective_cpv_bid_source: {
            _description: 'Output only. Source of the effective CPV bid.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                {
                    s: 'CAMPAIGN_BIDDING_STRATEGY',
                    description: 'Effective bid or target is inherited from campaign bidding strategy.',
                    index: 5,
                },
                { s: 'AD_GROUP', description: 'The bid or target is defined on the ad group.', index: 6 },
                {
                    s: 'AD_GROUP_CRITERION',
                    description: 'The bid or target is defined on the ad group criterion.',
                    index: 7,
                },
            ],
            _type: 'enum',
        },
        effective_percent_cpc_bid_micros: {
            _description: 'Output only. The effective Percent CPC bid amount.',
            _type: 'int64',
        },
        effective_percent_cpc_bid_source: {
            _description: 'Output only. Source of the effective Percent CPC bid.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                {
                    s: 'CAMPAIGN_BIDDING_STRATEGY',
                    description: 'Effective bid or target is inherited from campaign bidding strategy.',
                    index: 5,
                },
                { s: 'AD_GROUP', description: 'The bid or target is defined on the ad group.', index: 6 },
                {
                    s: 'AD_GROUP_CRITERION',
                    description: 'The bid or target is defined on the ad group criterion.',
                    index: 7,
                },
            ],
            _type: 'enum',
        },
        final_mobile_urls: {
            _description: 'The list of possible final mobile URLs after all cross-domain redirects.',
            _type: 'array of strings',
        },
        final_url_suffix: { _description: 'URL template for appending params to final URL.', _type: 'string' },
        final_urls: {
            _description: 'The list of possible final URLs after all cross-domain redirects for the ad.',
            _type: 'array of strings',
        },
        gender: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Gender.',
            type: {
                _description: 'Type of the gender.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'MALE', description: 'Male.', index: 10 },
                    { s: 'FEMALE', description: 'Female.', index: 11 },
                    { s: 'UNDETERMINED', description: 'Undetermined gender.', index: 20 },
                ],
                _type: 'enum',
            },
        },
        income_range: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Income range.',
            type: {
                _description: 'Type of the income range.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'INCOME_RANGE_0_50', description: '0%-50%.', index: 510001 },
                    { s: 'INCOME_RANGE_50_60', description: '50% to 60%.', index: 510002 },
                    { s: 'INCOME_RANGE_60_70', description: '60% to 70%.', index: 510003 },
                    { s: 'INCOME_RANGE_70_80', description: '70% to 80%.', index: 510004 },
                    { s: 'INCOME_RANGE_80_90', description: '80% to 90%.', index: 510005 },
                    { s: 'INCOME_RANGE_90_UP', description: 'Greater than 90%.', index: 510006 },
                    { s: 'INCOME_RANGE_UNDETERMINED', description: 'Undetermined income range.', index: 510000 },
                ],
                _type: 'enum',
            },
        },
        keyword: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Keyword.',
            match_type: {
                _description: 'The match type of the keyword.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'EXACT', description: 'Exact match.', index: 2 },
                    { s: 'PHRASE', description: 'Phrase match.', index: 3 },
                    { s: 'BROAD', description: 'Broad match.', index: 4 },
                ],
                _type: 'enum',
            },
            text: { _description: 'The text of the keyword (at most 80 characters and 10 words).', _type: 'string' },
        },
        listing_group: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Listing group.',
            case_value: {
                _parent_description:
                    'Dimension value with which this listing group is refining its parent. Undefined for the root group.',
                hotel_city: {
                    _parent_description: 'City the hotel is located in.',
                    city_criterion: { _description: 'The Geo Target Constant resource name.', _type: 'string' },
                },
                hotel_class: {
                    _parent_description: 'Class of the hotel as a number of stars 1 to 5.',
                    value: { _description: 'Long value of the hotel class.', _type: 'int64' },
                },
                hotel_country_region: {
                    _parent_description: 'Country or Region the hotel is located in.',
                    country_region_criterion: {
                        _description: 'The Geo Target Constant resource name.',
                        _type: 'string',
                    },
                },
                hotel_id: {
                    _parent_description: 'Advertiser-specific hotel ID.',
                    value: { _description: 'String value of the hotel ID.', _type: 'string' },
                },
                hotel_state: {
                    _parent_description: 'State the hotel is located in.',
                    state_criterion: { _description: 'The Geo Target Constant resource name.', _type: 'string' },
                },
                product_bidding_category: {
                    _parent_description: 'Bidding category of a product offer.',
                    country_code: {
                        _description:
                            'Two-letter upper-case country code of the product bidding category. It must match the campaign.shopping_setting.sales_country field.',
                        _type: 'string',
                    },
                    id: {
                        _description:
                            'ID of the product bidding category. This ID is equivalent to the google_product_category ID as described in this article: https://support.google.com/merchants/answer/6324436',
                        _type: 'int64',
                    },
                    level: {
                        _description: 'Level of the product bidding category.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                                index: 1,
                            },
                            { s: 'LEVEL1', description: 'Level 1.', index: 7 },
                            { s: 'LEVEL2', description: 'Level 2.', index: 8 },
                            { s: 'LEVEL3', description: 'Level 3.', index: 9 },
                            { s: 'LEVEL4', description: 'Level 4.', index: 10 },
                            { s: 'LEVEL5', description: 'Level 5.', index: 11 },
                        ],
                        _type: 'enum',
                    },
                },
                product_brand: {
                    _parent_description: 'Brand of a product offer.',
                    value: { _description: 'String value of the product brand.', _type: 'string' },
                },
                product_channel: {
                    _parent_description: 'Locality of a product offer.',
                    channel: {
                        _description: 'Value of the locality.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                                index: 1,
                            },
                            { s: 'ONLINE', description: 'The item is sold online.', index: 2 },
                            { s: 'LOCAL', description: 'The item is sold in local stores.', index: 3 },
                        ],
                        _type: 'enum',
                    },
                },
                product_channel_exclusivity: {
                    _parent_description: 'Availability of a product offer.',
                    channel_exclusivity: {
                        _description: 'Value of the availability.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                                index: 1,
                            },
                            {
                                s: 'SINGLE_CHANNEL',
                                description:
                                    'The item is sold through one channel only, either local stores or online\nas indicated by its ProductChannel.',
                                index: 2,
                            },
                            {
                                s: 'MULTI_CHANNEL',
                                description:
                                    'The item is matched to its online or local stores counterpart, indicating\nit is available for purchase in both ShoppingProductChannels.',
                                index: 3,
                            },
                        ],
                        _type: 'enum',
                    },
                },
                product_condition: {
                    _parent_description: 'Condition of a product offer.',
                    condition: {
                        _description: 'Value of the condition.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                                index: 1,
                            },
                            { s: 'NEW', description: 'The product condition is new.', index: 3 },
                            { s: 'REFURBISHED', description: 'The product condition is refurbished.', index: 4 },
                            { s: 'USED', description: 'The product condition is used.', index: 5 },
                        ],
                        _type: 'enum',
                    },
                },
                product_custom_attribute: {
                    _parent_description: 'Custom attribute of a product offer.',
                    index: {
                        _description: 'Indicates the index of the custom attribute.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                                index: 1,
                            },
                            { s: 'INDEX0', description: 'First product custom attribute.', index: 7 },
                            { s: 'INDEX1', description: 'Second product custom attribute.', index: 8 },
                            { s: 'INDEX2', description: 'Third product custom attribute.', index: 9 },
                            { s: 'INDEX3', description: 'Fourth product custom attribute.', index: 10 },
                            { s: 'INDEX4', description: 'Fifth product custom attribute.', index: 11 },
                        ],
                        _type: 'enum',
                    },
                    value: { _description: 'String value of the product custom attribute.', _type: 'string' },
                },
                product_item_id: {
                    _parent_description: 'Item id of a product offer.',
                    value: { _description: 'Value of the id.', _type: 'string' },
                },
                product_type: {
                    _parent_description: 'Type of a product offer.',
                    level: {
                        _description: 'Level of the type.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                                index: 1,
                            },
                            { s: 'LEVEL1', description: 'Level 1.', index: 7 },
                            { s: 'LEVEL2', description: 'Level 2.', index: 8 },
                            { s: 'LEVEL3', description: 'Level 3.', index: 9 },
                            { s: 'LEVEL4', description: 'Level 4.', index: 10 },
                            { s: 'LEVEL5', description: 'Level 5.', index: 11 },
                        ],
                        _type: 'enum',
                    },
                    value: { _description: 'Value of the type.', _type: 'string' },
                },
                unknown_listing_dimension: {
                    _parent_description: 'Unknown dimension. Set when no other listing dimension is set.',
                },
            },
            parent_ad_group_criterion: {
                _description:
                    'Resource name of ad group criterion which is the parent listing group subdivision. Null for the root group.',
                _type: 'string',
            },
            type: {
                _description: 'Type of the listing group.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    {
                        s: 'SUBDIVISION',
                        description:
                            'Subdivision of products along some listing dimension. These nodes\nare not used by serving to target listing entries, but is purely\nto define the structure of the tree.',
                        index: 2,
                    },
                    { s: 'UNIT', description: 'Listing group unit that defines a bid.', index: 3 },
                ],
                _type: 'enum',
            },
        },
        mobile_app_category: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Mobile app category.',
            mobile_app_category_constant: {
                _description: 'The mobile app category constant resource name.',
                _type: 'string',
            },
        },
        mobile_application: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Mobile application.',
            app_id: {
                _description:
                    'A string that uniquely identifies a mobile application to Google Ads API. The format of this string is "{platform}-{platform_native_id}", where platform is "1" for iOS apps and "2" for Android apps, and where platform_native_id is the mobile application identifier native to the corresponding platform. For iOS, this native identifier is the 9 digit string that appears at the end of an App Store URL (e.g., "476943146" for "Flood-It! 2" whose App Store link is "http://itunes.apple.com/us/app/flood-it!-2/id476943146"). For Android, this native identifier is the application\'s package name (e.g., "com.labpixies.colordrips" for "Color Drips" given Google Play link "https://play.google.com/store/apps/details?id=com.labpixies.colordrips"). A well formed app id for Google Ads API would thus be "1-476943146" for iOS and "2-com.labpixies.colordrips" for Android. This field is required and must be set in CREATE operations.',
                _type: 'string',
            },
            name: { _description: 'Name of this mobile application.', _type: 'string' },
        },
        negative: {
            _description:
                'Immutable. Whether to target (<code>false</code>) or exclude (<code>true</code>) the criterion. This field is immutable. To switch a criterion from positive to negative, remove then re-add it.',
            _type: 'boolean',
        },
        parental_status: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Parental status.',
            type: {
                _description: 'Type of the parental status.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'PARENT', description: 'Parent.', index: 300 },
                    { s: 'NOT_A_PARENT', description: 'Not a parent.', index: 301 },
                    { s: 'UNDETERMINED', description: 'Undetermined parental status.', index: 302 },
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
            _parent_description: 'Immutable. Placement.',
            url: { _description: 'URL of the placement. For example, "http://www.domain.com".', _type: 'string' },
        },
        position_estimates: {
            _parent_description: 'Output only. Estimates for criterion bids at various positions.',
            estimated_add_clicks_at_first_position_cpc: {
                _description:
                    'Output only. Estimate of how many clicks per week you might get by changing your keyword bid to the value in first_position_cpc_micros.',
                _type: 'int64',
            },
            estimated_add_cost_at_first_position_cpc: {
                _description:
                    'Output only. Estimate of how your cost per week might change when changing your keyword bid to the value in first_position_cpc_micros.',
                _type: 'int64',
            },
            first_page_cpc_micros: {
                _description:
                    'Output only. The estimate of the CPC bid required for ad to be shown on first page of search results.',
                _type: 'int64',
            },
            first_position_cpc_micros: {
                _description:
                    'Output only. The estimate of the CPC bid required for ad to be displayed in first position, at the top of the first page of search results.',
                _type: 'int64',
            },
            top_of_page_cpc_micros: {
                _description:
                    'Output only. The estimate of the CPC bid required for ad to be displayed at the top of the first page of search results.',
                _type: 'int64',
            },
        },
        quality_info: {
            _parent_description: 'Output only. Information regarding the quality of the criterion.',
            creative_quality_score: {
                _description: 'Output only. The performance of the ad compared to other advertisers.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'BELOW_AVERAGE', description: 'Quality of the creative is below average.', index: 2 },
                    { s: 'AVERAGE', description: 'Quality of the creative is average.', index: 3 },
                    { s: 'ABOVE_AVERAGE', description: 'Quality of the creative is above average.', index: 4 },
                ],
                _type: 'enum',
            },
            post_click_quality_score: {
                _description: 'Output only. The quality score of the landing page.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'BELOW_AVERAGE', description: 'Quality of the creative is below average.', index: 2 },
                    { s: 'AVERAGE', description: 'Quality of the creative is average.', index: 3 },
                    { s: 'ABOVE_AVERAGE', description: 'Quality of the creative is above average.', index: 4 },
                ],
                _type: 'enum',
            },
            quality_score: {
                _description:
                    'Output only. The quality score. This field may not be populated if Google does not have enough information to determine a value.',
                _type: 'int32',
            },
            search_predicted_ctr: {
                _description: 'Output only. The click-through rate compared to that of other advertisers.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'BELOW_AVERAGE', description: 'Quality of the creative is below average.', index: 2 },
                    { s: 'AVERAGE', description: 'Quality of the creative is average.', index: 3 },
                    { s: 'ABOVE_AVERAGE', description: 'Quality of the creative is above average.', index: 4 },
                ],
                _type: 'enum',
            },
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the ad group criterion. Ad group criterion resource names have the form: <code>customers/{customer_id}/adGroupCriteria/{ad_group_id}~{criterion_id}</code>',
            _type: 'string',
        },
        status: {
            _description: 'The status of the criterion.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'No value has been specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'The received value is not known in this version.\n\nThis is a response-only value.',
                    index: 1,
                },
                { s: 'ENABLED', description: 'The ad group criterion is enabled.', index: 2 },
                { s: 'PAUSED', description: 'The ad group criterion is paused.', index: 3 },
                { s: 'REMOVED', description: 'The ad group criterion is removed.', index: 4 },
            ],
            _type: 'enum',
        },
        system_serving_status: {
            _description: 'Output only. Serving status of the criterion.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                { s: 'UNKNOWN', description: 'The value is unknown in this version.', index: 1 },
                { s: 'ELIGIBLE', description: 'Eligible.', index: 2 },
                { s: 'RARELY_SERVED', description: 'Low search volume.', index: 3 },
            ],
            _type: 'enum',
        },
        topic: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Topic.',
            path: {
                _description:
                    'The category to target or exclude. Each subsequent element in the array describes a more specific sub-category. For example, "Pets &amp; Animals", "Pets", "Dogs" represents the "Pets &amp; Animals/Pets/Dogs" category.',
                _type: 'array of strings',
            },
            topic_constant: { _description: 'The Topic Constant resource name.', _type: 'string' },
        },
        tracking_url_template: { _description: 'The URL template for constructing a tracking URL.', _type: 'string' },
        type: {
            _description: 'Output only. The type of the criterion.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'KEYWORD', description: "Keyword. e.g. 'mars cruise'.", index: 2 },
                { s: 'PLACEMENT', description: "Placement, aka Website. e.g. 'www.flowers4sale.com'", index: 3 },
                { s: 'MOBILE_APP_CATEGORY', description: 'Mobile application categories to target.', index: 4 },
                { s: 'MOBILE_APPLICATION', description: 'Mobile applications to target.', index: 5 },
                { s: 'DEVICE', description: 'Devices to target.', index: 6 },
                { s: 'LOCATION', description: 'Locations to target.', index: 7 },
                { s: 'LISTING_GROUP', description: 'Listing groups to target.', index: 8 },
                { s: 'AD_SCHEDULE', description: 'Ad Schedule.', index: 9 },
                { s: 'AGE_RANGE', description: 'Age range.', index: 10 },
                { s: 'GENDER', description: 'Gender.', index: 11 },
                { s: 'INCOME_RANGE', description: 'Income Range.', index: 12 },
                { s: 'PARENTAL_STATUS', description: 'Parental status.', index: 13 },
                { s: 'YOUTUBE_VIDEO', description: 'YouTube Video.', index: 14 },
                { s: 'YOUTUBE_CHANNEL', description: 'YouTube Channel.', index: 15 },
                { s: 'USER_LIST', description: 'User list.', index: 16 },
                { s: 'PROXIMITY', description: 'Proximity.', index: 17 },
                {
                    s: 'TOPIC',
                    description: 'A topic target on the display network (e.g. "Pets & Animals").',
                    index: 18,
                },
                { s: 'LISTING_SCOPE', description: 'Listing scope to target.', index: 19 },
                { s: 'LANGUAGE', description: 'Language.', index: 20 },
                { s: 'IP_BLOCK', description: 'IpBlock.', index: 21 },
                { s: 'CONTENT_LABEL', description: 'Content Label for category exclusion.', index: 22 },
                { s: 'CARRIER', description: 'Carrier.', index: 23 },
                { s: 'USER_INTEREST', description: 'A category the user is interested in.', index: 24 },
                { s: 'WEBPAGE', description: 'Webpage criterion for dynamic search ads.', index: 25 },
                { s: 'OPERATING_SYSTEM_VERSION', description: 'Operating system version.', index: 26 },
                { s: 'APP_PAYMENT_MODEL', description: 'App payment model.', index: 27 },
                { s: 'MOBILE_DEVICE', description: 'Mobile device.', index: 28 },
                { s: 'CUSTOM_AFFINITY', description: 'Custom affinity.', index: 29 },
                { s: 'CUSTOM_INTENT', description: 'Custom intent.', index: 30 },
                { s: 'LOCATION_GROUP', description: 'Location group.', index: 31 },
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
        user_interest: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. User Interest.',
            user_interest_category: { _description: 'The UserInterest resource name.', _type: 'string' },
        },
        user_list: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. User List.',
            user_list: { _description: 'The User List resource name.', _type: 'string' },
        },
        webpage: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Webpage',
            conditions: {
                _parent_description:
                    'Conditions, or logical expressions, for webpage targeting. The list of webpage targeting conditions are and-ed together when evaluated for targeting. This field is required for CREATE operations and is prohibited on UPDATE operations.',
                _type: 'array of objects',
                argument: { _description: 'Argument of webpage targeting condition.', _type: 'string' },
                operand: {
                    _description: 'Operand of webpage targeting condition.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                            index: 1,
                        },
                        { s: 'URL', description: 'Operand denoting a webpage URL targeting condition.', index: 2 },
                        {
                            s: 'CATEGORY',
                            description: 'Operand denoting a webpage category targeting condition.',
                            index: 3,
                        },
                        {
                            s: 'PAGE_TITLE',
                            description: 'Operand denoting a webpage title targeting condition.',
                            index: 4,
                        },
                        {
                            s: 'PAGE_CONTENT',
                            description: 'Operand denoting a webpage content targeting condition.',
                            index: 5,
                        },
                        {
                            s: 'CUSTOM_LABEL',
                            description: 'Operand denoting a webpage custom label targeting condition.',
                            index: 6,
                        },
                    ],
                    _type: 'enum',
                },
                operator: {
                    _description: 'Operator of webpage targeting condition.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                            index: 1,
                        },
                        {
                            s: 'EQUALS',
                            description: 'The argument web condition is equal to the compared web condition.',
                            index: 2,
                        },
                        {
                            s: 'CONTAINS',
                            description: 'The argument web condition is part of the compared web condition.',
                            index: 3,
                        },
                    ],
                    _type: 'enum',
                },
            },
            criterion_name: {
                _description:
                    'The name of the criterion that is defined by this parameter. The name value will be used for identifying, sorting and filtering criteria with this type of parameters. This field is required for CREATE operations and is prohibited on UPDATE operations.',
                _type: 'string',
            },
        },
        youtube_channel: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. YouTube Channel.',
            channel_id: {
                _description: 'The YouTube uploader channel id or the channel code of a YouTube channel.',
                _type: 'string',
            },
        },
        youtube_video: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. YouTube Video.',
            video_id: { _description: 'YouTube video id as it appears on the YouTube watch page.', _type: 'string' },
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
