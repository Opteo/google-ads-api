module.exports = {
    name: 'CampaignCriterion',
    object: {
        ad_schedule: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Ad Schedule.',
            day_of_week: {
                _description:
                    'Day of the week the schedule applies to. This field is required for CREATE operations and is prohibited on UPDATE operations.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                    { s: 'MONDAY', description: 'Monday.' },
                    { s: 'TUESDAY', description: 'Tuesday.' },
                    { s: 'WEDNESDAY', description: 'Wednesday.' },
                    { s: 'THURSDAY', description: 'Thursday.' },
                    { s: 'FRIDAY', description: 'Friday.' },
                    { s: 'SATURDAY', description: 'Saturday.' },
                    { s: 'SUNDAY', description: 'Sunday.' },
                ],
                _type: 'enum',
            },
            end_hour: {
                _description:
                    'Ending hour in 24 hour time; 24 signifies end of the day. This field must be between 0 and 24, inclusive. This field is required for CREATE operations and is prohibited on UPDATE operations.',
                _type: 'int32',
            },
            end_minute: {
                _description:
                    'Minutes after the end hour at which this schedule ends. The schedule is exclusive of the end minute. This field is required for CREATE operations and is prohibited on UPDATE operations.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                    { s: 'ZERO', description: 'Zero minutes past the hour.' },
                    { s: 'FIFTEEN', description: 'Fifteen minutes past the hour.' },
                    { s: 'THIRTY', description: 'Thirty minutes past the hour.' },
                    { s: 'FORTY_FIVE', description: 'Forty-five minutes past the hour.' },
                ],
                _type: 'enum',
            },
            start_hour: {
                _description:
                    'Starting hour in 24 hour time. This field must be between 0 and 23, inclusive. This field is required for CREATE operations and is prohibited on UPDATE operations.',
                _type: 'int32',
            },
            start_minute: {
                _description:
                    'Minutes after the start hour at which this schedule starts. This field is required for CREATE operations and is prohibited on UPDATE operations.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                    { s: 'ZERO', description: 'Zero minutes past the hour.' },
                    { s: 'FIFTEEN', description: 'Fifteen minutes past the hour.' },
                    { s: 'THIRTY', description: 'Thirty minutes past the hour.' },
                    { s: 'FORTY_FIVE', description: 'Forty-five minutes past the hour.' },
                ],
                _type: 'enum',
            },
        },
        age_range: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Age range.',
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
        bid_modifier: {
            _description:
                'The modifier for the bids when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers. Use 0 to opt out of a Device type.',
            _type: 'float',
        },
        campaign: { _description: 'Immutable. The campaign to which the criterion belongs.', _type: 'string' },
        carrier: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Carrier.',
            carrier_constant: { _description: 'The Carrier constant resource name.', _type: 'string' },
        },
        content_label: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. ContentLabel.',
            type: {
                _description: 'Content label type, required for CREATE operations.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'SEXUALLY_SUGGESTIVE', description: 'Sexually suggestive content.' },
                    { s: 'BELOW_THE_FOLD', description: 'Below the fold placement.' },
                    { s: 'PARKED_DOMAIN', description: 'Parked domain.' },
                    { s: 'JUVENILE', description: 'Juvenile, gross & bizarre content.' },
                    { s: 'PROFANITY', description: 'Profanity & rough language.' },
                    { s: 'TRAGEDY', description: 'Death & tragedy.' },
                    { s: 'VIDEO', description: 'Video.' },
                    { s: 'VIDEO_RATING_DV_G', description: 'Content rating: G.' },
                    { s: 'VIDEO_RATING_DV_PG', description: 'Content rating: PG.' },
                    { s: 'VIDEO_RATING_DV_T', description: 'Content rating: T.' },
                    { s: 'VIDEO_RATING_DV_MA', description: 'Content rating: MA.' },
                    { s: 'VIDEO_NOT_YET_RATED', description: 'Content rating: not yet rated.' },
                    { s: 'EMBEDDED_VIDEO', description: 'Embedded video.' },
                    { s: 'LIVE_STREAMING_VIDEO', description: 'Live streaming video.' },
                    { s: 'SOCIAL_ISSUES', description: 'Sensitive social issues.' },
                ],
                _type: 'enum',
            },
        },
        criterion_id: {
            _description: 'Output only. The ID of the criterion. This field is ignored during mutate.',
            _type: 'int64',
        },
        custom_affinity: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Custom Affinity.',
            custom_affinity: { _description: 'The CustomInterest resource name.', _type: 'string' },
        },
        device: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Device.',
            type: {
                _description: 'Type of the device.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                    { s: 'MOBILE', description: 'Mobile devices with full browsers.' },
                    { s: 'TABLET', description: 'Tablets with full browsers.' },
                    { s: 'DESKTOP', description: 'Computers.' },
                    { s: 'CONNECTED_TV', description: 'Smart TVs and game consoles.' },
                    { s: 'OTHER', description: 'Other device types.' },
                ],
                _type: 'enum',
            },
        },
        gender: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Gender.',
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
            _parent_description: 'Immutable. Income range.',
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
        ip_block: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. IpBlock.',
            ip_address: { _description: 'The IP address of this IP block.', _type: 'string' },
        },
        keyword: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Keyword.',
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
        language: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Language.',
            language_constant: { _description: 'The language constant resource name.', _type: 'string' },
        },
        listing_scope: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Listing scope.',
            dimensions: {
                _parent_description: 'Scope of the campaign criterion.',
                _type: 'array of objects',
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
                product_brand: {
                    _parent_description: 'Brand of a product offer.',
                    value: { _description: 'String value of the product brand.', _type: 'string' },
                },
                product_channel: {
                    _parent_description: 'Locality of a product offer.',
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
                    _parent_description: 'Availability of a product offer.',
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
                    _parent_description: 'Condition of a product offer.',
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
                product_custom_attribute: {
                    _parent_description: 'Custom attribute of a product offer.',
                    index: {
                        _description: 'Indicates the index of the custom attribute.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                            },
                            { s: 'INDEX0', description: 'First product custom attribute.' },
                            { s: 'INDEX1', description: 'Second product custom attribute.' },
                            { s: 'INDEX2', description: 'Third product custom attribute.' },
                            { s: 'INDEX3', description: 'Fourth product custom attribute.' },
                            { s: 'INDEX4', description: 'Fifth product custom attribute.' },
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
                unknown_listing_dimension: {
                    _parent_description: 'Unknown dimension. Set when no other listing dimension is set.',
                },
            },
        },
        location: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Location.',
            geo_target_constant: { _description: 'The geo target constant resource name.', _type: 'string' },
        },
        location_group: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Location Group',
            feed: {
                _description:
                    'Feed specifying locations for targeting. This is required and must be set in CREATE operations.',
                _type: 'string',
            },
            geo_target_constants: {
                _description:
                    'Geo target constant(s) restricting the scope of the geographic area within the feed. Currently only one geo target constant is allowed.',
                _type: 'array of strings',
            },
            radius: {
                _description:
                    'Distance in units specifying the radius around targeted locations. This is required and must be set in CREATE operations.',
                _type: 'int64',
            },
            radius_units: {
                _description:
                    'Unit of the radius, miles and meters supported currently. This is required and must be set in CREATE operations.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'METERS', description: 'Meters' },
                    { s: 'MILES', description: 'Miles' },
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
        mobile_device: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Mobile Device.',
            mobile_device_constant: { _description: 'The mobile device constant resource name.', _type: 'string' },
        },
        negative: {
            _description:
                'Immutable. Whether to target (<code>false</code>) or exclude (<code>true</code>) the criterion.',
            _type: 'boolean',
        },
        operating_system_version: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Operating system version.',
            operating_system_version_constant: {
                _description: 'The operating system version constant resource name.',
                _type: 'string',
            },
        },
        parental_status: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Parental status.',
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
        placement: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Placement.',
            url: { _description: 'URL of the placement. For example, "http://www.domain.com".', _type: 'string' },
        },
        proximity: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Proximity.',
            address: {
                _parent_description: 'Full address.',
                city_name: { _description: 'Name of the city.', _type: 'string' },
                country_code: { _description: 'Country code.', _type: 'string' },
                postal_code: { _description: 'Postal code.', _type: 'string' },
                province_code: { _description: 'Province or state code.', _type: 'string' },
                province_name: { _description: 'Province or state name.', _type: 'string' },
                street_address: { _description: 'Street address line 1.', _type: 'string' },
                street_address2: {
                    _description:
                        'Street address line 2. This field is write-only. It is only used for calculating the longitude and latitude of an address when geo_point is empty.',
                    _type: 'string',
                },
            },
            geo_point: {
                _parent_description: 'Latitude and longitude.',
                latitude_in_micro_degrees: { _description: 'Micro degrees for the latitude.', _type: 'int32' },
                longitude_in_micro_degrees: { _description: 'Micro degrees for the longitude.', _type: 'int32' },
            },
            radius: { _description: 'The radius of the proximity.', _type: 'double' },
            radius_units: {
                _description: 'The unit of measurement of the radius. Default is KILOMETERS.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'MILES', description: 'Miles' },
                    { s: 'KILOMETERS', description: 'Kilometers' },
                ],
                _type: 'enum',
            },
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the campaign criterion. Campaign criterion resource names have the form: <code>customers/{customer_id}/campaignCriteria/{campaign_id}~{criterion_id}</code>',
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
                { s: 'ENABLED', description: 'The campaign criterion is enabled.' },
                { s: 'PAUSED', description: 'The campaign criterion is paused.' },
                { s: 'REMOVED', description: 'The campaign criterion is removed.' },
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
        type: {
            _description: 'Output only. The type of the criterion.',
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
            _parent_description: 'Immutable. Webpage.',
            conditions: {
                _parent_description:
                    'Conditions, or logical expressions, for webpage targeting. The list of webpage targeting conditions are and-ed together when evaluated for targeting. This field is required for CREATE operations and is prohibited on UPDATE operations.',
                _type: 'array of objects',
                argument: { _description: 'Argument of webpage targeting condition.', _type: 'string' },
                operand: {
                    _description: 'Operand of webpage targeting condition.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.' },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                        },
                        { s: 'URL', description: 'Operand denoting a webpage URL targeting condition.' },
                        { s: 'CATEGORY', description: 'Operand denoting a webpage category targeting condition.' },
                        { s: 'PAGE_TITLE', description: 'Operand denoting a webpage title targeting condition.' },
                        { s: 'PAGE_CONTENT', description: 'Operand denoting a webpage content targeting condition.' },
                        {
                            s: 'CUSTOM_LABEL',
                            description: 'Operand denoting a webpage custom label targeting condition.',
                        },
                    ],
                    _type: 'enum',
                },
                operator: {
                    _description: 'Operator of webpage targeting condition.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.' },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                        },
                        {
                            s: 'EQUALS',
                            description: 'The argument web condition is equal to the compared web condition.',
                        },
                        {
                            s: 'CONTAINS',
                            description: 'The argument web condition is part of the compared web condition.',
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
