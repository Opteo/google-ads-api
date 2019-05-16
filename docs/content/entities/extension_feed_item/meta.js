module.exports = {
    name: 'ExtensionFeedItem',
    object: {
        structured_snippet_feed_item: {
            header: { _type: 'string', _description: 'The header of the snippet. This string must not be empty.' },
            values: {
                _type: 'array',
                _description: 'The values in the snippet. The maximum size of this collection is 10.',
            },
            _oneof: 'extension',
        },
        sitelink_feed_item: {
            line2: {
                _type: 'string',
                _description:
                    'Second line of the description for the sitelink. If this value is set, line1 must also be set. The length of this string should be between 0 and 35, inclusive.',
            },
            link_text: {
                _type: 'string',
                _description:
                    'URL display text for the sitelink. The length of this string should be between 1 and 25, inclusive.',
            },
            final_mobile_urls: {
                _type: 'array',
                _description: 'A list of possible final mobile URLs after all cross domain redirects.',
            },
            tracking_url_template: { _type: 'string', _description: 'URL template for constructing a tracking URL.' },
            line1: {
                _type: 'string',
                _description:
                    'First line of the description for the sitelink. If this value is set, line2 must also be set. The length of this string should be between 0 and 35, inclusive.',
            },
            final_urls: {
                _type: 'array',
                _description: 'A list of possible final URLs after all cross domain redirects.',
            },
            url_custom_parameters: {
                _type: 'array',
                _description:
                    'A list of mappings to be used for substituting URL custom parameter tags in the tracking_url_template, final_urls, and/or final_mobile_urls.',
            },
            final_url_suffix: {
                _type: 'string',
                _description: 'Final URL suffix to be appended to landing page URLs served with parallel tracking.',
            },
            _oneof: 'extension',
        },
        extension_type: {
            _type: 'enum',
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
                { s: 'REVIEW', description: 'Review.' },
                { s: 'SITELINK', description: 'Sitelink.' },
                { s: 'STRUCTURED_SNIPPET', description: 'Structured snippet.' },
            ],
            _description: 'The extension type of the extension feed item. This field is read-only.',
        },
        callout_feed_item: {
            callout_text: {
                _type: 'string',
                _description: 'The callout text. The length of this string should be between 1 and 25, inclusive.',
            },
            _oneof: 'extension',
        },
        call_feed_item: {
            call_conversion_reporting_state: {
                _type: 'enum',
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
                _description:
                    'Enum value that indicates whether this call extension uses its own call conversion setting (or just have call conversion disabled), or following the account level setting.',
            },
            phone_number: {
                _type: 'string',
                _description: "The advertiser's phone number to append to the ad. This string must not be empty.",
            },
            call_conversion_action: {
                _type: 'string',
                _description:
                    'The conversion action to attribute a call conversion to. If not set a default conversion action is used. This field only has effect if call_tracking_enabled is set to true. Otherwise this field is ignored.',
            },
            country_code: {
                _type: 'string',
                _description:
                    "Uppercase two-letter country code of the advertiser's phone number. This string must not be empty.",
            },
            call_tracking_enabled: {
                _type: 'boolean',
                _description: 'Indicates whether call tracking is enabled. By default, call tracking is not enabled.',
            },
            call_conversion_tracking_disabled: {
                _type: 'boolean',
                _description:
                    'If true, disable call conversion tracking. call_conversion_action should not be set if this is true. Optional.',
            },
            _oneof: 'extension',
        },
        status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'Feed item is enabled.' },
                { s: 'REMOVED', description: 'Feed item has been removed.' },
            ],
            _description: 'Status of the feed item. This field is read-only.',
        },
        start_date_time: {
            _type: 'string',
            _description:
                'Start time in which this feed item is effective and can begin serving. The format is "YYYY-MM-DD HH:MM:SS". Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30"',
        },
        price_feed_item: {
            type: {
                _type: 'enum',
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
                _description: 'Price extension type of this extension.',
            },
            price_qualifier: {
                _type: 'enum',
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
                _description: 'Price qualifier for all offers of this price extension.',
            },
            price_offerings: { _type: 'array', _description: 'The price offerings in this price extension.' },
            final_url_suffix: {
                _type: 'string',
                _description: 'URL template for appending params to landing page URLs served with parallel tracking.',
            },
            tracking_url_template: {
                _type: 'string',
                _description: 'Tracking URL template for all offers of this price extension.',
            },
            language_code: { _type: 'string', _description: 'The code of the language used for this price extension.' },
            _oneof: 'extension',
        },
        end_date_time: {
            _type: 'string',
            _description:
                'End time in which this feed item is no longer effective and will stop serving. The format is "YYYY-MM-DD HH:MM:SS". Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30"',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the extension feed item. Extension feed item resource names have the form: <code>customers/{customer_id}/extensionFeedItems/{feed_item_id}</code>',
        },
        app_feed_item: {
            app_id: {
                _type: 'string',
                _description: 'The store-specific ID for the target application. This string must not be empty.',
            },
            final_urls: {
                _type: 'array',
                _description: 'A list of possible final URLs after all cross domain redirects.',
            },
            url_custom_parameters: {
                _type: 'array',
                _description:
                    'A list of mappings to be used for substituting URL custom parameter tags in the tracking_url_template, final_urls, and/or final_mobile_urls.',
            },
            final_url_suffix: {
                _type: 'string',
                _description: 'URL template for appending params to landing page URLs served with parallel tracking.',
            },
            app_store: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'APPLE_ITUNES', description: 'Apple iTunes.' },
                    { s: 'GOOGLE_PLAY', description: 'Google Play.' },
                ],
                _description: 'The application store that the target application belongs to.',
            },
            final_mobile_urls: {
                _type: 'array',
                _description: 'A list of possible final mobile URLs after all cross domain redirects.',
            },
            link_text: {
                _type: 'string',
                _description:
                    'The visible text displayed when the link is rendered in an ad. The length of this string should be between 1 and 25, inclusive.',
            },
            tracking_url_template: {
                _type: 'string',
                _description: 'URL template for constructing a tracking URL. Default value is "{lpurl}".',
            },
            _oneof: 'extension',
        },
        promotion_feed_item: {
            language_code: {
                _type: 'string',
                _description: 'The language of the promotion. Represented as BCP 47 language tag.',
            },
            discount_modifier: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'UP_TO', description: "'Up to'." },
                ],
                _description: 'Enum that modifies the qualification of the discount.',
            },
            percent_off: {
                _type: 'int64',
                _description:
                    'Percentage off discount in the promotion in micros. One million is equivalent to one percent. Either this or money_off_amount is required.',
            },
            final_urls: {
                _type: 'array',
                _description: 'A list of possible final URLs after all cross domain redirects. This field is required.',
            },
            url_custom_parameters: {
                _type: 'array',
                _description:
                    'A list of mappings to be used for substituting URL custom parameter tags in the tracking_url_template, final_urls, and/or final_mobile_urls.',
            },
            promotion_end_date: {
                _type: 'string',
                _description:
                    'End date of when the promotion is eligible to be redeemed. This field is currently mutate only.',
            },
            final_url_suffix: {
                _type: 'string',
                _description: 'URL template for appending params to landing page URLs served with parallel tracking.',
            },
            occasion: {
                _type: 'enum',
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
                _description:
                    'The occasion the promotion was intended for. If an occasion is set, the redemption window will need to fall within the date range associated with the occasion.',
            },
            tracking_url_template: { _type: 'string', _description: 'URL template for constructing a tracking URL.' },
            money_amount_off: {
                currency_code: { _type: 'string', _description: 'Three-character ISO 4217 currency code.' },
                amount_micros: {
                    _type: 'int64',
                    _description: 'Amount in micros. One million is equivalent to one unit.',
                },
            },
            promotion_code: {
                _type: 'string',
                _description: 'A code the user should use in order to be eligible for the promotion.',
            },
            promotion_target: {
                _type: 'string',
                _description: 'A freeform description of what the promotion is targeting. This field is required.',
            },
            promotion_start_date: {
                _type: 'string',
                _description:
                    'Start date of when the promotion is eligible to be redeemed. This field is currently mutate only.',
            },
            orders_over_amount: {
                currency_code: { _type: 'string', _description: 'Three-character ISO 4217 currency code.' },
                amount_micros: {
                    _type: 'int64',
                    _description: 'Amount in micros. One million is equivalent to one unit.',
                },
            },
            final_mobile_urls: {
                _type: 'array',
                _description: 'A list of possible final mobile URLs after all cross domain redirects.',
            },
            _oneof: 'extension',
        },
        text_message_feed_item: {
            extension_text: { _type: 'string', _description: 'The message text populated in the messaging app.' },
            text: { _type: 'string', _description: 'The text to show in the ad. This field is required.' },
            phone_number: {
                _type: 'string',
                _description: "The advertiser's phone number the message will be sent to. Required.",
            },
            business_name: {
                _type: 'string',
                _description: 'The business name to prepend to the message text. This field is required.',
            },
            country_code: {
                _type: 'string',
                _description:
                    "Uppercase two-letter country code of the advertiser's phone number. This field is required.",
            },
            _oneof: 'extension',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
