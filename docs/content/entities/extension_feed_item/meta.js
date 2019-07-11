module.exports = {
    name: 'ExtensionFeedItem',
    object: {
        ad_schedules: {
            _description:
                'List of non-overlapping schedules specifying all time intervals for which the feed item may serve. There can be a maximum of 6 schedules per day.',
            _type: 'array',
        },
        affiliate_location_feed_item: {
            _oneof: 'extension',
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
            app_id: {
                _description: 'The store-specific ID for the target application. This string must not be empty.',
                _type: 'string',
            },
            app_store: {
                _description: 'The application store that the target application belongs to. This field is required.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'APPLE_ITUNES', description: 'Apple iTunes.' },
                    { s: 'GOOGLE_PLAY', description: 'Google Play.' },
                ],
                _type: 'enum',
            },
            final_mobile_urls: {
                _description: 'A list of possible final mobile URLs after all cross domain redirects.',
                _type: 'array',
            },
            final_url_suffix: {
                _description: 'URL template for appending params to landing page URLs served with parallel tracking.',
                _type: 'string',
            },
            final_urls: {
                _description:
                    'A list of possible final URLs after all cross domain redirects. This list must not be empty.',
                _type: 'array',
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
                _description:
                    'A list of mappings to be used for substituting URL custom parameter tags in the tracking_url_template, final_urls, and/or final_mobile_urls.',
                _type: 'array',
            },
        },
        call_feed_item: {
            _oneof: 'extension',
            call_conversion_action: {
                _description:
                    'The conversion action to attribute a call conversion to. If not set a default conversion action is used. This field only has effect if call_tracking_enabled is set to true. Otherwise this field is ignored.',
                _type: 'string',
            },
            call_conversion_reporting_state: {
                _description:
                    'Enum value that indicates whether this call extension uses its own call conversion setting (or just have call conversion disabled), or following the account level setting.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'DISABLED', description: 'Call conversion action is disabled.' },
                    {
                        s: 'USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION',
                        description: 'Call conversion action will use call conversion type set at the\naccount level.',
                    },
                    {
                        s: 'USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION',
                        description:
                            'Call conversion action will use call conversion type set at the resource\n(call only ads/call extensions) level.',
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
            callout_text: {
                _description: 'The callout text. The length of this string should be between 1 and 25, inclusive.',
                _type: 'string',
            },
        },
        device: {
            _description: 'The targeted device.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'MOBILE', description: 'Mobile.' },
            ],
            _type: 'enum',
        },
        end_date_time: {
            _description:
                'End time in which this feed item is no longer effective and will stop serving. The time is in the customer\'s time zone. The format is "YYYY-MM-DD HH:MM:SS". Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30"',
            _type: 'string',
        },
        extension_type: {
            _description: 'The extension type of the extension feed item. This field is read-only.',
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
                { s: 'SITELINK', description: 'Sitelink.' },
                { s: 'STRUCTURED_SNIPPET', description: 'Structured snippet.' },
                { s: 'LOCATION', description: 'Location.' },
                { s: 'AFFILIATE_LOCATION', description: 'Affiliate location.' },
            ],
            _type: 'enum',
        },
        location_feed_item: {
            _oneof: 'extension',
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
            final_url_suffix: {
                _description: 'URL template for appending params to landing page URLs served with parallel tracking.',
                _type: 'string',
            },
            language_code: { _description: 'The code of the language used for this price extension.', _type: 'string' },
            price_offerings: { _description: 'The price offerings in this price extension.', _type: 'array' },
            price_qualifier: {
                _description: 'Price qualifier for all offers of this price extension.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'FROM', description: "'From' qualifier for the price." },
                    { s: 'UP_TO', description: "'Up to' qualifier for the price." },
                    { s: 'AVERAGE', description: "'Average' qualifier for the price." },
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
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'BRANDS', description: 'The type for showing a list of brands.' },
                    { s: 'EVENTS', description: 'The type for showing a list of events.' },
                    { s: 'LOCATIONS', description: 'The type for showing locations relevant to your business.' },
                    {
                        s: 'NEIGHBORHOODS',
                        description: 'The type for showing sub-regions or districts within a city or region.',
                    },
                    {
                        s: 'PRODUCT_CATEGORIES',
                        description: 'The type for showing a collection of product categories.',
                    },
                    { s: 'PRODUCT_TIERS', description: 'The type for showing a collection of related product tiers.' },
                    {
                        s: 'SERVICES',
                        description: 'The type for showing a collection of services offered by your business.',
                    },
                    {
                        s: 'SERVICE_CATEGORIES',
                        description: 'The type for showing a collection of service categories.',
                    },
                    { s: 'SERVICE_TIERS', description: 'The type for showing a collection of related service tiers.' },
                ],
                _type: 'enum',
            },
        },
        promotion_feed_item: {
            _oneof: 'extension',
            discount_modifier: {
                _description: 'Enum that modifies the qualification of the discount.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'UP_TO', description: "'Up to'." },
                ],
                _type: 'enum',
            },
            final_mobile_urls: {
                _description: 'A list of possible final mobile URLs after all cross domain redirects.',
                _type: 'array',
            },
            final_url_suffix: {
                _description: 'URL template for appending params to landing page URLs served with parallel tracking.',
                _type: 'string',
            },
            final_urls: {
                _description: 'A list of possible final URLs after all cross domain redirects. This field is required.',
                _type: 'array',
            },
            language_code: {
                _description: 'The language of the promotion. Represented as BCP 47 language tag.',
                _type: 'string',
            },
            money_amount_off: {
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
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'NEW_YEARS', description: "New Year's." },
                    { s: 'CHINESE_NEW_YEAR', description: 'Chinese New Year.' },
                    { s: 'VALENTINES_DAY', description: "Valentine's Day." },
                    { s: 'EASTER', description: 'Easter.' },
                    { s: 'MOTHERS_DAY', description: "Mother's Day." },
                    { s: 'FATHERS_DAY', description: "Father's Day." },
                    { s: 'LABOR_DAY', description: 'Labor Day.' },
                    { s: 'BACK_TO_SCHOOL', description: 'Back To School.' },
                    { s: 'HALLOWEEN', description: 'Halloween.' },
                    { s: 'BLACK_FRIDAY', description: 'Black Friday.' },
                    { s: 'CYBER_MONDAY', description: 'Cyber Monday.' },
                    { s: 'CHRISTMAS', description: 'Christmas.' },
                    { s: 'BOXING_DAY', description: 'Boxing Day.' },
                    { s: 'INDEPENDENCE_DAY', description: 'Independence Day in any country.' },
                    { s: 'NATIONAL_DAY', description: 'National Day in any country.' },
                    { s: 'END_OF_SEASON', description: 'End of any season.' },
                    { s: 'WINTER_SALE', description: 'Winter Sale.' },
                    { s: 'SUMMER_SALE', description: 'Summer sale.' },
                    { s: 'FALL_SALE', description: 'Fall Sale.' },
                    { s: 'SPRING_SALE', description: 'Spring Sale.' },
                    { s: 'RAMADAN', description: 'Ramadan.' },
                    { s: 'EID_AL_FITR', description: 'Eid al-Fitr.' },
                    { s: 'EID_AL_ADHA', description: 'Eid al-Adha.' },
                    { s: 'SINGLES_DAY', description: 'Singles Day.' },
                    { s: 'WOMENS_DAY', description: "Women's Day." },
                    { s: 'HOLI', description: 'Holi.' },
                    { s: 'PARENTS_DAY', description: "Parent's Day." },
                    { s: 'ST_NICHOLAS_DAY', description: 'St. Nicholas Day.' },
                    { s: 'CARNIVAL', description: 'Carnival.' },
                    { s: 'EPIPHANY', description: "Epiphany, also known as Three Kings' Day." },
                    { s: 'ROSH_HASHANAH', description: 'Rosh Hashanah.' },
                    { s: 'PASSOVER', description: 'Passover.' },
                    { s: 'HANUKKAH', description: 'Hanukkah.' },
                    { s: 'DIWALI', description: 'Diwali.' },
                    { s: 'NAVRATRI', description: 'Navratri.' },
                    { s: 'SONGKRAN', description: 'Available in Thai: Songkran.' },
                    { s: 'YEAR_END_GIFT', description: 'Available in Japanese: Year-end Gift.' },
                ],
                _type: 'enum',
            },
            orders_over_amount: {
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
                _description:
                    'A list of mappings to be used for substituting URL custom parameter tags in the tracking_url_template, final_urls, and/or final_mobile_urls.',
                _type: 'array',
            },
        },
        resource_name: {
            _description:
                'The resource name of the extension feed item. Extension feed item resource names have the form: <code>customers/{customer_id}/extensionFeedItems/{feed_item_id}</code>',
            _type: 'string',
        },
        sitelink_feed_item: {
            _oneof: 'extension',
            final_mobile_urls: {
                _description: 'A list of possible final mobile URLs after all cross domain redirects.',
                _type: 'array',
            },
            final_url_suffix: {
                _description: 'Final URL suffix to be appended to landing page URLs served with parallel tracking.',
                _type: 'string',
            },
            final_urls: {
                _description: 'A list of possible final URLs after all cross domain redirects.',
                _type: 'array',
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
                _description:
                    'A list of mappings to be used for substituting URL custom parameter tags in the tracking_url_template, final_urls, and/or final_mobile_urls.',
                _type: 'array',
            },
        },
        start_date_time: {
            _description:
                'Start time in which this feed item is effective and can begin serving. The time is in the customer\'s time zone. The format is "YYYY-MM-DD HH:MM:SS". Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30"',
            _type: 'string',
        },
        status: {
            _description: 'Status of the feed item. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'Feed item is enabled.' },
                { s: 'REMOVED', description: 'Feed item has been removed.' },
            ],
            _type: 'enum',
        },
        structured_snippet_feed_item: {
            _oneof: 'extension',
            header: { _description: 'The header of the snippet. This string must not be empty.', _type: 'string' },
            values: {
                _description: 'The values in the snippet. The maximum size of this collection is 10.',
                _type: 'array',
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
        text_message_feed_item: {
            _oneof: 'extension',
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
