module.exports = {
    name: 'FeedItem',
    object: {
        attribute_values: {
            _type: 'array of objects',
            boolean_value: {
                _description:
                    'Bool value. Should be set if feed_attribute_id refers to a feed attribute of type BOOLEAN.',
                _type: 'boolean',
            },
            boolean_values: {
                _description:
                    'Repeated bool value. Should be set if feed_attribute_id refers to a feed attribute of type BOOLEAN_LIST.',
                _type: 'array of booleans',
            },
            double_value: {
                _description:
                    'Double value. Should be set if feed_attribute_id refers to a feed attribute of type DOUBLE.',
                _type: 'double',
            },
            double_values: {
                _description:
                    'Repeated double value. Should be set if feed_attribute_id refers to a feed attribute of type DOUBLE_LIST.',
                _type: 'array of numbers',
            },
            feed_attribute_id: {
                _description: 'Id of the feed attribute for which the value is associated with.',
                _type: 'int64',
            },
            integer_value: {
                _description:
                    'Int64 value. Should be set if feed_attribute_id refers to a feed attribute of type INT64.',
                _type: 'int64',
            },
            integer_values: {
                _description:
                    'Repeated int64 value. Should be set if feed_attribute_id refers to a feed attribute of type INT64_LIST.',
                _type: 'array of strings',
            },
            price_value: {
                amount_micros: {
                    _description: 'Amount in micros. One million is equivalent to one unit.',
                    _type: 'int64',
                },
                currency_code: { _description: 'Three-character ISO 4217 currency code.', _type: 'string' },
            },
            string_value: {
                _description:
                    'String value. Should be set if feed_attribute_id refers to a feed attribute of type STRING, URL or DATE_TIME. For STRING the maximum length is 1500 characters. For URL the maximum length is 2076 characters. For DATE_TIME the format of the string must be the same as start and end time for the feed item.',
                _type: 'string',
            },
            string_values: {
                _description:
                    'Repeated string value. Should be set if feed_attribute_id refers to a feed attribute of type STRING_LIST, URL_LIST or DATE_TIME_LIST. For STRING_LIST and URL_LIST the total size of the list in bytes may not exceed 3000. For DATE_TIME_LIST the number of elements may not exceed 200. For STRING_LIST the maximum length of each string element is 1500 characters. For URL_LIST the maximum length is 2076 characters. For DATE_TIME the format of the string must be the same as start and end time for the feed item.',
                _type: 'array of strings',
            },
        },
        end_date_time: {
            _description:
                'End time in which this feed item is no longer effective and will stop serving. The time is in the customer\'s time zone. The format is "YYYY-MM-DD HH:MM:SS". Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30"',
            _type: 'string',
        },
        feed: { _description: 'The feed to which this feed item belongs.', _type: 'string' },
        geo_targeting_restriction: {
            _description: 'Geo targeting restriction specifies the type of location that can be used for targeting.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'LOCATION_OF_PRESENCE',
                    description: 'Indicates that request context should match the physical location of\nthe user.',
                },
            ],
            _type: 'enum',
        },
        id: { _description: 'The ID of this feed item.', _type: 'int64' },
        policy_infos: {
            _type: 'array of objects',
            approval_status: {
                _description:
                    'The overall approval status of the placeholder type, calculated based on the status of its individual policy topic entries.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                    {
                        s: 'UNKNOWN',
                        description:
                            'The received value is not known in this version.\n\nThis is a response-only value.',
                    },
                    { s: 'DISAPPROVED', description: 'Will not serve.' },
                    { s: 'APPROVED_LIMITED', description: 'Serves with restrictions.' },
                    { s: 'APPROVED', description: 'Serves without restrictions.' },
                    {
                        s: 'AREA_OF_INTEREST_ONLY',
                        description:
                            'Will not serve in targeted countries, but may serve for users who are\nsearching for information about the targeted countries.',
                    },
                ],
                _type: 'enum',
            },
            feed_mapping_resource_name: {
                _description: 'The FeedMapping that contains the placeholder type.',
                _type: 'string',
            },
            placeholder_type_enum: {
                _description: 'The placeholder type.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    {
                        s: 'SITELINK',
                        description:
                            'Lets you show links in your ad to pages from your website, including the\nmain landing page.',
                    },
                    {
                        s: 'CALL',
                        description:
                            'Lets you attach a phone number to an ad, allowing customers to call\ndirectly from the ad.',
                    },
                    {
                        s: 'APP',
                        description:
                            'Lets you provide users with a link that points to a mobile app in\naddition to a website.',
                    },
                    {
                        s: 'LOCATION',
                        description:
                            'Lets you show locations of businesses from your Google My Business\naccount in your ad. This helps people find your locations by showing your\nads with your address, a map to your location, or the distance to your\nbusiness. This extension type is useful to draw customers to your\nbrick-and-mortar location.',
                    },
                    {
                        s: 'AFFILIATE_LOCATION',
                        description:
                            'If you sell your product through retail chains, affiliate location\nextensions let you show nearby stores that carry your products.',
                    },
                    {
                        s: 'CALLOUT',
                        description:
                            'Lets you include additional text with your search ads that provide\ndetailed information about your business, including products and services\nyou offer. Callouts appear in ads at the top and bottom of Google search\nresults.',
                    },
                    {
                        s: 'STRUCTURED_SNIPPET',
                        description:
                            'Lets you add more info to your ad, specific to some predefined categories\nsuch as types, brands, styles, etc. A minimum of 3 text (SNIPPETS) values\nare required.',
                    },
                    {
                        s: 'MESSAGE',
                        description:
                            'Allows users to see your ad, click an icon, and contact you directly by\ntext message. With one tap on your ad, people can contact you to book an\nappointment, get a quote, ask for information, or request a service.',
                    },
                    {
                        s: 'PRICE',
                        description:
                            'Lets you display prices for a list of items along with your ads. A price\nfeed is composed of three to eight price table rows.',
                    },
                    {
                        s: 'PROMOTION',
                        description:
                            'Allows you to highlight sales and other promotions that let users see how\nthey can save by buying now.',
                    },
                    {
                        s: 'AD_CUSTOMIZER',
                        description:
                            'Lets you dynamically inject custom data into the title and description\nof your ads.',
                    },
                    {
                        s: 'DYNAMIC_EDUCATION',
                        description: 'Indicates that this feed is for education dynamic remarketing.',
                    },
                    { s: 'DYNAMIC_FLIGHT', description: 'Indicates that this feed is for flight dynamic remarketing.' },
                    {
                        s: 'DYNAMIC_CUSTOM',
                        description:
                            "Indicates that this feed is for a custom dynamic remarketing type. Use\nthis only if the other business types don't apply to your products or\nservices.",
                    },
                    {
                        s: 'DYNAMIC_HOTEL',
                        description: 'Indicates that this feed is for hotels and rentals dynamic remarketing.',
                    },
                    {
                        s: 'DYNAMIC_REAL_ESTATE',
                        description: 'Indicates that this feed is for real estate dynamic remarketing.',
                    },
                    { s: 'DYNAMIC_TRAVEL', description: 'Indicates that this feed is for travel dynamic remarketing.' },
                    {
                        s: 'DYNAMIC_LOCAL',
                        description: 'Indicates that this feed is for local deals dynamic remarketing.',
                    },
                    { s: 'DYNAMIC_JOB', description: 'Indicates that this feed is for job dynamic remarketing.' },
                ],
                _type: 'enum',
            },
            policy_topic_entries: {
                _type: 'array of objects',
                constraints: {
                    _type: 'array of objects',
                    certificate_domain_mismatch_in_country_list: {
                        countries: {
                            _type: 'array of objects',
                            country_criterion: {
                                _description:
                                    'Geo target constant resource name of the country in which serving is constrained.',
                                _type: 'string',
                            },
                        },
                        total_targeted_countries: {
                            _description: 'Total number of countries targeted by the resource.',
                            _type: 'int32',
                        },
                    },
                    certificate_missing_in_country_list: {
                        countries: {
                            _type: 'array of objects',
                            country_criterion: {
                                _description:
                                    'Geo target constant resource name of the country in which serving is constrained.',
                                _type: 'string',
                            },
                        },
                        total_targeted_countries: {
                            _description: 'Total number of countries targeted by the resource.',
                            _type: 'int32',
                        },
                    },
                    country_constraint_list: {
                        countries: {
                            _type: 'array of objects',
                            country_criterion: {
                                _description:
                                    'Geo target constant resource name of the country in which serving is constrained.',
                                _type: 'string',
                            },
                        },
                        total_targeted_countries: {
                            _description: 'Total number of countries targeted by the resource.',
                            _type: 'int32',
                        },
                    },
                    reseller_constraint: {},
                },
                evidences: {
                    _type: 'array of objects',
                    destination_mismatch: {
                        url_types: {
                            _description: 'The set of URLs that did not match each other.',
                            _type: 'array of strings',
                        },
                    },
                    destination_not_working: {
                        device: {
                            _description: 'The type of device that failed to load the URL.',
                            _enums: [
                                { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                                {
                                    s: 'UNKNOWN',
                                    description:
                                        'The received value is not known in this version.\n\nThis is a response-only value.',
                                },
                                { s: 'DESKTOP', description: "Landing page doesn't work on desktop device." },
                                { s: 'ANDROID', description: "Landing page doesn't work on Android device." },
                                { s: 'IOS', description: "Landing page doesn't work on iOS device." },
                            ],
                            _type: 'enum',
                        },
                        dns_error_type: {
                            _description: 'The type of DNS error.',
                            _enums: [
                                { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                                {
                                    s: 'UNKNOWN',
                                    description:
                                        'The received value is not known in this version.\n\nThis is a response-only value.',
                                },
                                {
                                    s: 'HOSTNAME_NOT_FOUND',
                                    description: 'Host name not found in DNS when fetching landing page.',
                                },
                                {
                                    s: 'GOOGLE_CRAWLER_DNS_ISSUE',
                                    description:
                                        "Google internal crawler issue when communicating with DNS. This error\ndoesn't mean the landing page doesn't work. Google will recrawl the\nlanding page.",
                                },
                            ],
                            _type: 'enum',
                        },
                        expanded_url: { _description: "The full URL that didn't work.", _type: 'string' },
                        http_error_code: { _description: 'The HTTP error code.', _type: 'int64' },
                        last_checked_date_time: {
                            _description:
                                'The time the URL was last checked. The format is "YYYY-MM-DD HH:MM:SS". Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30"',
                            _type: 'string',
                        },
                    },
                    destination_text_list: {
                        destination_texts: {
                            _description: "List of text found in the resource's destination page.",
                            _type: 'array of strings',
                        },
                    },
                    language_code: {
                        _description:
                            'The language the resource was detected to be written in. This is an IETF language tag such as "en-US".',
                        _type: 'string',
                    },
                    text_list: {
                        texts: {
                            _description: 'The fragments of text from the resource that caused the policy finding.',
                            _type: 'array of strings',
                        },
                    },
                    website_list: {
                        websites: {
                            _description: 'Websites that caused the policy finding.',
                            _type: 'array of strings',
                        },
                    },
                },
                topic: {
                    _description:
                        'Policy topic this finding refers to. For example, "ALCOHOL", "TRADEMARKS_IN_AD_TEXT", or "DESTINATION_NOT_WORKING". The set of possible policy topics is not fixed for a particular API version and may change at any time.',
                    _type: 'string',
                },
                type: {
                    _description: 'Describes the negative or positive effect this policy will have on serving.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                        {
                            s: 'UNKNOWN',
                            description:
                                'The received value is not known in this version.\n\nThis is a response-only value.',
                        },
                        { s: 'PROHIBITED', description: 'The resource will not be served.' },
                        { s: 'LIMITED', description: 'The resource will not be served under some circumstances.' },
                        {
                            s: 'FULLY_LIMITED',
                            description: 'The resource cannot serve at all because of the current targeting\ncriteria.',
                        },
                        {
                            s: 'DESCRIPTIVE',
                            description: 'May be of interest, but does not limit how the resource is served.',
                        },
                        { s: 'BROADENING', description: 'Could increase coverage beyond normal.' },
                        {
                            s: 'AREA_OF_INTEREST_ONLY',
                            description:
                                'Constrained for all targeted countries, but may serve in other countries\nthrough area of interest.',
                        },
                    ],
                    _type: 'enum',
                },
            },
            quality_approval_status: {
                _description: 'Placeholder type quality evaluation approval status.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'APPROVED', description: 'Meets all quality expectations.' },
                    {
                        s: 'DISAPPROVED',
                        description:
                            'Does not meet some quality expectations. The specific reason is found in\nthe quality_disapproval_reasons field.',
                    },
                ],
                _type: 'enum',
            },
            quality_disapproval_reasons: {
                _description: 'List of placeholder type quality evaluation disapproval reasons.',
                _type: 'array of strings',
            },
            review_status: {
                _description: 'Where the placeholder type is in the review process.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                    {
                        s: 'UNKNOWN',
                        description:
                            'The received value is not known in this version.\n\nThis is a response-only value.',
                    },
                    { s: 'REVIEW_IN_PROGRESS', description: 'Currently under review.' },
                    { s: 'REVIEWED', description: 'Primary review complete. Other reviews may be continuing.' },
                    {
                        s: 'UNDER_APPEAL',
                        description:
                            'The resource has been resubmitted for approval or its policy decision has\nbeen appealed.',
                    },
                ],
                _type: 'enum',
            },
            validation_errors: {
                _type: 'array of objects',
                description: { _description: 'The description of the validation error.', _type: 'string' },
                extra_info: {
                    _description:
                        'Any extra information related to this error which is not captured by validation_error and feed_attribute_id (e.g. placeholder field IDs when feed_attribute_id is not mapped). Note that extra_info is not localized.',
                    _type: 'string',
                },
                feed_attribute_ids: {
                    _description:
                        'Set of feed attributes in the feed item flagged during validation. If empty, no specific feed attributes can be associated with the error (e.g. error across the entire feed item).',
                    _type: 'array of strings',
                },
                validation_error: {
                    _description:
                        "Error code indicating what validation error was triggered. The description of the error can be found in the 'description' field.",
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                        },
                        { s: 'STRING_TOO_SHORT', description: 'String is too short.' },
                        { s: 'STRING_TOO_LONG', description: 'String is too long.' },
                        { s: 'VALUE_NOT_SPECIFIED', description: 'Value is not provided.' },
                        {
                            s: 'INVALID_DOMESTIC_PHONE_NUMBER_FORMAT',
                            description: 'Phone number format is invalid for region.',
                        },
                        { s: 'INVALID_PHONE_NUMBER', description: 'String does not represent a phone number.' },
                        {
                            s: 'PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY',
                            description: 'Phone number format is not compatible with country code.',
                        },
                        { s: 'PREMIUM_RATE_NUMBER_NOT_ALLOWED', description: 'Premium rate number is not allowed.' },
                        { s: 'DISALLOWED_NUMBER_TYPE', description: 'Phone number type is not allowed.' },
                        { s: 'VALUE_OUT_OF_RANGE', description: 'Specified value is outside of the valid range.' },
                        {
                            s: 'CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY',
                            description: 'Call tracking is not supported in the selected country.',
                        },
                        {
                            s: 'CUSTOMER_NOT_WHITELISTED_FOR_CALLTRACKING',
                            description: 'Customer is not whitelisted for call tracking.',
                        },
                        { s: 'INVALID_COUNTRY_CODE', description: 'Country code is invalid.' },
                        { s: 'INVALID_APP_ID', description: 'The specified mobile app id is invalid.' },
                        {
                            s: 'MISSING_ATTRIBUTES_FOR_FIELDS',
                            description: 'Some required field attributes are missing.',
                        },
                        { s: 'INVALID_TYPE_ID', description: 'Invalid email button type for email extension.' },
                        { s: 'INVALID_EMAIL_ADDRESS', description: 'Email address is invalid.' },
                        { s: 'INVALID_HTTPS_URL', description: 'The HTTPS URL in email extension is invalid.' },
                        {
                            s: 'MISSING_DELIVERY_ADDRESS',
                            description: 'Delivery address is missing from email extension.',
                        },
                        {
                            s: 'START_DATE_AFTER_END_DATE',
                            description: 'FeedItem scheduling start date comes after end date.',
                        },
                        {
                            s: 'MISSING_FEED_ITEM_START_TIME',
                            description: 'FeedItem scheduling start time is missing.',
                        },
                        { s: 'MISSING_FEED_ITEM_END_TIME', description: 'FeedItem scheduling end time is missing.' },
                        {
                            s: 'MISSING_FEED_ITEM_ID',
                            description: 'Cannot compute system attributes on a FeedItem that has no FeedItemId.',
                        },
                        {
                            s: 'VANITY_PHONE_NUMBER_NOT_ALLOWED',
                            description: 'Call extension vanity phone numbers are not supported.',
                        },
                        { s: 'INVALID_REVIEW_EXTENSION_SNIPPET', description: 'Invalid review text.' },
                        {
                            s: 'INVALID_NUMBER_FORMAT',
                            description: 'Invalid format for numeric value in ad parameter.',
                        },
                        { s: 'INVALID_DATE_FORMAT', description: 'Invalid format for date value in ad parameter.' },
                        { s: 'INVALID_PRICE_FORMAT', description: 'Invalid format for price value in ad parameter.' },
                        {
                            s: 'UNKNOWN_PLACEHOLDER_FIELD',
                            description: 'Unrecognized type given for value in ad parameter.',
                        },
                        {
                            s: 'MISSING_ENHANCED_SITELINK_DESCRIPTION_LINE',
                            description: 'Enhanced sitelinks must have both description lines specified.',
                        },
                        { s: 'REVIEW_EXTENSION_SOURCE_INELIGIBLE', description: 'Review source is ineligible.' },
                        {
                            s: 'HYPHENS_IN_REVIEW_EXTENSION_SNIPPET',
                            description: 'Review text cannot contain hyphens or dashes.',
                        },
                        {
                            s: 'DOUBLE_QUOTES_IN_REVIEW_EXTENSION_SNIPPET',
                            description: 'Review text cannot contain double quote characters.',
                        },
                        {
                            s: 'QUOTES_IN_REVIEW_EXTENSION_SNIPPET',
                            description: 'Review text cannot contain quote characters.',
                        },
                        {
                            s: 'INVALID_FORM_ENCODED_PARAMS',
                            description: 'Parameters are encoded in the wrong format.',
                        },
                        {
                            s: 'INVALID_URL_PARAMETER_NAME',
                            description:
                                'URL parameter name must contain only letters, numbers, underscores, and\ndashes.',
                        },
                        { s: 'NO_GEOCODING_RESULT', description: 'Cannot find address location.' },
                        {
                            s: 'SOURCE_NAME_IN_REVIEW_EXTENSION_TEXT',
                            description: 'Review extension text has source name.',
                        },
                        {
                            s: 'CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED',
                            description:
                                'Some phone numbers can be shorter than usual. Some of these short numbers\nare carrier-specific, and we disallow those in ad extensions because they\nwill not be available to all users.',
                        },
                        {
                            s: 'INVALID_PLACEHOLDER_FIELD_ID',
                            description:
                                'Triggered when a request references a placeholder field id that does not\nexist.',
                        },
                        { s: 'INVALID_URL_TAG', description: 'URL contains invalid ValueTrack tags or format.' },
                        { s: 'LIST_TOO_LONG', description: 'Provided list exceeds acceptable size.' },
                        {
                            s: 'INVALID_ATTRIBUTES_COMBINATION',
                            description:
                                "Certain combinations of attributes aren't allowed to be specified in the\nsame feed item.",
                        },
                        { s: 'DUPLICATE_VALUES', description: 'An attribute has the same value repeatedly.' },
                        {
                            s: 'INVALID_CALL_CONVERSION_ACTION_ID',
                            description:
                                'Advertisers can link a conversion action with a phone number to indicate\nthat sufficiently long calls forwarded to that phone number should be\ncounted as conversions of the specified type.  This is an error message\nindicating that the conversion action specified is invalid (e.g., the\nconversion action does not exist within the appropriate Google Ads\naccount, or it is a type of conversion not appropriate to phone call\nconversions).',
                        },
                        {
                            s: 'CANNOT_SET_WITHOUT_FINAL_URLS',
                            description: 'Tracking template requires final url to be set.',
                        },
                        {
                            s: 'APP_ID_DOESNT_EXIST_IN_APP_STORE',
                            description: "An app id was provided that doesn't exist in the given app store.",
                        },
                        { s: 'INVALID_FINAL_URL', description: 'Invalid U2 final url.' },
                        { s: 'INVALID_TRACKING_URL', description: 'Invalid U2 tracking url.' },
                        {
                            s: 'INVALID_FINAL_URL_FOR_APP_DOWNLOAD_URL',
                            description: 'Final URL should start from App download URL.',
                        },
                        { s: 'LIST_TOO_SHORT', description: 'List provided is too short.' },
                        { s: 'INVALID_USER_ACTION', description: 'User Action field has invalid value.' },
                        { s: 'INVALID_TYPE_NAME', description: 'Type field has invalid value.' },
                        { s: 'INVALID_EVENT_CHANGE_STATUS', description: 'Change status for event is invalid.' },
                        {
                            s: 'INVALID_SNIPPETS_HEADER',
                            description:
                                'The header of a structured snippets extension is not one of the valid\nheaders.',
                        },
                        { s: 'INVALID_ANDROID_APP_LINK', description: 'Android app link is not formatted correctly' },
                        {
                            s: 'NUMBER_TYPE_WITH_CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY',
                            description: 'Phone number incompatible with call tracking for country.',
                        },
                        { s: 'RESERVED_KEYWORD_OTHER', description: 'The input is identical to a reserved keyword' },
                        {
                            s: 'DUPLICATE_OPTION_LABELS',
                            description: 'Each option label in the message extension must be unique.',
                        },
                        {
                            s: 'DUPLICATE_OPTION_PREFILLS',
                            description: 'Each option prefill in the message extension must be unique.',
                        },
                        {
                            s: 'UNEQUAL_LIST_LENGTHS',
                            description:
                                'In message extensions, the number of optional labels and optional\nprefills must be the same.',
                        },
                        {
                            s: 'INCONSISTENT_CURRENCY_CODES',
                            description: 'All currency codes in an ad extension must be the same.',
                        },
                        {
                            s: 'PRICE_EXTENSION_HAS_DUPLICATED_HEADERS',
                            description: 'Headers in price extension are not unique.',
                        },
                        {
                            s: 'ITEM_HAS_DUPLICATED_HEADER_AND_DESCRIPTION',
                            description: 'Header and description in an item are the same.',
                        },
                        { s: 'PRICE_EXTENSION_HAS_TOO_FEW_ITEMS', description: 'Price extension has too few items.' },
                        { s: 'UNSUPPORTED_VALUE', description: 'The given value is not supported.' },
                        { s: 'INVALID_FINAL_MOBILE_URL', description: 'Invalid final mobile url.' },
                        {
                            s: 'INVALID_KEYWORDLESS_AD_RULE_LABEL',
                            description: 'The given string value of Label contains invalid characters',
                        },
                        {
                            s: 'VALUE_TRACK_PARAMETER_NOT_SUPPORTED',
                            description: 'The given URL contains value track parameters.',
                        },
                        {
                            s: 'UNSUPPORTED_VALUE_IN_SELECTED_LANGUAGE',
                            description: 'The given value is not supported in the selected language of an\nextension.',
                        },
                        { s: 'INVALID_IOS_APP_LINK', description: 'The iOS app link is not formatted correctly.' },
                        {
                            s: 'MISSING_IOS_APP_LINK_OR_IOS_APP_STORE_ID',
                            description: 'iOS app link or iOS app store id is missing.',
                        },
                        { s: 'PROMOTION_INVALID_TIME', description: 'Promotion time is invalid.' },
                        {
                            s: 'PROMOTION_CANNOT_SET_PERCENT_OFF_AND_MONEY_AMOUNT_OFF',
                            description: 'Both the percent off and money amount off fields are set.',
                        },
                        {
                            s: 'PROMOTION_CANNOT_SET_PROMOTION_CODE_AND_ORDERS_OVER_AMOUNT',
                            description: 'Both the promotion code and orders over amount fields are set.',
                        },
                        {
                            s: 'TOO_MANY_DECIMAL_PLACES_SPECIFIED',
                            description: 'Too many decimal places are specified.',
                        },
                        { s: 'AD_CUSTOMIZERS_NOT_ALLOWED', description: 'Ad Customizers are present and not allowed.' },
                        { s: 'INVALID_LANGUAGE_CODE', description: 'Language code is not valid.' },
                        { s: 'UNSUPPORTED_LANGUAGE', description: 'Language is not supported.' },
                        { s: 'IF_FUNCTION_NOT_ALLOWED', description: 'IF Function is present and not allowed.' },
                        { s: 'INVALID_FINAL_URL_SUFFIX', description: 'Final url suffix is not valid.' },
                        {
                            s: 'INVALID_TAG_IN_FINAL_URL_SUFFIX',
                            description: 'Final url suffix contains an invalid tag.',
                        },
                        {
                            s: 'INVALID_FINAL_URL_SUFFIX_FORMAT',
                            description: 'Final url suffix is formatted incorrectly.',
                        },
                        {
                            s: 'CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED',
                            description:
                                'Consent for call recording, which is required for the use of call\nextensions, was not provided by the advertiser. Please see\nhttps://support.google.com/google-ads/answer/7412639.',
                        },
                        {
                            s: 'ONLY_ONE_DELIVERY_OPTION_IS_ALLOWED',
                            description: 'Multiple message delivery options are set.',
                        },
                        { s: 'NO_DELIVERY_OPTION_IS_SET', description: 'No message delivery option is set.' },
                        {
                            s: 'INVALID_CONVERSION_REPORTING_STATE',
                            description: 'String value of conversion reporting state field is not valid.',
                        },
                        { s: 'IMAGE_SIZE_WRONG', description: 'Image size is not right.' },
                        {
                            s: 'EMAIL_DELIVERY_NOT_AVAILABLE_IN_COUNTRY',
                            description:
                                'Email delivery is not supported in the country specified in the country\ncode field.',
                        },
                        {
                            s: 'AUTO_REPLY_NOT_AVAILABLE_IN_COUNTRY',
                            description:
                                'Auto reply is not supported in the country specified in the country code\nfield.',
                        },
                        { s: 'INVALID_LATITUDE_VALUE', description: 'Invalid value specified for latitude.' },
                        { s: 'INVALID_LONGITUDE_VALUE', description: 'Invalid value specified for longitude.' },
                        { s: 'TOO_MANY_LABELS', description: 'Too many label fields provided.' },
                        { s: 'INVALID_IMAGE_URL', description: 'Invalid image url.' },
                        { s: 'MISSING_LATITUDE_VALUE', description: 'Latitude value is missing.' },
                        { s: 'MISSING_LONGITUDE_VALUE', description: 'Longitude value is missing.' },
                    ],
                    _type: 'enum',
                },
            },
            validation_status: {
                _description: 'The validation status of the palceholder type.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'PENDING', description: 'Validation pending.' },
                    { s: 'INVALID', description: 'An error was found.' },
                    { s: 'VALID', description: 'Feed item is semantically well-formed.' },
                ],
                _type: 'enum',
            },
        },
        resource_name: {
            _description:
                'The resource name of the feed item. Feed item resource names have the form: <code>customers/{customer_id}/feedItems/{feed_id}~{feed_item_id}</code>',
            _type: 'string',
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
        url_custom_parameters: {
            _type: 'array of objects',
            key: { _description: 'The key matching the parameter tag name.', _type: 'string' },
            value: { _description: 'The value to be substituted.', _type: 'string' },
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
