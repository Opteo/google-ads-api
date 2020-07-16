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
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.', index: 1 },
                    { s: 'MONDAY', description: 'Monday.', index: 2 },
                    { s: 'TUESDAY', description: 'Tuesday.', index: 3 },
                    { s: 'WEDNESDAY', description: 'Wednesday.', index: 4 },
                    { s: 'THURSDAY', description: 'Thursday.', index: 5 },
                    { s: 'FRIDAY', description: 'Friday.', index: 6 },
                    { s: 'SATURDAY', description: 'Saturday.', index: 7 },
                    { s: 'SUNDAY', description: 'Sunday.', index: 8 },
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
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.', index: 1 },
                    { s: 'ZERO', description: 'Zero minutes past the hour.', index: 2 },
                    { s: 'FIFTEEN', description: 'Fifteen minutes past the hour.', index: 3 },
                    { s: 'THIRTY', description: 'Thirty minutes past the hour.', index: 4 },
                    { s: 'FORTY_FIVE', description: 'Forty-five minutes past the hour.', index: 5 },
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
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.', index: 1 },
                    { s: 'ZERO', description: 'Zero minutes past the hour.', index: 2 },
                    { s: 'FIFTEEN', description: 'Fifteen minutes past the hour.', index: 3 },
                    { s: 'THIRTY', description: 'Thirty minutes past the hour.', index: 4 },
                    { s: 'FORTY_FIVE', description: 'Forty-five minutes past the hour.', index: 5 },
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
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'SEXUALLY_SUGGESTIVE', description: 'Sexually suggestive content.', index: 2 },
                    { s: 'BELOW_THE_FOLD', description: 'Below the fold placement.', index: 3 },
                    { s: 'PARKED_DOMAIN', description: 'Parked domain.', index: 4 },
                    { s: 'JUVENILE', description: 'Juvenile, gross & bizarre content.', index: 6 },
                    { s: 'PROFANITY', description: 'Profanity & rough language.', index: 7 },
                    { s: 'TRAGEDY', description: 'Death & tragedy.', index: 8 },
                    { s: 'VIDEO', description: 'Video.', index: 9 },
                    { s: 'VIDEO_RATING_DV_G', description: 'Content rating: G.', index: 10 },
                    { s: 'VIDEO_RATING_DV_PG', description: 'Content rating: PG.', index: 11 },
                    { s: 'VIDEO_RATING_DV_T', description: 'Content rating: T.', index: 12 },
                    { s: 'VIDEO_RATING_DV_MA', description: 'Content rating: MA.', index: 13 },
                    { s: 'VIDEO_NOT_YET_RATED', description: 'Content rating: not yet rated.', index: 14 },
                    { s: 'EMBEDDED_VIDEO', description: 'Embedded video.', index: 15 },
                    { s: 'LIVE_STREAMING_VIDEO', description: 'Live streaming video.', index: 16 },
                    { s: 'SOCIAL_ISSUES', description: 'Sensitive social issues.', index: 17 },
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
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.', index: 1 },
                    { s: 'MOBILE', description: 'Mobile devices with full browsers.', index: 2 },
                    { s: 'TABLET', description: 'Tablets with full browsers.', index: 3 },
                    { s: 'DESKTOP', description: 'Computers.', index: 4 },
                    { s: 'CONNECTED_TV', description: 'Smart TVs and game consoles.', index: 6 },
                    { s: 'OTHER', description: 'Other device types.', index: 5 },
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
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'METERS', description: 'Meters', index: 2 },
                    { s: 'MILES', description: 'Miles', index: 3 },
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
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'MILES', description: 'Miles', index: 2 },
                    { s: 'KILOMETERS', description: 'Kilometers', index: 3 },
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
                { s: 'UNSPECIFIED', description: 'No value has been specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'The received value is not known in this version.\n\nThis is a response-only value.',
                    index: 1,
                },
                { s: 'ENABLED', description: 'The campaign criterion is enabled.', index: 2 },
                { s: 'PAUSED', description: 'The campaign criterion is paused.', index: 3 },
                { s: 'REMOVED', description: 'The campaign criterion is removed.', index: 4 },
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
