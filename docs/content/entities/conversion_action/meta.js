module.exports = {
    name: 'ConversionAction',
    object: {
        app_id: { _description: 'App ID for an app conversion action.', _type: 'string' },
        attribution_model_settings: {
            _parent_description: "Settings related to this conversion action's attribution model.",
            attribution_model: {
                _description: 'The attribution model type of this conversion action.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'EXTERNAL', description: 'Uses external attribution.', index: 100 },
                    {
                        s: 'GOOGLE_ADS_LAST_CLICK',
                        description: 'Attributes all credit for a conversion to its last click.',
                        index: 101,
                    },
                    {
                        s: 'GOOGLE_SEARCH_ATTRIBUTION_FIRST_CLICK',
                        description:
                            'Attributes all credit for a conversion to its first click using Google\nSearch attribution.',
                        index: 102,
                    },
                    {
                        s: 'GOOGLE_SEARCH_ATTRIBUTION_LINEAR',
                        description:
                            'Attributes credit for a conversion equally across all of its clicks using\nGoogle Search attribution.',
                        index: 103,
                    },
                    {
                        s: 'GOOGLE_SEARCH_ATTRIBUTION_TIME_DECAY',
                        description:
                            'Attributes exponentially more credit for a conversion to its more recent\nclicks using Google Search attribution (half-life is 1 week).',
                        index: 104,
                    },
                    {
                        s: 'GOOGLE_SEARCH_ATTRIBUTION_POSITION_BASED',
                        description:
                            'Attributes 40% of the credit for a conversion to its first and last\nclicks. Remaining 20% is evenly distributed across all other clicks. This\nuses Google Search attribution.',
                        index: 105,
                    },
                    {
                        s: 'GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN',
                        description:
                            'Flexible model that uses machine learning to determine the appropriate\ndistribution of credit among clicks using Google Search attribution.',
                        index: 106,
                    },
                ],
                _type: 'enum',
            },
            data_driven_model_status: {
                _description: 'Output only. The status of the data-driven attribution model for the conversion action.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'AVAILABLE', description: 'The data driven model is available.', index: 2 },
                    {
                        s: 'STALE',
                        description:
                            "The data driven model is stale. It hasn't been updated for at least 7\ndays. It is still being used, but will become expired if it does not get\nupdated for 30 days.",
                        index: 3,
                    },
                    {
                        s: 'EXPIRED',
                        description:
                            "The data driven model expired. It hasn't been updated for at least 30\ndays and cannot be used. Most commonly this is because there hasn't been\nthe required number of events in a recent 30-day period.",
                        index: 4,
                    },
                    {
                        s: 'NEVER_GENERATED',
                        description:
                            'The data driven model has never been generated. Most commonly this is\nbecause there has never been the required number of events in any 30-day\nperiod.',
                        index: 5,
                    },
                ],
                _type: 'enum',
            },
        },
        category: {
            _description: 'The category of conversions reported for this conversion action.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'DEFAULT', description: 'Default category.', index: 2 },
                { s: 'PAGE_VIEW', description: 'User visiting a page.', index: 3 },
                { s: 'PURCHASE', description: 'Purchase, sales, or "order placed" event.', index: 4 },
                { s: 'SIGNUP', description: 'Signup user action.', index: 5 },
                { s: 'LEAD', description: 'Lead-generating action.', index: 6 },
                { s: 'DOWNLOAD', description: 'Software download action (as for an app).', index: 7 },
                {
                    s: 'ADD_TO_CART',
                    description: 'The addition of items to a shopping cart or bag on an advertiser site.',
                    index: 8,
                },
                {
                    s: 'BEGIN_CHECKOUT',
                    description: 'When someone enters the checkout flow on an advertiser site.',
                    index: 9,
                },
                {
                    s: 'SUBSCRIBE_PAID',
                    description: 'The start of a paid subscription for a product or service.',
                    index: 10,
                },
                {
                    s: 'PHONE_CALL_LEAD',
                    description: "A call to indicate interest in an advertiser's offering.",
                    index: 11,
                },
                {
                    s: 'IMPORTED_LEAD',
                    description: 'A lead conversion imported from an external source into Google Ads.',
                    index: 12,
                },
                {
                    s: 'SUBMIT_LEAD_FORM',
                    description: 'A submission of a form on an advertiser site indicating business\ninterest.',
                    index: 13,
                },
                {
                    s: 'BOOK_APPOINTMENT',
                    description: "A booking of an appointment with an advertiser's business.",
                    index: 14,
                },
                { s: 'REQUEST_QUOTE', description: 'A quote or price estimate request.', index: 15 },
                {
                    s: 'GET_DIRECTIONS',
                    description: "A search for an advertiser's business location with intention to visit.",
                    index: 16,
                },
                { s: 'OUTBOUND_CLICK', description: "A click to an advertiser's partner's site.", index: 17 },
                {
                    s: 'CONTACT',
                    description: 'A call, SMS, email, chat or other type of contact to an advertiser.',
                    index: 18,
                },
                {
                    s: 'ENGAGEMENT',
                    description:
                        'A website engagement event such as long site time or a Google Analytics\n(GA) Smart Goal. Intended to be used for GA, Firebase, GA Gold goal\nimports.',
                    index: 19,
                },
                { s: 'STORE_VISIT', description: 'A visit to a physical store location.', index: 20 },
                { s: 'STORE_SALE', description: 'A sale occurring in a physical store.', index: 21 },
            ],
            _type: 'enum',
        },
        click_through_lookback_window_days: {
            _description:
                'The maximum number of days that may elapse between an interaction (e.g., a click) and a conversion event.',
            _type: 'int64',
        },
        counting_type: {
            _description: 'How to count conversion events for the conversion action.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'ONE_PER_CLICK', description: 'Count only one conversion per click.', index: 2 },
                { s: 'MANY_PER_CLICK', description: 'Count all conversions per click.', index: 3 },
            ],
            _type: 'enum',
        },
        firebase_settings: {
            _parent_description: 'Output only. Firebase settings for Firebase conversion types.',
            event_name: { _description: 'Output only. The event name of a Firebase conversion.', _type: 'string' },
            project_id: { _description: 'Output only. The Firebase project ID of the conversion.', _type: 'string' },
        },
        id: { _description: 'Output only. The ID of the conversion action.', _type: 'int64' },
        include_in_conversions_metric: {
            _description: 'Whether this conversion action should be included in the "conversions" metric.',
            _type: 'boolean',
        },
        mobile_app_vendor: {
            _description: 'Output only. Mobile app vendor for an app conversion action.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'APPLE_APP_STORE', description: 'Mobile app vendor for Apple app store.', index: 2 },
                { s: 'GOOGLE_APP_STORE', description: 'Mobile app vendor for Google app store.', index: 3 },
            ],
            _type: 'enum',
        },
        name: {
            _description:
                'The name of the conversion action. This field is required and should not be empty when creating new conversion actions.',
            _type: 'string',
        },
        owner_customer: {
            _description:
                'Output only. The resource name of the conversion action owner customer, or null if this is a system-defined conversion action.',
            _type: 'string',
        },
        phone_call_duration_seconds: {
            _description:
                'The phone call duration in seconds after which a conversion should be reported for this conversion action. The value must be between 0 and 10000, inclusive.',
            _type: 'int64',
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the conversion action. Conversion action resource names have the form: <code>customers/{customer_id}/conversionActions/{conversion_action_id}</code>',
            _type: 'string',
        },
        status: {
            _description: 'The status of this conversion action for conversion event accrual.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'ENABLED', description: 'Conversions will be recorded.', index: 2 },
                { s: 'REMOVED', description: 'Conversions will not be recorded.', index: 3 },
                {
                    s: 'HIDDEN',
                    description:
                        'Conversions will not be recorded and the conversion action will not\nappear in the UI.',
                    index: 4,
                },
            ],
            _type: 'enum',
        },
        tag_snippets: {
            _parent_description: 'Output only. The snippets used for tracking conversions.',
            _type: 'array of objects',
            event_snippet: {
                _description:
                    'The event snippet that works with the site tag to track actions that should be counted as conversions.',
                _type: 'string',
            },
            global_site_tag: {
                _description:
                    'The site tag that adds visitors to your basic remarketing lists and sets new cookies on your domain.',
                _type: 'string',
            },
            page_format: {
                _description:
                    'The format of the web page where the tracking tag and snippet will be installed, e.g. HTML.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'HTML', description: 'Standard HTML page format.', index: 2 },
                    { s: 'AMP', description: 'Google AMP page format.', index: 3 },
                ],
                _type: 'enum',
            },
            type: {
                _description: 'The type of the generated tag snippets for tracking conversions.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    {
                        s: 'WEBPAGE',
                        description: 'The snippet that is fired as a result of a website page loading.',
                        index: 2,
                    },
                    {
                        s: 'WEBPAGE_ONCLICK',
                        description:
                            'The snippet contains a JavaScript function which fires the tag. This\nfunction is typically called from an onClick handler added to a link or\nbutton element on the page.',
                        index: 3,
                    },
                    {
                        s: 'CLICK_TO_CALL',
                        description:
                            'For embedding on a mobile webpage. The snippet contains a JavaScript\nfunction which fires the tag.',
                        index: 4,
                    },
                    {
                        s: 'WEBSITE_CALL',
                        description:
                            'The snippet that is used to replace the phone number on your website with\na Google forwarding number for call tracking purposes.',
                        index: 5,
                    },
                ],
                _type: 'enum',
            },
        },
        third_party_app_analytics_settings: {
            _parent_description: 'Output only. Third Party App Analytics settings for third party conversion types.',
            event_name: {
                _description: 'Output only. The event name of a third-party app analytics conversion.',
                _type: 'string',
            },
        },
        type: {
            _description: 'Immutable. The type of this conversion action.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                {
                    s: 'AD_CALL',
                    description: "Conversions that occur when a user clicks on an ad's call extension.",
                    index: 2,
                },
                {
                    s: 'CLICK_TO_CALL',
                    description: 'Conversions that occur when a user on a mobile device clicks a phone\nnumber.',
                    index: 3,
                },
                {
                    s: 'GOOGLE_PLAY_DOWNLOAD',
                    description:
                        'Conversions that occur when a user downloads a mobile app from the Google\nPlay Store.',
                    index: 4,
                },
                {
                    s: 'GOOGLE_PLAY_IN_APP_PURCHASE',
                    description:
                        'Conversions that occur when a user makes a purchase in an app through\nAndroid billing.',
                    index: 5,
                },
                {
                    s: 'UPLOAD_CALLS',
                    description: 'Call conversions that are tracked by the advertiser and uploaded.',
                    index: 6,
                },
                {
                    s: 'UPLOAD_CLICKS',
                    description: 'Conversions that are tracked by the advertiser and uploaded with\nattributed clicks.',
                    index: 7,
                },
                { s: 'WEBPAGE', description: 'Conversions that occur on a webpage.', index: 8 },
                {
                    s: 'WEBSITE_CALL',
                    description:
                        "Conversions that occur when a user calls a dynamically-generated phone\nnumber from an advertiser's website.",
                    index: 9,
                },
                {
                    s: 'STORE_SALES_DIRECT_UPLOAD',
                    description:
                        'Store Sales conversion based on first-party or third-party merchant\ndata uploads.\nOnly whitelisted customers can use store sales direct upload types.',
                    index: 10,
                },
                {
                    s: 'STORE_SALES',
                    description:
                        'Store Sales conversion based on first-party or third-party merchant\ndata uploads and/or from in-store purchases using cards from payment\nnetworks.\nOnly whitelisted customers can use store sales types.',
                    index: 11,
                },
                {
                    s: 'FIREBASE_ANDROID_FIRST_OPEN',
                    description: 'Android app first open conversions tracked via Firebase.',
                    index: 12,
                },
                {
                    s: 'FIREBASE_ANDROID_IN_APP_PURCHASE',
                    description: 'Android app in app purchase conversions tracked via Firebase.',
                    index: 13,
                },
                {
                    s: 'FIREBASE_ANDROID_CUSTOM',
                    description: 'Android app custom conversions tracked via Firebase.',
                    index: 14,
                },
                {
                    s: 'FIREBASE_IOS_FIRST_OPEN',
                    description: 'iOS app first open conversions tracked via Firebase.',
                    index: 15,
                },
                {
                    s: 'FIREBASE_IOS_IN_APP_PURCHASE',
                    description: 'iOS app in app purchase conversions tracked via Firebase.',
                    index: 16,
                },
                {
                    s: 'FIREBASE_IOS_CUSTOM',
                    description: 'iOS app custom conversions tracked via Firebase.',
                    index: 17,
                },
                {
                    s: 'THIRD_PARTY_APP_ANALYTICS_ANDROID_FIRST_OPEN',
                    description: 'Android app first open conversions tracked via Third Party App Analytics.',
                    index: 18,
                },
                {
                    s: 'THIRD_PARTY_APP_ANALYTICS_ANDROID_IN_APP_PURCHASE',
                    description: 'Android app in app purchase conversions tracked via Third Party App\nAnalytics.',
                    index: 19,
                },
                {
                    s: 'THIRD_PARTY_APP_ANALYTICS_ANDROID_CUSTOM',
                    description: 'Android app custom conversions tracked via Third Party App Analytics.',
                    index: 20,
                },
                {
                    s: 'THIRD_PARTY_APP_ANALYTICS_IOS_FIRST_OPEN',
                    description: 'iOS app first open conversions tracked via Third Party App Analytics.',
                    index: 21,
                },
                {
                    s: 'THIRD_PARTY_APP_ANALYTICS_IOS_IN_APP_PURCHASE',
                    description: 'iOS app in app purchase conversions tracked via Third Party App\nAnalytics.',
                    index: 22,
                },
                {
                    s: 'THIRD_PARTY_APP_ANALYTICS_IOS_CUSTOM',
                    description: 'iOS app custom conversions tracked via Third Party App Analytics.',
                    index: 23,
                },
            ],
            _type: 'enum',
        },
        value_settings: {
            _parent_description:
                'Settings related to the value for conversion events associated with this conversion action.',
            always_use_default_value: {
                _description:
                    'Controls whether the default value and default currency code are used in place of the value and currency code specified in conversion events for this conversion action.',
                _type: 'boolean',
            },
            default_currency_code: {
                _description:
                    'The currency code to use when conversion events for this conversion action are sent with an invalid or missing currency code, or when this conversion action is configured to always use the default value.',
                _type: 'string',
            },
            default_value: {
                _description:
                    'The value to use when conversion events for this conversion action are sent with an invalid, disallowed or missing value, or when this conversion action is configured to always use the default value.',
                _type: 'double',
            },
        },
        view_through_lookback_window_days: {
            _description:
                'The maximum number of days which may elapse between an impression and a conversion without an interaction.',
            _type: 'int64',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
