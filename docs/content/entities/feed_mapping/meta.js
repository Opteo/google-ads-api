module.exports = {
    name: 'FeedMapping',
    object: {
        attribute_field_mappings: {
            _parent_description:
                'Immutable. Feed attributes to field mappings. These mappings are a one-to-many relationship meaning that 1 feed attribute can be used to populate multiple placeholder fields, but 1 placeholder field can only draw data from 1 feed attribute. Ad Customizer is an exception, 1 placeholder field can be mapped to multiple feed attributes. Required.',
            _type: 'array of objects',
            ad_customizer_field: {
                _description: 'Immutable. Ad Customizer Placeholder Fields',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'INTEGER', description: 'Data Type: INT64. Integer value to be inserted.' },
                    { s: 'PRICE', description: 'Data Type: STRING. Price value to be inserted.' },
                    { s: 'DATE', description: 'Data Type: DATE_TIME. Date value to be inserted.' },
                    { s: 'STRING', description: 'Data Type: STRING. String value to be inserted.' },
                ],
                _type: 'enum',
            },
            affiliate_location_field: {
                _description: 'Output only. Affiliate Location Placeholder Fields. This field is read-only.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'BUSINESS_NAME', description: 'Data Type: STRING. The name of the business.' },
                    { s: 'ADDRESS_LINE_1', description: 'Data Type: STRING. Line 1 of the business address.' },
                    { s: 'ADDRESS_LINE_2', description: 'Data Type: STRING. Line 2 of the business address.' },
                    { s: 'CITY', description: 'Data Type: STRING. City of the business address.' },
                    { s: 'PROVINCE', description: 'Data Type: STRING. Province of the business address.' },
                    { s: 'POSTAL_CODE', description: 'Data Type: STRING. Postal code of the business address.' },
                    { s: 'COUNTRY_CODE', description: 'Data Type: STRING. Country code of the business address.' },
                    { s: 'PHONE_NUMBER', description: 'Data Type: STRING. Phone number of the business.' },
                    { s: 'LANGUAGE_CODE', description: 'Data Type: STRING. Language code of the business.' },
                    { s: 'CHAIN_ID', description: 'Data Type: INT64. ID of the chain.' },
                    { s: 'CHAIN_NAME', description: 'Data Type: STRING. Name of the chain.' },
                ],
                _type: 'enum',
            },
            app_field: {
                _description: 'Immutable. App Placeholder Fields.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    {
                        s: 'STORE',
                        description:
                            'Data Type: INT64. The application store that the target application\nbelongs to. Valid values are: 1 = Apple iTunes Store; 2 = Google Play\nStore.',
                    },
                    { s: 'ID', description: 'Data Type: STRING. The store-specific ID for the target application.' },
                    {
                        s: 'LINK_TEXT',
                        description:
                            'Data Type: STRING. The visible text displayed when the link is rendered\nin an ad.',
                    },
                    { s: 'URL', description: 'Data Type: STRING. The destination URL of the in-app link.' },
                    {
                        s: 'FINAL_URLS',
                        description: 'Data Type: URL_LIST. Final URLs for the in-app link when using Upgraded\nURLs.',
                    },
                    {
                        s: 'FINAL_MOBILE_URLS',
                        description:
                            'Data Type: URL_LIST. Final Mobile URLs for the in-app link when using\nUpgraded URLs.',
                    },
                    {
                        s: 'TRACKING_URL',
                        description: 'Data Type: URL. Tracking template for the in-app link when using Upgraded\nURLs.',
                    },
                    {
                        s: 'FINAL_URL_SUFFIX',
                        description:
                            'Data Type: STRING. Final URL suffix for the in-app link when using\nparallel tracking.',
                    },
                ],
                _type: 'enum',
            },
            call_field: {
                _description: 'Immutable. Call Placeholder Fields.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    {
                        s: 'PHONE_NUMBER',
                        description: "Data Type: STRING. The advertiser's phone number to append to the ad.",
                    },
                    {
                        s: 'COUNTRY_CODE',
                        description:
                            "Data Type: STRING. Uppercase two-letter country code of the advertiser's\nphone number.",
                    },
                    {
                        s: 'TRACKED',
                        description: 'Data Type: BOOLEAN. Indicates whether call tracking is enabled. Default:\ntrue.',
                    },
                    {
                        s: 'CONVERSION_TYPE_ID',
                        description:
                            'Data Type: INT64. The ID of an AdCallMetricsConversion object. This\nobject contains the phoneCallDurationfield which is the minimum duration\n(in seconds) of a call to be considered a conversion.',
                    },
                    {
                        s: 'CONVERSION_REPORTING_STATE',
                        description:
                            'Data Type: STRING. Indicates whether this call extension uses its own\ncall conversion setting or follows the account level setting.\nValid values are: USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION and\nUSE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION.',
                    },
                ],
                _type: 'enum',
            },
            callout_field: {
                _description: 'Immutable. Callout Placeholder Fields.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'CALLOUT_TEXT', description: 'Data Type: STRING. Callout text.' },
                ],
                _type: 'enum',
            },
            custom_field: {
                _description: 'Immutable. Custom Placeholder Fields',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    {
                        s: 'ID',
                        description: 'Data Type: STRING. Required. Combination ID and ID2 must be unique per\noffer.',
                    },
                    { s: 'ID2', description: 'Data Type: STRING. Combination ID and ID2 must be unique per offer.' },
                    {
                        s: 'ITEM_TITLE',
                        description:
                            'Data Type: STRING. Required. Main headline with product name to be shown\nin dynamic ad.',
                    },
                    {
                        s: 'ITEM_SUBTITLE',
                        description: 'Data Type: STRING. Optional text to be shown in the image ad.',
                    },
                    {
                        s: 'ITEM_DESCRIPTION',
                        description: 'Data Type: STRING. Optional description of the product to be shown in the\nad.',
                    },
                    {
                        s: 'ITEM_ADDRESS',
                        description:
                            'Data Type: STRING. Full address of your offer or service, including\npostal code. This will be used to identify the closest product to the\nuser when there are multiple offers in the feed that are relevant to the\nuser.',
                    },
                    {
                        s: 'PRICE',
                        description: 'Data Type: STRING. Price to be shown in the ad.\nExample: "100.00 USD"',
                    },
                    {
                        s: 'FORMATTED_PRICE',
                        description:
                            'Data Type: STRING. Formatted price to be shown in the ad.\nExample: "Starting at $100.00 USD", "$80 - $100"',
                    },
                    {
                        s: 'SALE_PRICE',
                        description: 'Data Type: STRING. Sale price to be shown in the ad.\nExample: "80.00 USD"',
                    },
                    {
                        s: 'FORMATTED_SALE_PRICE',
                        description:
                            'Data Type: STRING. Formatted sale price to be shown in the ad.\nExample: "On sale for $80.00", "$60 - $80"',
                    },
                    {
                        s: 'IMAGE_URL',
                        description:
                            'Data Type: URL. Image to be displayed in the ad. Highly recommended for\nimage ads.',
                    },
                    {
                        s: 'ITEM_CATEGORY',
                        description:
                            'Data Type: STRING. Used as a recommendation engine signal to serve items\nin the same category.',
                    },
                    {
                        s: 'FINAL_URLS',
                        description:
                            'Data Type: URL_LIST. Final URLs for the ad when using Upgraded\nURLs. User will be redirected to these URLs when they click on an ad, or\nwhen they click on a specific product for ads that have multiple\nproducts.',
                    },
                    {
                        s: 'FINAL_MOBILE_URLS',
                        description: 'Data Type: URL_LIST. Final mobile URLs for the ad when using Upgraded\nURLs.',
                    },
                    {
                        s: 'TRACKING_URL',
                        description: 'Data Type: URL. Tracking template for the ad when using Upgraded URLs.',
                    },
                    {
                        s: 'CONTEXTUAL_KEYWORDS',
                        description: 'Data Type: STRING_LIST. Keywords used for product retrieval.',
                    },
                    {
                        s: 'ANDROID_APP_LINK',
                        description:
                            'Data Type: STRING. Android app link. Must be formatted as:\nandroid-app://{package_id}/{scheme}/{host_path}.\nThe components are defined as follows:\npackage_id: app ID as specified in Google Play.\nscheme: the scheme to pass to the application. Can be HTTP, or a custom\n  scheme.\nhost_path: identifies the specific content within your application.',
                    },
                    {
                        s: 'SIMILAR_IDS',
                        description:
                            'Data Type: STRING_LIST. List of recommended IDs to show together with\nthis item.',
                    },
                    { s: 'IOS_APP_LINK', description: 'Data Type: STRING. iOS app link.' },
                    { s: 'IOS_APP_STORE_ID', description: 'Data Type: INT64. iOS app store ID.' },
                ],
                _type: 'enum',
            },
            dsa_page_feed_field: {
                _description: 'Immutable. Dynamic Search Ad Page Feed Fields.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    {
                        s: 'PAGE_URL',
                        description: 'Data Type: URL or URL_LIST. URL of the web page you want to target.',
                    },
                    {
                        s: 'LABEL',
                        description:
                            'Data Type: STRING_LIST. The labels that will help you target ads within\nyour page feed.',
                    },
                ],
                _type: 'enum',
            },
            education_field: {
                _description: 'Immutable. Education Placeholder Fields',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    {
                        s: 'PROGRAM_ID',
                        description:
                            'Data Type: STRING. Required. Combination of PROGRAM ID and LOCATION ID\nmust be unique per offer.',
                    },
                    {
                        s: 'LOCATION_ID',
                        description:
                            'Data Type: STRING. Combination of PROGRAM ID and LOCATION ID must be\nunique per offer.',
                    },
                    {
                        s: 'PROGRAM_NAME',
                        description:
                            'Data Type: STRING. Required. Main headline with program name to be shown\nin dynamic ad.',
                    },
                    {
                        s: 'AREA_OF_STUDY',
                        description: 'Data Type: STRING. Area of study that can be shown in dynamic ad.',
                    },
                    {
                        s: 'PROGRAM_DESCRIPTION',
                        description: 'Data Type: STRING. Description of program that can be shown in dynamic\nad.',
                    },
                    {
                        s: 'SCHOOL_NAME',
                        description: 'Data Type: STRING. Name of school that can be shown in dynamic ad.',
                    },
                    { s: 'ADDRESS', description: 'Data Type: STRING. Complete school address, including postal code.' },
                    { s: 'THUMBNAIL_IMAGE_URL', description: 'Data Type: URL. Image to be displayed in ads.' },
                    {
                        s: 'ALTERNATIVE_THUMBNAIL_IMAGE_URL',
                        description: 'Data Type: URL. Alternative hosted file of image to be used in the ad.',
                    },
                    {
                        s: 'FINAL_URLS',
                        description:
                            'Data Type: URL_LIST. Required. Final URLs to be used in ad when using\nUpgraded URLs; the more specific the better (e.g. the individual URL of a\nspecific program and its location).',
                    },
                    {
                        s: 'FINAL_MOBILE_URLS',
                        description: 'Data Type: URL_LIST. Final mobile URLs for the ad when using Upgraded\nURLs.',
                    },
                    {
                        s: 'TRACKING_URL',
                        description: 'Data Type: URL. Tracking template for the ad when using Upgraded URLs.',
                    },
                    {
                        s: 'CONTEXTUAL_KEYWORDS',
                        description: 'Data Type: STRING_LIST. Keywords used for product retrieval.',
                    },
                    {
                        s: 'ANDROID_APP_LINK',
                        description:
                            'Data Type: STRING. Android app link. Must be formatted as:\nandroid-app://{package_id}/{scheme}/{host_path}.\nThe components are defined as follows:\npackage_id: app ID as specified in Google Play.\nscheme: the scheme to pass to the application. Can be HTTP, or a custom\n  scheme.\nhost_path: identifies the specific content within your application.',
                    },
                    {
                        s: 'SIMILAR_PROGRAM_IDS',
                        description:
                            'Data Type: STRING_LIST. List of recommended program IDs to show together\nwith this item.',
                    },
                    { s: 'IOS_APP_LINK', description: 'Data Type: STRING. iOS app link.' },
                    { s: 'IOS_APP_STORE_ID', description: 'Data Type: INT64. iOS app store ID.' },
                ],
                _type: 'enum',
            },
            feed_attribute_id: { _description: 'Immutable. Feed attribute from which to map.', _type: 'int64' },
            field_id: {
                _description:
                    'Output only. The placeholder field ID. If a placeholder field enum is not published in the current API version, then this field will be populated and the field oneof will be empty. This field is read-only.',
                _type: 'int64',
            },
            flight_field: {
                _description: 'Immutable. Flight Placeholder Fields',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    {
                        s: 'DESTINATION_ID',
                        description:
                            'Data Type: STRING. Required. Destination id. Example: PAR, LON.\nFor feed items that only have destination id, destination id must be a\nunique key. For feed items that have both destination id and origin id,\nthen the combination must be a unique key.',
                    },
                    {
                        s: 'ORIGIN_ID',
                        description:
                            'Data Type: STRING. Origin id. Example: PAR, LON.\nOptional. Combination of destination id and origin id must be unique per\noffer.',
                    },
                    {
                        s: 'FLIGHT_DESCRIPTION',
                        description:
                            'Data Type: STRING. Required. Main headline with product name to be shown\nin dynamic ad.',
                    },
                    { s: 'ORIGIN_NAME', description: 'Data Type: STRING. Shorter names are recommended.' },
                    { s: 'DESTINATION_NAME', description: 'Data Type: STRING. Shorter names are recommended.' },
                    {
                        s: 'FLIGHT_PRICE',
                        description: 'Data Type: STRING. Price to be shown in the ad.\nExample: "100.00 USD"',
                    },
                    {
                        s: 'FORMATTED_PRICE',
                        description:
                            'Data Type: STRING. Formatted price to be shown in the ad.\nExample: "Starting at $100.00 USD", "$80 - $100"',
                    },
                    {
                        s: 'FLIGHT_SALE_PRICE',
                        description: 'Data Type: STRING. Sale price to be shown in the ad.\nExample: "80.00 USD"',
                    },
                    {
                        s: 'FORMATTED_SALE_PRICE',
                        description:
                            'Data Type: STRING. Formatted sale price to be shown in the ad.\nExample: "On sale for $80.00", "$60 - $80"',
                    },
                    { s: 'IMAGE_URL', description: 'Data Type: URL. Image to be displayed in the ad.' },
                    {
                        s: 'FINAL_URLS',
                        description:
                            'Data Type: URL_LIST. Required. Final URLs for the ad when using Upgraded\nURLs. User will be redirected to these URLs when they click on an ad, or\nwhen they click on a specific flight for ads that show multiple\nflights.',
                    },
                    {
                        s: 'FINAL_MOBILE_URLS',
                        description: 'Data Type: URL_LIST. Final mobile URLs for the ad when using Upgraded\nURLs.',
                    },
                    {
                        s: 'TRACKING_URL',
                        description: 'Data Type: URL. Tracking template for the ad when using Upgraded URLs.',
                    },
                    {
                        s: 'ANDROID_APP_LINK',
                        description:
                            'Data Type: STRING. Android app link. Must be formatted as:\nandroid-app://{package_id}/{scheme}/{host_path}.\nThe components are defined as follows:\npackage_id: app ID as specified in Google Play.\nscheme: the scheme to pass to the application. Can be HTTP, or a custom\n  scheme.\nhost_path: identifies the specific content within your application.',
                    },
                    {
                        s: 'SIMILAR_DESTINATION_IDS',
                        description:
                            'Data Type: STRING_LIST. List of recommended destination IDs to show\ntogether with this item.',
                    },
                    { s: 'IOS_APP_LINK', description: 'Data Type: STRING. iOS app link.' },
                    { s: 'IOS_APP_STORE_ID', description: 'Data Type: INT64. iOS app store ID.' },
                ],
                _type: 'enum',
            },
            hotel_field: {
                _description: 'Immutable. Hotel Placeholder Fields',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'PROPERTY_ID', description: 'Data Type: STRING. Required. Unique ID.' },
                    {
                        s: 'PROPERTY_NAME',
                        description:
                            'Data Type: STRING. Required. Main headline with property name to be shown\nin dynamic ad.',
                    },
                    {
                        s: 'DESTINATION_NAME',
                        description: 'Data Type: STRING. Name of destination to be shown in dynamic ad.',
                    },
                    {
                        s: 'DESCRIPTION',
                        description: 'Data Type: STRING. Description of destination to be shown in dynamic ad.',
                    },
                    {
                        s: 'ADDRESS',
                        description: 'Data Type: STRING. Complete property address, including postal code.',
                    },
                    {
                        s: 'PRICE',
                        description: 'Data Type: STRING. Price to be shown in the ad.\nExample: "100.00 USD"',
                    },
                    {
                        s: 'FORMATTED_PRICE',
                        description:
                            'Data Type: STRING. Formatted price to be shown in the ad.\nExample: "Starting at $100.00 USD", "$80 - $100"',
                    },
                    {
                        s: 'SALE_PRICE',
                        description: 'Data Type: STRING. Sale price to be shown in the ad.\nExample: "80.00 USD"',
                    },
                    {
                        s: 'FORMATTED_SALE_PRICE',
                        description:
                            'Data Type: STRING. Formatted sale price to be shown in the ad.\nExample: "On sale for $80.00", "$60 - $80"',
                    },
                    { s: 'IMAGE_URL', description: 'Data Type: URL. Image to be displayed in the ad.' },
                    {
                        s: 'CATEGORY',
                        description:
                            'Data Type: STRING. Category of property used to group like items together\nfor recommendation engine.',
                    },
                    {
                        s: 'STAR_RATING',
                        description:
                            'Data Type: INT64. Star rating (1 to 5) used to group like items\ntogether for recommendation engine.',
                    },
                    {
                        s: 'CONTEXTUAL_KEYWORDS',
                        description: 'Data Type: STRING_LIST. Keywords used for product retrieval.',
                    },
                    {
                        s: 'FINAL_URLS',
                        description:
                            'Data Type: URL_LIST. Required. Final URLs for the ad when using Upgraded\nURLs. User will be redirected to these URLs when they click on an ad, or\nwhen they click on a specific flight for ads that show multiple\nflights.',
                    },
                    {
                        s: 'FINAL_MOBILE_URLS',
                        description: 'Data Type: URL_LIST. Final mobile URLs for the ad when using Upgraded\nURLs.',
                    },
                    {
                        s: 'TRACKING_URL',
                        description: 'Data Type: URL. Tracking template for the ad when using Upgraded URLs.',
                    },
                    {
                        s: 'ANDROID_APP_LINK',
                        description:
                            'Data Type: STRING. Android app link. Must be formatted as:\nandroid-app://{package_id}/{scheme}/{host_path}.\nThe components are defined as follows:\npackage_id: app ID as specified in Google Play.\nscheme: the scheme to pass to the application. Can be HTTP, or a custom\n  scheme.\nhost_path: identifies the specific content within your application.',
                    },
                    {
                        s: 'SIMILAR_PROPERTY_IDS',
                        description:
                            'Data Type: STRING_LIST. List of recommended property IDs to show together\nwith this item.',
                    },
                    { s: 'IOS_APP_LINK', description: 'Data Type: STRING. iOS app link.' },
                    { s: 'IOS_APP_STORE_ID', description: 'Data Type: INT64. iOS app store ID.' },
                ],
                _type: 'enum',
            },
            job_field: {
                _description: 'Immutable. Job Placeholder Fields',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    {
                        s: 'JOB_ID',
                        description:
                            'Data Type: STRING. Required. If only JOB_ID is specified, then it must be\nunique. If both JOB_ID and LOCATION_ID are specified, then the\npair must be unique.\nID) pair must be unique.',
                    },
                    {
                        s: 'LOCATION_ID',
                        description:
                            'Data Type: STRING. Combination of JOB_ID and LOCATION_ID must be unique\nper offer.',
                    },
                    {
                        s: 'TITLE',
                        description:
                            'Data Type: STRING. Required. Main headline with job title to be shown in\ndynamic ad.',
                    },
                    { s: 'SUBTITLE', description: 'Data Type: STRING. Job subtitle to be shown in dynamic ad.' },
                    {
                        s: 'DESCRIPTION',
                        description: 'Data Type: STRING. Description of job to be shown in dynamic ad.',
                    },
                    {
                        s: 'IMAGE_URL',
                        description:
                            'Data Type: URL. Image to be displayed in the ad. Highly recommended for\nimage ads.',
                    },
                    {
                        s: 'CATEGORY',
                        description:
                            'Data Type: STRING. Category of property used to group like items together\nfor recommendation engine.',
                    },
                    {
                        s: 'CONTEXTUAL_KEYWORDS',
                        description: 'Data Type: STRING_LIST. Keywords used for product retrieval.',
                    },
                    {
                        s: 'ADDRESS',
                        description: 'Data Type: STRING. Complete property address, including postal code.',
                    },
                    {
                        s: 'SALARY',
                        description: 'Data Type: STRING. Salary or salary range of job to be shown in dynamic\nad.',
                    },
                    {
                        s: 'FINAL_URLS',
                        description:
                            'Data Type: URL_LIST. Required. Final URLs to be used in ad when using\nUpgraded URLs; the more specific the better (e.g. the individual URL of a\nspecific job and its location).',
                    },
                    {
                        s: 'FINAL_MOBILE_URLS',
                        description: 'Data Type: URL_LIST. Final mobile URLs for the ad when using Upgraded\nURLs.',
                    },
                    {
                        s: 'TRACKING_URL',
                        description: 'Data Type: URL. Tracking template for the ad when using Upgraded URLs.',
                    },
                    {
                        s: 'ANDROID_APP_LINK',
                        description:
                            'Data Type: STRING. Android app link. Must be formatted as:\nandroid-app://{package_id}/{scheme}/{host_path}.\nThe components are defined as follows:\npackage_id: app ID as specified in Google Play.\nscheme: the scheme to pass to the application. Can be HTTP, or a custom\n  scheme.\nhost_path: identifies the specific content within your application.',
                    },
                    {
                        s: 'SIMILAR_JOB_IDS',
                        description:
                            'Data Type: STRING_LIST. List of recommended job IDs to show together with\nthis item.',
                    },
                    { s: 'IOS_APP_LINK', description: 'Data Type: STRING. iOS app link.' },
                    { s: 'IOS_APP_STORE_ID', description: 'Data Type: INT64. iOS app store ID.' },
                ],
                _type: 'enum',
            },
            local_field: {
                _description: 'Immutable. Local Placeholder Fields',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'DEAL_ID', description: 'Data Type: STRING. Required. Unique ID.' },
                    {
                        s: 'DEAL_NAME',
                        description:
                            'Data Type: STRING. Required. Main headline with local deal title to be\nshown in dynamic ad.',
                    },
                    { s: 'SUBTITLE', description: 'Data Type: STRING. Local deal subtitle to be shown in dynamic ad.' },
                    {
                        s: 'DESCRIPTION',
                        description: 'Data Type: STRING. Description of local deal to be shown in dynamic ad.',
                    },
                    {
                        s: 'PRICE',
                        description:
                            'Data Type: STRING. Price to be shown in the ad. Highly recommended for\ndynamic ads. Example: "100.00 USD"',
                    },
                    {
                        s: 'FORMATTED_PRICE',
                        description:
                            'Data Type: STRING. Formatted price to be shown in the ad.\nExample: "Starting at $100.00 USD", "$80 - $100"',
                    },
                    {
                        s: 'SALE_PRICE',
                        description: 'Data Type: STRING. Sale price to be shown in the ad.\nExample: "80.00 USD"',
                    },
                    {
                        s: 'FORMATTED_SALE_PRICE',
                        description:
                            'Data Type: STRING. Formatted sale price to be shown in the ad.\nExample: "On sale for $80.00", "$60 - $80"',
                    },
                    { s: 'IMAGE_URL', description: 'Data Type: URL. Image to be displayed in the ad.' },
                    {
                        s: 'ADDRESS',
                        description: 'Data Type: STRING. Complete property address, including postal code.',
                    },
                    {
                        s: 'CATEGORY',
                        description:
                            'Data Type: STRING. Category of local deal used to group like items\ntogether for recommendation engine.',
                    },
                    {
                        s: 'CONTEXTUAL_KEYWORDS',
                        description: 'Data Type: STRING_LIST. Keywords used for product retrieval.',
                    },
                    {
                        s: 'FINAL_URLS',
                        description:
                            'Data Type: URL_LIST. Required. Final URLs to be used in ad when using\nUpgraded URLs; the more specific the better (e.g. the individual URL of a\nspecific local deal and its location).',
                    },
                    {
                        s: 'FINAL_MOBILE_URLS',
                        description: 'Data Type: URL_LIST. Final mobile URLs for the ad when using Upgraded\nURLs.',
                    },
                    {
                        s: 'TRACKING_URL',
                        description: 'Data Type: URL. Tracking template for the ad when using Upgraded URLs.',
                    },
                    {
                        s: 'ANDROID_APP_LINK',
                        description:
                            'Data Type: STRING. Android app link. Must be formatted as:\nandroid-app://{package_id}/{scheme}/{host_path}.\nThe components are defined as follows:\npackage_id: app ID as specified in Google Play.\nscheme: the scheme to pass to the application. Can be HTTP, or a custom\n  scheme.\nhost_path: identifies the specific content within your application.',
                    },
                    {
                        s: 'SIMILAR_DEAL_IDS',
                        description:
                            'Data Type: STRING_LIST. List of recommended local deal IDs to show\ntogether with this item.',
                    },
                    { s: 'IOS_APP_LINK', description: 'Data Type: STRING. iOS app link.' },
                    { s: 'IOS_APP_STORE_ID', description: 'Data Type: INT64. iOS app store ID.' },
                ],
                _type: 'enum',
            },
            location_extension_targeting_field: {
                _description: 'Immutable. Location Target Fields.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'ADDRESS_LINE_1', description: 'Data Type: STRING. Line 1 of the business address.' },
                    { s: 'ADDRESS_LINE_2', description: 'Data Type: STRING. Line 2 of the business address.' },
                    { s: 'CITY', description: 'Data Type: STRING. City of the business address.' },
                    { s: 'PROVINCE', description: 'Data Type: STRING. Province of the business address.' },
                    { s: 'POSTAL_CODE', description: 'Data Type: STRING. Postal code of the business address.' },
                    { s: 'COUNTRY_CODE', description: 'Data Type: STRING. Country code of the business address.' },
                ],
                _type: 'enum',
            },
            location_field: {
                _description: 'Output only. Location Placeholder Fields. This field is read-only.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'BUSINESS_NAME', description: 'Data Type: STRING. The name of the business.' },
                    { s: 'ADDRESS_LINE_1', description: 'Data Type: STRING. Line 1 of the business address.' },
                    { s: 'ADDRESS_LINE_2', description: 'Data Type: STRING. Line 2 of the business address.' },
                    { s: 'CITY', description: 'Data Type: STRING. City of the business address.' },
                    { s: 'PROVINCE', description: 'Data Type: STRING. Province of the business address.' },
                    { s: 'POSTAL_CODE', description: 'Data Type: STRING. Postal code of the business address.' },
                    { s: 'COUNTRY_CODE', description: 'Data Type: STRING. Country code of the business address.' },
                    { s: 'PHONE_NUMBER', description: 'Data Type: STRING. Phone number of the business.' },
                ],
                _type: 'enum',
            },
            message_field: {
                _description: 'Immutable. Message Placeholder Fields.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'BUSINESS_NAME', description: 'Data Type: STRING. The name of your business.' },
                    { s: 'COUNTRY_CODE', description: 'Data Type: STRING. Country code of phone number.' },
                    {
                        s: 'PHONE_NUMBER',
                        description:
                            "Data Type: STRING. A phone number that's capable of sending and receiving\ntext messages.",
                    },
                    {
                        s: 'MESSAGE_EXTENSION_TEXT',
                        description: 'Data Type: STRING. The text that will go in your click-to-message ad.',
                    },
                    {
                        s: 'MESSAGE_TEXT',
                        description:
                            "Data Type: STRING. The message text automatically shows in people's\nmessaging apps when they tap to send you a message.",
                    },
                ],
                _type: 'enum',
            },
            price_field: {
                _description: 'Immutable. Price Placeholder Fields.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    {
                        s: 'TYPE',
                        description:
                            'Data Type: STRING. The type of your price feed. Must match one of the\npredefined price feed type exactly.',
                    },
                    {
                        s: 'PRICE_QUALIFIER',
                        description:
                            'Data Type: STRING. The qualifier of each price. Must match one of the\npredefined price qualifiers exactly.',
                    },
                    {
                        s: 'TRACKING_TEMPLATE',
                        description: 'Data Type: URL. Tracking template for the price feed when using Upgraded\nURLs.',
                    },
                    {
                        s: 'LANGUAGE',
                        description:
                            'Data Type: STRING. Language of the price feed. Must match one of the\navailable available locale codes exactly.',
                    },
                    {
                        s: 'FINAL_URL_SUFFIX',
                        description:
                            'Data Type: STRING. Final URL suffix for the price feed when using\nparallel tracking.',
                    },
                    { s: 'ITEM_1_HEADER', description: 'Data Type: STRING. The header of item 1 of the table.' },
                    {
                        s: 'ITEM_1_DESCRIPTION',
                        description: 'Data Type: STRING. The description of item 1 of the table.',
                    },
                    {
                        s: 'ITEM_1_PRICE',
                        description:
                            'Data Type: MONEY. The price (money with currency) of item 1 of the table,\ne.g., 30 USD. The currency must match one of the available currencies.',
                    },
                    {
                        s: 'ITEM_1_UNIT',
                        description:
                            'Data Type: STRING. The price unit of item 1 of the table. Must match one\nof the predefined price units.',
                    },
                    {
                        s: 'ITEM_1_FINAL_URLS',
                        description:
                            'Data Type: URL_LIST. The final URLs of item 1 of the table when using\nUpgraded URLs.',
                    },
                    {
                        s: 'ITEM_1_FINAL_MOBILE_URLS',
                        description:
                            'Data Type: URL_LIST. The final mobile URLs of item 1 of the table when\nusing Upgraded URLs.',
                    },
                    { s: 'ITEM_2_HEADER', description: 'Data Type: STRING. The header of item 2 of the table.' },
                    {
                        s: 'ITEM_2_DESCRIPTION',
                        description: 'Data Type: STRING. The description of item 2 of the table.',
                    },
                    {
                        s: 'ITEM_2_PRICE',
                        description:
                            'Data Type: MONEY. The price (money with currency) of item 2 of the table,\ne.g., 30 USD. The currency must match one of the available currencies.',
                    },
                    {
                        s: 'ITEM_2_UNIT',
                        description:
                            'Data Type: STRING. The price unit of item 2 of the table. Must match one\nof the predefined price units.',
                    },
                    {
                        s: 'ITEM_2_FINAL_URLS',
                        description:
                            'Data Type: URL_LIST. The final URLs of item 2 of the table when using\nUpgraded URLs.',
                    },
                    {
                        s: 'ITEM_2_FINAL_MOBILE_URLS',
                        description:
                            'Data Type: URL_LIST. The final mobile URLs of item 2 of the table when\nusing Upgraded URLs.',
                    },
                    { s: 'ITEM_3_HEADER', description: 'Data Type: STRING. The header of item 3 of the table.' },
                    {
                        s: 'ITEM_3_DESCRIPTION',
                        description: 'Data Type: STRING. The description of item 3 of the table.',
                    },
                    {
                        s: 'ITEM_3_PRICE',
                        description:
                            'Data Type: MONEY. The price (money with currency) of item 3 of the table,\ne.g., 30 USD. The currency must match one of the available currencies.',
                    },
                    {
                        s: 'ITEM_3_UNIT',
                        description:
                            'Data Type: STRING. The price unit of item 3 of the table. Must match one\nof the predefined price units.',
                    },
                    {
                        s: 'ITEM_3_FINAL_URLS',
                        description:
                            'Data Type: URL_LIST. The final URLs of item 3 of the table when using\nUpgraded URLs.',
                    },
                    {
                        s: 'ITEM_3_FINAL_MOBILE_URLS',
                        description:
                            'Data Type: URL_LIST. The final mobile URLs of item 3 of the table when\nusing Upgraded URLs.',
                    },
                    { s: 'ITEM_4_HEADER', description: 'Data Type: STRING. The header of item 4 of the table.' },
                    {
                        s: 'ITEM_4_DESCRIPTION',
                        description: 'Data Type: STRING. The description of item 4 of the table.',
                    },
                    {
                        s: 'ITEM_4_PRICE',
                        description:
                            'Data Type: MONEY. The price (money with currency) of item 4 of the table,\ne.g., 30 USD. The currency must match one of the available currencies.',
                    },
                    {
                        s: 'ITEM_4_UNIT',
                        description:
                            'Data Type: STRING. The price unit of item 4 of the table. Must match one\nof the predefined price units.',
                    },
                    {
                        s: 'ITEM_4_FINAL_URLS',
                        description:
                            'Data Type: URL_LIST. The final URLs of item 4 of the table when using\nUpgraded URLs.',
                    },
                    {
                        s: 'ITEM_4_FINAL_MOBILE_URLS',
                        description:
                            'Data Type: URL_LIST. The final mobile URLs of item 4 of the table when\nusing Upgraded URLs.',
                    },
                    { s: 'ITEM_5_HEADER', description: 'Data Type: STRING. The header of item 5 of the table.' },
                    {
                        s: 'ITEM_5_DESCRIPTION',
                        description: 'Data Type: STRING. The description of item 5 of the table.',
                    },
                    {
                        s: 'ITEM_5_PRICE',
                        description:
                            'Data Type: MONEY. The price (money with currency) of item 5 of the table,\ne.g., 30 USD. The currency must match one of the available currencies.',
                    },
                    {
                        s: 'ITEM_5_UNIT',
                        description:
                            'Data Type: STRING. The price unit of item 5 of the table. Must match one\nof the predefined price units.',
                    },
                    {
                        s: 'ITEM_5_FINAL_URLS',
                        description:
                            'Data Type: URL_LIST. The final URLs of item 5 of the table when using\nUpgraded URLs.',
                    },
                    {
                        s: 'ITEM_5_FINAL_MOBILE_URLS',
                        description:
                            'Data Type: URL_LIST. The final mobile URLs of item 5 of the table when\nusing Upgraded URLs.',
                    },
                    { s: 'ITEM_6_HEADER', description: 'Data Type: STRING. The header of item 6 of the table.' },
                    {
                        s: 'ITEM_6_DESCRIPTION',
                        description: 'Data Type: STRING. The description of item 6 of the table.',
                    },
                    {
                        s: 'ITEM_6_PRICE',
                        description:
                            'Data Type: MONEY. The price (money with currency) of item 6 of the table,\ne.g., 30 USD. The currency must match one of the available currencies.',
                    },
                    {
                        s: 'ITEM_6_UNIT',
                        description:
                            'Data Type: STRING. The price unit of item 6 of the table. Must match one\nof the predefined price units.',
                    },
                    {
                        s: 'ITEM_6_FINAL_URLS',
                        description:
                            'Data Type: URL_LIST. The final URLs of item 6 of the table when using\nUpgraded URLs.',
                    },
                    {
                        s: 'ITEM_6_FINAL_MOBILE_URLS',
                        description:
                            'Data Type: URL_LIST. The final mobile URLs of item 6 of the table when\nusing Upgraded URLs.',
                    },
                    { s: 'ITEM_7_HEADER', description: 'Data Type: STRING. The header of item 7 of the table.' },
                    {
                        s: 'ITEM_7_DESCRIPTION',
                        description: 'Data Type: STRING. The description of item 7 of the table.',
                    },
                    {
                        s: 'ITEM_7_PRICE',
                        description:
                            'Data Type: MONEY. The price (money with currency) of item 7 of the table,\ne.g., 30 USD. The currency must match one of the available currencies.',
                    },
                    {
                        s: 'ITEM_7_UNIT',
                        description:
                            'Data Type: STRING. The price unit of item 7 of the table. Must match one\nof the predefined price units.',
                    },
                    {
                        s: 'ITEM_7_FINAL_URLS',
                        description:
                            'Data Type: URL_LIST. The final URLs of item 7 of the table when using\nUpgraded URLs.',
                    },
                    {
                        s: 'ITEM_7_FINAL_MOBILE_URLS',
                        description:
                            'Data Type: URL_LIST. The final mobile URLs of item 7 of the table when\nusing Upgraded URLs.',
                    },
                    { s: 'ITEM_8_HEADER', description: 'Data Type: STRING. The header of item 8 of the table.' },
                    {
                        s: 'ITEM_8_DESCRIPTION',
                        description: 'Data Type: STRING. The description of item 8 of the table.',
                    },
                    {
                        s: 'ITEM_8_PRICE',
                        description:
                            'Data Type: MONEY. The price (money with currency) of item 8 of the table,\ne.g., 30 USD. The currency must match one of the available currencies.',
                    },
                    {
                        s: 'ITEM_8_UNIT',
                        description:
                            'Data Type: STRING. The price unit of item 8 of the table. Must match one\nof the predefined price units.',
                    },
                    {
                        s: 'ITEM_8_FINAL_URLS',
                        description:
                            'Data Type: URL_LIST. The final URLs of item 8 of the table when using\nUpgraded URLs.',
                    },
                    {
                        s: 'ITEM_8_FINAL_MOBILE_URLS',
                        description:
                            'Data Type: URL_LIST. The final mobile URLs of item 8 of the table when\nusing Upgraded URLs.',
                    },
                ],
                _type: 'enum',
            },
            promotion_field: {
                _description: 'Immutable. Promotion Placeholder Fields.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    {
                        s: 'PROMOTION_TARGET',
                        description: 'Data Type: STRING. The text that appears on the ad when the extension is\nshown.',
                    },
                    {
                        s: 'DISCOUNT_MODIFIER',
                        description:
                            'Data Type: STRING. Allows you to add "up to" phrase to the promotion,\nin case you have variable promotion rates.',
                    },
                    {
                        s: 'PERCENT_OFF',
                        description:
                            'Data Type: INT64. Takes a value in micros, where 1 million micros\nrepresents 1%, and is shown as a percentage when rendered.',
                    },
                    {
                        s: 'MONEY_AMOUNT_OFF',
                        description: 'Data Type: MONEY. Requires a currency and an amount of money.',
                    },
                    {
                        s: 'PROMOTION_CODE',
                        description: 'Data Type: STRING. A string that the user enters to get the discount.',
                    },
                    {
                        s: 'ORDERS_OVER_AMOUNT',
                        description: 'Data Type: MONEY. A minimum spend before the user qualifies for the\npromotion.',
                    },
                    { s: 'PROMOTION_START', description: 'Data Type: DATE. The start date of the promotion.' },
                    { s: 'PROMOTION_END', description: 'Data Type: DATE. The end date of the promotion.' },
                    {
                        s: 'OCCASION',
                        description:
                            'Data Type: STRING. Describes the associated event for the promotion using\none of the PromotionExtensionOccasion enum values, for example NEW_YEARS.',
                    },
                    {
                        s: 'FINAL_URLS',
                        description: 'Data Type: URL_LIST. Final URLs to be used in the ad when using Upgraded\nURLs.',
                    },
                    {
                        s: 'FINAL_MOBILE_URLS',
                        description: 'Data Type: URL_LIST. Final mobile URLs for the ad when using Upgraded\nURLs.',
                    },
                    {
                        s: 'TRACKING_URL',
                        description: 'Data Type: URL. Tracking template for the ad when using Upgraded URLs.',
                    },
                    {
                        s: 'LANGUAGE',
                        description: 'Data Type: STRING. A string represented by a language code for the\npromotion.',
                    },
                    {
                        s: 'FINAL_URL_SUFFIX',
                        description: 'Data Type: STRING. Final URL suffix for the ad when using parallel\ntracking.',
                    },
                ],
                _type: 'enum',
            },
            real_estate_field: {
                _description: 'Immutable. Real Estate Placeholder Fields',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'LISTING_ID', description: 'Data Type: STRING. Unique ID.' },
                    {
                        s: 'LISTING_NAME',
                        description: 'Data Type: STRING. Main headline with listing name to be shown in dynamic\nad.',
                    },
                    { s: 'CITY_NAME', description: 'Data Type: STRING. City name to be shown in dynamic ad.' },
                    {
                        s: 'DESCRIPTION',
                        description: 'Data Type: STRING. Description of listing to be shown in dynamic ad.',
                    },
                    {
                        s: 'ADDRESS',
                        description: 'Data Type: STRING. Complete listing address, including postal code.',
                    },
                    {
                        s: 'PRICE',
                        description: 'Data Type: STRING. Price to be shown in the ad.\nExample: "100.00 USD"',
                    },
                    {
                        s: 'FORMATTED_PRICE',
                        description:
                            'Data Type: STRING. Formatted price to be shown in the ad.\nExample: "Starting at $100.00 USD", "$80 - $100"',
                    },
                    { s: 'IMAGE_URL', description: 'Data Type: URL. Image to be displayed in the ad.' },
                    {
                        s: 'PROPERTY_TYPE',
                        description:
                            'Data Type: STRING. Type of property (house, condo, apartment, etc.) used\nto group like items together for recommendation engine.',
                    },
                    {
                        s: 'LISTING_TYPE',
                        description:
                            'Data Type: STRING. Type of listing (resale, rental, foreclosure, etc.)\nused to group like items together for recommendation engine.',
                    },
                    {
                        s: 'CONTEXTUAL_KEYWORDS',
                        description: 'Data Type: STRING_LIST. Keywords used for product retrieval.',
                    },
                    {
                        s: 'FINAL_URLS',
                        description:
                            'Data Type: URL_LIST. Final URLs to be used in ad when using Upgraded\nURLs; the more specific the better (e.g. the individual URL of a specific\nlisting and its location).',
                    },
                    {
                        s: 'FINAL_MOBILE_URLS',
                        description: 'Data Type: URL_LIST. Final mobile URLs for the ad when using Upgraded\nURLs.',
                    },
                    {
                        s: 'TRACKING_URL',
                        description: 'Data Type: URL. Tracking template for the ad when using Upgraded URLs.',
                    },
                    {
                        s: 'ANDROID_APP_LINK',
                        description:
                            'Data Type: STRING. Android app link. Must be formatted as:\nandroid-app://{package_id}/{scheme}/{host_path}.\nThe components are defined as follows:\npackage_id: app ID as specified in Google Play.\nscheme: the scheme to pass to the application. Can be HTTP, or a custom\n  scheme.\nhost_path: identifies the specific content within your application.',
                    },
                    {
                        s: 'SIMILAR_LISTING_IDS',
                        description:
                            'Data Type: STRING_LIST. List of recommended listing IDs to show together\nwith this item.',
                    },
                    { s: 'IOS_APP_LINK', description: 'Data Type: STRING. iOS app link.' },
                    { s: 'IOS_APP_STORE_ID', description: 'Data Type: INT64. iOS app store ID.' },
                ],
                _type: 'enum',
            },
            sitelink_field: {
                _description: 'Immutable. Sitelink Placeholder Fields.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'TEXT', description: 'Data Type: STRING. The link text for your sitelink.' },
                    { s: 'LINE_1', description: 'Data Type: STRING. First line of the sitelink description.' },
                    { s: 'LINE_2', description: 'Data Type: STRING. Second line of the sitelink description.' },
                    {
                        s: 'FINAL_URLS',
                        description: 'Data Type: URL_LIST. Final URLs for the sitelink when using Upgraded\nURLs.',
                    },
                    {
                        s: 'FINAL_MOBILE_URLS',
                        description:
                            'Data Type: URL_LIST. Final Mobile URLs for the sitelink when using\nUpgraded URLs.',
                    },
                    {
                        s: 'TRACKING_URL',
                        description: 'Data Type: URL. Tracking template for the sitelink when using Upgraded\nURLs.',
                    },
                    {
                        s: 'FINAL_URL_SUFFIX',
                        description: 'Data Type: STRING. Final URL suffix for sitelink when using parallel\ntracking.',
                    },
                ],
                _type: 'enum',
            },
            structured_snippet_field: {
                _description: 'Immutable. Structured Snippet Placeholder Fields.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    {
                        s: 'HEADER',
                        description:
                            'Data Type: STRING. The category of snippet of your products/services.\nMust match exactly one of the predefined structured snippets headers.\nFor a list, visit\nhttps://developers.google.com/adwords/api/docs/appendix/structured-snippet-headers',
                    },
                    {
                        s: 'SNIPPETS',
                        description:
                            'Data Type: STRING_LIST. Text values that describe your products/services.\nAll text must be family safe. Special or non-ASCII characters are not\npermitted. A snippet can be at most 25 characters.',
                    },
                ],
                _type: 'enum',
            },
            travel_field: {
                _description: 'Immutable. Travel Placeholder Fields',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    {
                        s: 'DESTINATION_ID',
                        description:
                            'Data Type: STRING. Required. Destination id. Example: PAR, LON.\nFor feed items that only have destination id, destination id must be a\nunique key. For feed items that have both destination id and origin id,\nthen the combination must be a unique key.',
                    },
                    {
                        s: 'ORIGIN_ID',
                        description:
                            'Data Type: STRING. Origin id. Example: PAR, LON.\nCombination of DESTINATION_ID and ORIGIN_ID must be\nunique per offer.',
                    },
                    {
                        s: 'TITLE',
                        description: 'Data Type: STRING. Required. Main headline with name to be shown in\ndynamic ad.',
                    },
                    {
                        s: 'DESTINATION_NAME',
                        description: 'Data Type: STRING. The destination name. Shorter names are recommended.',
                    },
                    { s: 'ORIGIN_NAME', description: 'Data Type: STRING. Origin name. Shorter names are recommended.' },
                    {
                        s: 'PRICE',
                        description:
                            'Data Type: STRING. Price to be shown in the ad. Highly recommended for\ndynamic ads.\nExample: "100.00 USD"',
                    },
                    {
                        s: 'FORMATTED_PRICE',
                        description:
                            'Data Type: STRING. Formatted price to be shown in the ad.\nExample: "Starting at $100.00 USD", "$80 - $100"',
                    },
                    {
                        s: 'SALE_PRICE',
                        description: 'Data Type: STRING. Sale price to be shown in the ad.\nExample: "80.00 USD"',
                    },
                    {
                        s: 'FORMATTED_SALE_PRICE',
                        description:
                            'Data Type: STRING. Formatted sale price to be shown in the ad.\nExample: "On sale for $80.00", "$60 - $80"',
                    },
                    { s: 'IMAGE_URL', description: 'Data Type: URL. Image to be displayed in the ad.' },
                    {
                        s: 'CATEGORY',
                        description:
                            'Data Type: STRING. Category of travel offer used to group like items\ntogether for recommendation engine.',
                    },
                    {
                        s: 'CONTEXTUAL_KEYWORDS',
                        description: 'Data Type: STRING_LIST. Keywords used for product retrieval.',
                    },
                    {
                        s: 'DESTINATION_ADDRESS',
                        description: 'Data Type: STRING. Address of travel offer, including postal code.',
                    },
                    {
                        s: 'FINAL_URL',
                        description:
                            'Data Type: URL_LIST. Required. Final URLs to be used in ad, when using\nUpgraded URLs; the more specific the better (e.g. the individual URL of a\nspecific travel offer and its location).',
                    },
                    {
                        s: 'FINAL_MOBILE_URLS',
                        description: 'Data Type: URL_LIST. Final mobile URLs for the ad when using Upgraded\nURLs.',
                    },
                    {
                        s: 'TRACKING_URL',
                        description: 'Data Type: URL. Tracking template for the ad when using Upgraded URLs.',
                    },
                    {
                        s: 'ANDROID_APP_LINK',
                        description:
                            'Data Type: STRING. Android app link. Must be formatted as:\nandroid-app://{package_id}/{scheme}/{host_path}.\nThe components are defined as follows:\npackage_id: app ID as specified in Google Play.\nscheme: the scheme to pass to the application. Can be HTTP, or a custom\n  scheme.\nhost_path: identifies the specific content within your application.',
                    },
                    {
                        s: 'SIMILAR_DESTINATION_IDS',
                        description:
                            'Data Type: STRING_LIST. List of recommended destination IDs to show\ntogether with this item.',
                    },
                    { s: 'IOS_APP_LINK', description: 'Data Type: STRING. iOS app link.' },
                    { s: 'IOS_APP_STORE_ID', description: 'Data Type: INT64. iOS app store ID.' },
                ],
                _type: 'enum',
            },
        },
        criterion_type: {
            _description:
                'Immutable. The criterion type of this mapping (i.e., if the mapping maps feed attributes to criterion fields).',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'LOCATION_EXTENSION_TARGETING',
                    description: 'Allows campaign targeting at locations within a location feed.',
                },
                {
                    s: 'DSA_PAGE_FEED',
                    description: 'Allows url targeting for your dynamic search ads within a page feed.',
                },
            ],
            _oneof: 'target',
            _type: 'enum',
        },
        feed: { _description: 'Immutable. The feed of this feed mapping.', _type: 'string' },
        placeholder_type: {
            _description:
                'Immutable. The placeholder type of this mapping (i.e., if the mapping maps feed attributes to placeholder fields).',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
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
                    description: 'Lets you dynamically inject custom data into the title and description\nof your ads.',
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
                { s: 'DYNAMIC_LOCAL', description: 'Indicates that this feed is for local deals dynamic remarketing.' },
                { s: 'DYNAMIC_JOB', description: 'Indicates that this feed is for job dynamic remarketing.' },
            ],
            _oneof: 'target',
            _type: 'enum',
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the feed mapping. Feed mapping resource names have the form: <code>customers/{customer_id}/feedMappings/{feed_id}~{feed_mapping_id}</code>',
            _type: 'string',
        },
        status: {
            _description: 'Output only. Status of the feed mapping. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'Feed mapping is enabled.' },
                { s: 'REMOVED', description: 'Feed mapping has been removed.' },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
