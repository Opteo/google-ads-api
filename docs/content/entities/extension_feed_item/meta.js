module.exports = {
    name: 'ExtensionFeedItem',
    object: {
        ad_schedules: {
            _parent_description:
                'List of non-overlapping schedules specifying all time intervals for which the feed item may serve. There can be a maximum of 6 schedules per day.',
            _type: 'array of objects',
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
        affiliate_location_feed_item: {
            _oneof: 'extension',
            _parent_description:
                'Output only. Affiliate location extension. Feed locations are populated by Google Ads based on a chain ID. This field is read-only.',
            address_line1: { _description: 'Line 1 of the business address.', _type: 'string' },
            address_line2: { _description: 'Line 2 of the business address.', _type: 'string' },
            business_name: { _description: 'The name of the business.', _type: 'string' },
            chain_id: {
                _description: 'Id of the retail chain that is advertised as a seller of your product.',
                _type: 'int64',
            },
            chain_name: { _description: 'Name of chain.', _type: 'string' },
            city: { _description: 'City of the business address.', _type: 'string' },
            country_code: { _description: 'Country code of the business address.', _type: 'string' },
            phone_number: { _description: 'Phone number of the business.', _type: 'string' },
            postal_code: { _description: 'Postal code of the business address.', _type: 'string' },
            province: { _description: 'Province of the business address.', _type: 'string' },
        },
        app_feed_item: {
            _oneof: 'extension',
            _parent_description: 'App extension.',
            app_id: {
                _description: 'The store-specific ID for the target application. This string must not be empty.',
                _type: 'string',
            },
            app_store: {
                _description: 'The application store that the target application belongs to. This field is required.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'APPLE_ITUNES', description: 'Apple iTunes.', index: 2 },
                    { s: 'GOOGLE_PLAY', description: 'Google Play.', index: 3 },
                ],
                _type: 'enum',
            },
            final_mobile_urls: {
                _description: 'A list of possible final mobile URLs after all cross domain redirects.',
                _type: 'array of strings',
            },
            final_url_suffix: {
                _description: 'URL template for appending params to landing page URLs served with parallel tracking.',
                _type: 'string',
            },
            final_urls: {
                _description:
                    'A list of possible final URLs after all cross domain redirects. This list must not be empty.',
                _type: 'array of strings',
            },
            link_text: {
                _description:
                    'The visible text displayed when the link is rendered in an ad. This string must not be empty, and the length of this string should be between 1 and 25, inclusive.',
                _type: 'string',
            },
            tracking_url_template: {
                _description: 'URL template for constructing a tracking URL. Default value is "{lpurl}".',
                _type: 'string',
            },
            url_custom_parameters: {
                _parent_description:
                    'A list of mappings to be used for substituting URL custom parameter tags in the tracking_url_template, final_urls, and/or final_mobile_urls.',
                _type: 'array of objects',
                key: { _description: 'The key matching the parameter tag name.', _type: 'string' },
                value: { _description: 'The value to be substituted.', _type: 'string' },
            },
        },
        call_feed_item: {
            _oneof: 'extension',
            _parent_description: 'Call extension.',
            call_conversion_action: {
                _description:
                    'The conversion action to attribute a call conversion to. If not set a default conversion action is used. This field only has effect if call_tracking_enabled is set to true. Otherwise this field is ignored.',
                _type: 'string',
            },
            call_conversion_reporting_state: {
                _description:
                    'Enum value that indicates whether this call extension uses its own call conversion setting (or just have call conversion disabled), or following the account level setting.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'DISABLED', description: 'Call conversion action is disabled.', index: 2 },
                    {
                        s: 'USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION',
                        description: 'Call conversion action will use call conversion type set at the\naccount level.',
                        index: 3,
                    },
                    {
                        s: 'USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION',
                        description:
                            'Call conversion action will use call conversion type set at the resource\n(call only ads/call extensions) level.',
                        index: 4,
                    },
                ],
                _type: 'enum',
            },
            call_conversion_tracking_disabled: {
                _description:
                    'If true, disable call conversion tracking. call_conversion_action should not be set if this is true. Optional.',
                _type: 'boolean',
            },
            call_tracking_enabled: {
                _description: 'Indicates whether call tracking is enabled. By default, call tracking is not enabled.',
                _type: 'boolean',
            },
            country_code: {
                _description:
                    "Uppercase two-letter country code of the advertiser's phone number. This string must not be empty.",
                _type: 'string',
            },
            phone_number: {
                _description: "The advertiser's phone number to append to the ad. This string must not be empty.",
                _type: 'string',
            },
        },
        callout_feed_item: {
            _oneof: 'extension',
            _parent_description: 'Callout extension.',
            callout_text: {
                _description: 'The callout text. The length of this string should be between 1 and 25, inclusive.',
                _type: 'string',
            },
        },
        device: {
            _description: 'The targeted device.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'MOBILE', description: 'Mobile.', index: 2 },
            ],
            _type: 'enum',
        },
        end_date_time: {
            _description:
                'End time in which this feed item is no longer effective and will stop serving. The time is in the customer\'s time zone. The format is "YYYY-MM-DD HH:MM:SS". Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30"',
            _type: 'string',
        },
        extension_type: {
            _description: 'Output only. The extension type of the extension feed item. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'NONE', description: 'None.', index: 2 },
                { s: 'APP', description: 'App.', index: 3 },
                { s: 'CALL', description: 'Call.', index: 4 },
                { s: 'CALLOUT', description: 'Callout.', index: 5 },
                { s: 'MESSAGE', description: 'Message.', index: 6 },
                { s: 'PRICE', description: 'Price.', index: 7 },
                { s: 'PROMOTION', description: 'Promotion.', index: 8 },
                { s: 'SITELINK', description: 'Sitelink.', index: 10 },
                { s: 'STRUCTURED_SNIPPET', description: 'Structured snippet.', index: 11 },
                { s: 'LOCATION', description: 'Location.', index: 12 },
                { s: 'AFFILIATE_LOCATION', description: 'Affiliate location.', index: 13 },
                { s: 'HOTEL_CALLOUT', description: 'Hotel callout', index: 15 },
            ],
            _type: 'enum',
        },
        hotel_callout_feed_item: {
            _oneof: 'extension',
            _parent_description: 'Hotel Callout extension.',
            language_code: {
                _description: 'The language of the hotel callout text. IETF BCP 47 compliant language code.',
                _type: 'string',
            },
            text: {
                _description: 'The callout text. The length of this string should be between 1 and 25, inclusive.',
                _type: 'string',
            },
        },
        id: { _description: 'Output only. The ID of this feed item. Read-only.', _type: 'int64' },
        location_feed_item: {
            _oneof: 'extension',
            _parent_description:
                'Output only. Location extension. Locations are synced from a GMB account into a feed. This field is read-only.',
            address_line1: { _description: 'Line 1 of the business address.', _type: 'string' },
            address_line2: { _description: 'Line 2 of the business address.', _type: 'string' },
            business_name: { _description: 'The name of the business.', _type: 'string' },
            city: { _description: 'City of the business address.', _type: 'string' },
            country_code: { _description: 'Country code of the business address.', _type: 'string' },
            phone_number: { _description: 'Phone number of the business.', _type: 'string' },
            postal_code: { _description: 'Postal code of the business address.', _type: 'string' },
            province: { _description: 'Province of the business address.', _type: 'string' },
        },
        price_feed_item: {
            _oneof: 'extension',
            _parent_description: 'Price extension.',
            final_url_suffix: {
                _description: 'URL template for appending params to landing page URLs served with parallel tracking.',
                _type: 'string',
            },
            language_code: { _description: 'The code of the language used for this price extension.', _type: 'string' },
            price_offerings: {
                _parent_description: 'The price offerings in this price extension.',
                _type: 'array of objects',
                description: { _description: 'Description text of this offer.', _type: 'string' },
                final_mobile_urls: {
                    _description: 'A list of possible final mobile URLs after all cross domain redirects.',
                    _type: 'array of strings',
                },
                final_urls: {
                    _description: 'A list of possible final URLs after all cross domain redirects.',
                    _type: 'array of strings',
                },
                header: { _description: 'Header text of this offer.', _type: 'string' },
                price: {
                    _parent_description: 'Price value of this offer.',
                    amount_micros: {
                        _description: 'Amount in micros. One million is equivalent to one unit.',
                        _type: 'int64',
                    },
                    currency_code: { _description: 'Three-character ISO 4217 currency code.', _type: 'string' },
                },
                unit: {
                    _description: 'Price unit for this offer.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                            index: 1,
                        },
                        { s: 'PER_HOUR', description: 'Per hour.', index: 2 },
                        { s: 'PER_DAY', description: 'Per day.', index: 3 },
                        { s: 'PER_WEEK', description: 'Per week.', index: 4 },
                        { s: 'PER_MONTH', description: 'Per month.', index: 5 },
                        { s: 'PER_YEAR', description: 'Per year.', index: 6 },
                        { s: 'PER_NIGHT', description: 'Per night.', index: 7 },
                    ],
                    _type: 'enum',
                },
            },
            price_qualifier: {
                _description: 'Price qualifier for all offers of this price extension.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'FROM', description: "'From' qualifier for the price.", index: 2 },
                    { s: 'UP_TO', description: "'Up to' qualifier for the price.", index: 3 },
                    { s: 'AVERAGE', description: "'Average' qualifier for the price.", index: 4 },
                ],
                _type: 'enum',
            },
            tracking_url_template: {
                _description: 'Tracking URL template for all offers of this price extension.',
                _type: 'string',
            },
            type: {
                _description: 'Price extension type of this extension.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'BRANDS', description: 'The type for showing a list of brands.', index: 2 },
                    { s: 'EVENTS', description: 'The type for showing a list of events.', index: 3 },
                    {
                        s: 'LOCATIONS',
                        description: 'The type for showing locations relevant to your business.',
                        index: 4,
                    },
                    {
                        s: 'NEIGHBORHOODS',
                        description: 'The type for showing sub-regions or districts within a city or region.',
                        index: 5,
                    },
                    {
                        s: 'PRODUCT_CATEGORIES',
                        description: 'The type for showing a collection of product categories.',
                        index: 6,
                    },
                    {
                        s: 'PRODUCT_TIERS',
                        description: 'The type for showing a collection of related product tiers.',
                        index: 7,
                    },
                    {
                        s: 'SERVICES',
                        description: 'The type for showing a collection of services offered by your business.',
                        index: 8,
                    },
                    {
                        s: 'SERVICE_CATEGORIES',
                        description: 'The type for showing a collection of service categories.',
                        index: 9,
                    },
                    {
                        s: 'SERVICE_TIERS',
                        description: 'The type for showing a collection of related service tiers.',
                        index: 10,
                    },
                ],
                _type: 'enum',
            },
        },
        promotion_feed_item: {
            _oneof: 'extension',
            _parent_description: 'Promotion extension.',
            discount_modifier: {
                _description: 'Enum that modifies the qualification of the discount.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'UP_TO', description: "'Up to'.", index: 2 },
                ],
                _type: 'enum',
            },
            final_mobile_urls: {
                _description: 'A list of possible final mobile URLs after all cross domain redirects.',
                _type: 'array of strings',
            },
            final_url_suffix: {
                _description: 'URL template for appending params to landing page URLs served with parallel tracking.',
                _type: 'string',
            },
            final_urls: {
                _description: 'A list of possible final URLs after all cross domain redirects. This field is required.',
                _type: 'array of strings',
            },
            language_code: {
                _description: 'The language of the promotion. Represented as BCP 47 language tag.',
                _type: 'string',
            },
            money_amount_off: {
                _parent_description:
                    'Money amount off for discount in the promotion. Either this or percent_off is required.',
                amount_micros: {
                    _description: 'Amount in micros. One million is equivalent to one unit.',
                    _type: 'int64',
                },
                currency_code: { _description: 'Three-character ISO 4217 currency code.', _type: 'string' },
            },
            occasion: {
                _description:
                    'The occasion the promotion was intended for. If an occasion is set, the redemption window will need to fall within the date range associated with the occasion.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'NEW_YEARS', description: "New Year's.", index: 2 },
                    { s: 'CHINESE_NEW_YEAR', description: 'Chinese New Year.', index: 3 },
                    { s: 'VALENTINES_DAY', description: "Valentine's Day.", index: 4 },
                    { s: 'EASTER', description: 'Easter.', index: 5 },
                    { s: 'MOTHERS_DAY', description: "Mother's Day.", index: 6 },
                    { s: 'FATHERS_DAY', description: "Father's Day.", index: 7 },
                    { s: 'LABOR_DAY', description: 'Labor Day.', index: 8 },
                    { s: 'BACK_TO_SCHOOL', description: 'Back To School.', index: 9 },
                    { s: 'HALLOWEEN', description: 'Halloween.', index: 10 },
                    { s: 'BLACK_FRIDAY', description: 'Black Friday.', index: 11 },
                    { s: 'CYBER_MONDAY', description: 'Cyber Monday.', index: 12 },
                    { s: 'CHRISTMAS', description: 'Christmas.', index: 13 },
                    { s: 'BOXING_DAY', description: 'Boxing Day.', index: 14 },
                    { s: 'INDEPENDENCE_DAY', description: 'Independence Day in any country.', index: 15 },
                    { s: 'NATIONAL_DAY', description: 'National Day in any country.', index: 16 },
                    { s: 'END_OF_SEASON', description: 'End of any season.', index: 17 },
                    { s: 'WINTER_SALE', description: 'Winter Sale.', index: 18 },
                    { s: 'SUMMER_SALE', description: 'Summer sale.', index: 19 },
                    { s: 'FALL_SALE', description: 'Fall Sale.', index: 20 },
                    { s: 'SPRING_SALE', description: 'Spring Sale.', index: 21 },
                    { s: 'RAMADAN', description: 'Ramadan.', index: 22 },
                    { s: 'EID_AL_FITR', description: 'Eid al-Fitr.', index: 23 },
                    { s: 'EID_AL_ADHA', description: 'Eid al-Adha.', index: 24 },
                    { s: 'SINGLES_DAY', description: 'Singles Day.', index: 25 },
                    { s: 'WOMENS_DAY', description: "Women's Day.", index: 26 },
                    { s: 'HOLI', description: 'Holi.', index: 27 },
                    { s: 'PARENTS_DAY', description: "Parent's Day.", index: 28 },
                    { s: 'ST_NICHOLAS_DAY', description: 'St. Nicholas Day.', index: 29 },
                    { s: 'CARNIVAL', description: 'Carnival.', index: 30 },
                    { s: 'EPIPHANY', description: "Epiphany, also known as Three Kings' Day.", index: 31 },
                    { s: 'ROSH_HASHANAH', description: 'Rosh Hashanah.', index: 32 },
                    { s: 'PASSOVER', description: 'Passover.', index: 33 },
                    { s: 'HANUKKAH', description: 'Hanukkah.', index: 34 },
                    { s: 'DIWALI', description: 'Diwali.', index: 35 },
                    { s: 'NAVRATRI', description: 'Navratri.', index: 36 },
                    { s: 'SONGKRAN', description: 'Available in Thai: Songkran.', index: 37 },
                    { s: 'YEAR_END_GIFT', description: 'Available in Japanese: Year-end Gift.', index: 38 },
                ],
                _type: 'enum',
            },
            orders_over_amount: {
                _parent_description:
                    'The amount the total order needs to be for the user to be eligible for the promotion.',
                amount_micros: {
                    _description: 'Amount in micros. One million is equivalent to one unit.',
                    _type: 'int64',
                },
                currency_code: { _description: 'Three-character ISO 4217 currency code.', _type: 'string' },
            },
            percent_off: {
                _description:
                    'Percentage off discount in the promotion in micros. One million is equivalent to one percent. Either this or money_off_amount is required.',
                _type: 'int64',
            },
            promotion_code: {
                _description: 'A code the user should use in order to be eligible for the promotion.',
                _type: 'string',
            },
            promotion_end_date: {
                _description: 'End date of when the promotion is eligible to be redeemed.',
                _type: 'string',
            },
            promotion_start_date: {
                _description: 'Start date of when the promotion is eligible to be redeemed.',
                _type: 'string',
            },
            promotion_target: {
                _description: 'A freeform description of what the promotion is targeting. This field is required.',
                _type: 'string',
            },
            tracking_url_template: { _description: 'URL template for constructing a tracking URL.', _type: 'string' },
            url_custom_parameters: {
                _parent_description:
                    'A list of mappings to be used for substituting URL custom parameter tags in the tracking_url_template, final_urls, and/or final_mobile_urls.',
                _type: 'array of objects',
                key: { _description: 'The key matching the parameter tag name.', _type: 'string' },
                value: { _description: 'The value to be substituted.', _type: 'string' },
            },
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the extension feed item. Extension feed item resource names have the form: <code>customers/{customer_id}/extensionFeedItems/{feed_item_id}</code>',
            _type: 'string',
        },
        sitelink_feed_item: {
            _oneof: 'extension',
            _parent_description: 'Sitelink extension.',
            final_mobile_urls: {
                _description: 'A list of possible final mobile URLs after all cross domain redirects.',
                _type: 'array of strings',
            },
            final_url_suffix: {
                _description: 'Final URL suffix to be appended to landing page URLs served with parallel tracking.',
                _type: 'string',
            },
            final_urls: {
                _description: 'A list of possible final URLs after all cross domain redirects.',
                _type: 'array of strings',
            },
            line1: {
                _description:
                    'First line of the description for the sitelink. If this value is set, line2 must also be set. The length of this string should be between 0 and 35, inclusive.',
                _type: 'string',
            },
            line2: {
                _description:
                    'Second line of the description for the sitelink. If this value is set, line1 must also be set. The length of this string should be between 0 and 35, inclusive.',
                _type: 'string',
            },
            link_text: {
                _description:
                    'URL display text for the sitelink. The length of this string should be between 1 and 25, inclusive.',
                _type: 'string',
            },
            tracking_url_template: { _description: 'URL template for constructing a tracking URL.', _type: 'string' },
            url_custom_parameters: {
                _parent_description:
                    'A list of mappings to be used for substituting URL custom parameter tags in the tracking_url_template, final_urls, and/or final_mobile_urls.',
                _type: 'array of objects',
                key: { _description: 'The key matching the parameter tag name.', _type: 'string' },
                value: { _description: 'The value to be substituted.', _type: 'string' },
            },
        },
        start_date_time: {
            _description:
                'Start time in which this feed item is effective and can begin serving. The time is in the customer\'s time zone. The format is "YYYY-MM-DD HH:MM:SS". Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30"',
            _type: 'string',
        },
        status: {
            _description: 'Output only. Status of the feed item. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'ENABLED', description: 'Feed item is enabled.', index: 2 },
                { s: 'REMOVED', description: 'Feed item has been removed.', index: 3 },
            ],
            _type: 'enum',
        },
        structured_snippet_feed_item: {
            _oneof: 'extension',
            _parent_description: 'Structured snippet extension.',
            header: { _description: 'The header of the snippet. This string must not be empty.', _type: 'string' },
            values: {
                _description: 'The values in the snippet. The maximum size of this collection is 10.',
                _type: 'array of strings',
            },
        },
        targeted_ad_group: {
            _description: 'The targeted ad group.',
            _oneof: 'servingResourceTargeting',
            _type: 'string',
        },
        targeted_campaign: {
            _description: 'The targeted campaign.',
            _oneof: 'servingResourceTargeting',
            _type: 'string',
        },
        targeted_geo_target_constant: { _description: 'The targeted geo target constant.', _type: 'string' },
        targeted_keyword: {
            _parent_description: 'The targeted keyword.',
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
        text_message_feed_item: {
            _oneof: 'extension',
            _parent_description: 'Text message extension.',
            business_name: {
                _description: 'The business name to prepend to the message text. This field is required.',
                _type: 'string',
            },
            country_code: {
                _description:
                    "Uppercase two-letter country code of the advertiser's phone number. This field is required.",
                _type: 'string',
            },
            extension_text: { _description: 'The message text populated in the messaging app.', _type: 'string' },
            phone_number: {
                _description: "The advertiser's phone number the message will be sent to. Required.",
                _type: 'string',
            },
            text: { _description: 'The text to show in the ad. This field is required.', _type: 'string' },
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
