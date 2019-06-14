module.exports = {
    name: 'Recommendation',
    object: {
        ad_group: {
            _description:
                'The ad group targeted by this recommendation. This will be set only when the recommendation affects a single ad group. This field will be set for the following recommendation types: KEYWORD, OPTIMIZE_AD_ROTATION, TEXT_AD',
            _type: 'string',
        },
        call_extension_recommendation: {
            _oneof: 'recommendation',
            recommended_extensions: { _description: 'Call extensions recommended to be added.', _type: 'array' },
        },
        callout_extension_recommendation: {
            _oneof: 'recommendation',
            recommended_extensions: { _description: 'Callout extensions recommended to be added.', _type: 'array' },
        },
        campaign: {
            _description:
                'The campaign targeted by this recommendation. This will be set only when the recommendation affects a single campaign. This field will be set for the following recommendation types: ENHANCED_CPC_OPT_IN, KEYWORD, MAXIMIZE_CLICKS_OPT_IN, MAXIMIZE_CONVERSIONS_OPT_IN, OPTIMIZE_AD_ROTATION, SEARCH_PARTNERS_OPT_IN, TARGET_CPA_OPT_IN, TEXT_AD',
            _type: 'string',
        },
        campaign_budget: {
            _description:
                'The budget targeted by this recommendation. This will be set only when the recommendation affects a single campaign budget. This field will be set for the following recommendation types: CAMPAIGN_BUDGET',
            _type: 'string',
        },
        campaign_budget_recommendation: {
            _oneof: 'recommendation',
            budget_options: {
                _description:
                    'The budget amounts and associated impact estimates for some values of possible budget amounts.',
                _type: 'array',
            },
            current_budget_amount_micros: { _description: 'The current budget amount in micros.', _type: 'int64' },
            recommended_budget_amount_micros: {
                _description: 'The recommended budget amount in micros.',
                _type: 'int64',
            },
        },
        dismissed: { _description: 'Whether the recommendation is dismissed or not.', _type: 'boolean' },
        enhanced_cpc_opt_in_recommendation: { _oneof: 'recommendation' },
        impact: {
            base_metrics: {
                clicks: { _description: 'Number of ad clicks.', _type: 'double' },
                conversions: { _description: 'Number of conversions.', _type: 'double' },
                cost_micros: {
                    _description: 'Cost (in micros) for advertising, in the local currency for the account.',
                    _type: 'int64',
                },
                impressions: { _description: 'Number of ad impressions.', _type: 'double' },
                video_views: { _description: 'Number of video views for a video ad campaign.', _type: 'double' },
            },
            potential_metrics: {
                clicks: { _description: 'Number of ad clicks.', _type: 'double' },
                conversions: { _description: 'Number of conversions.', _type: 'double' },
                cost_micros: {
                    _description: 'Cost (in micros) for advertising, in the local currency for the account.',
                    _type: 'int64',
                },
                impressions: { _description: 'Number of ad impressions.', _type: 'double' },
                video_views: { _description: 'Number of video views for a video ad campaign.', _type: 'double' },
            },
        },
        keyword_match_type_recommendation: {
            _oneof: 'recommendation',
            keyword: {
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
                text: {
                    _description: 'The text of the keyword (at most 80 characters and 10 words).',
                    _type: 'string',
                },
            },
            recommended_match_type: {
                _description: 'The recommended new match type.',
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
        },
        keyword_recommendation: {
            _oneof: 'recommendation',
            keyword: {
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
                text: {
                    _description: 'The text of the keyword (at most 80 characters and 10 words).',
                    _type: 'string',
                },
            },
            recommended_cpc_bid_micros: { _description: 'The recommended CPC (cost-per-click) bid.', _type: 'int64' },
        },
        maximize_clicks_opt_in_recommendation: {
            _oneof: 'recommendation',
            recommended_budget_amount_micros: {
                _description: 'The recommended new budget amount. Only set if the current budget is too high.',
                _type: 'int64',
            },
        },
        maximize_conversions_opt_in_recommendation: {
            _oneof: 'recommendation',
            recommended_budget_amount_micros: { _description: 'The recommended new budget amount.', _type: 'int64' },
        },
        move_unused_budget_recommendation: {
            _oneof: 'recommendation',
            budget_recommendation: {
                budget_options: {
                    _description:
                        'The budget amounts and associated impact estimates for some values of possible budget amounts.',
                    _type: 'array',
                },
                current_budget_amount_micros: { _description: 'The current budget amount in micros.', _type: 'int64' },
                recommended_budget_amount_micros: {
                    _description: 'The recommended budget amount in micros.',
                    _type: 'int64',
                },
            },
            excess_campaign_budget: { _description: "The excess budget's resource_name.", _type: 'string' },
        },
        optimize_ad_rotation_recommendation: { _oneof: 'recommendation' },
        resource_name: {
            _description:
                'The resource name of the recommendation. <code>customers/{customer_id}/recommendations/{recommendation_id}</code>',
            _type: 'string',
        },
        search_partners_opt_in_recommendation: { _oneof: 'recommendation' },
        sitelink_extension_recommendation: {
            _oneof: 'recommendation',
            recommended_extensions: { _description: 'Sitelink extensions recommended to be added.', _type: 'array' },
        },
        target_cpa_opt_in_recommendation: {
            _oneof: 'recommendation',
            options: {
                _description: 'The available goals and corresponding options for Target CPA strategy.',
                _type: 'array',
            },
            recommended_target_cpa_micros: {
                _description:
                    'The recommended average CPA target. See required budget amount and impact of using this recommendation in options list.',
                _type: 'int64',
            },
        },
        text_ad_recommendation: {
            _oneof: 'recommendation',
            ad: {
                added_by_google_ads: {
                    _description:
                        'Indicates if this ad was automatically added by Google Ads and not by a user. For example, this could happen when ads are automatically created as suggestions for new ads based on knowledge of how existing ads are performing.',
                    _type: 'boolean',
                },
                app_ad: {
                    _oneof: 'adData',
                    descriptions: {
                        _description:
                            'List of text assets for descriptions. When the ad serves the descriptions will be selected from this list.',
                        _type: 'array',
                    },
                    headlines: {
                        _description:
                            'List of text assets for headlines. When the ad serves the headlines will be selected from this list.',
                        _type: 'array',
                    },
                    html_5_media_bundles: {
                        _description: 'List of media bundle assets that may be used with the ad.',
                        _type: 'array',
                    },
                    images: { _description: 'List of image assets that may be displayed with the ad.', _type: 'array' },
                    mandatory_ad_text: {
                        pinned_field: {
                            _description:
                                'The pinned field of the asset. This restricts the asset to only serve within this field. Multiple assets can be pinned to the same field. An asset that is unpinned or pinned to a different field will not serve in a field where some other asset has been pinned.',
                            _enums: [
                                { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                                {
                                    s: 'UNKNOWN',
                                    description:
                                        'The received value is not known in this version.\n\nThis is a response-only value.',
                                },
                                { s: 'HEADLINE_1', description: 'The asset is used in headline 1.' },
                                { s: 'HEADLINE_2', description: 'The asset is used in headline 2.' },
                                { s: 'HEADLINE_3', description: 'The asset is used in headline 3.' },
                                { s: 'DESCRIPTION_1', description: 'The asset is used in description 1.' },
                                { s: 'DESCRIPTION_2', description: 'The asset is used in description 2.' },
                            ],
                            _type: 'enum',
                        },
                        text: { _description: 'Asset text.', _type: 'string' },
                    },
                    youtube_videos: {
                        _description: 'List of YouTube video assets that may be displayed with the ad.',
                        _type: 'array',
                    },
                },
                app_engagement_ad: {
                    _oneof: 'adData',
                    descriptions: {
                        _description:
                            'List of text assets for descriptions. When the ad serves the descriptions will be selected from this list.',
                        _type: 'array',
                    },
                    headlines: {
                        _description:
                            'List of text assets for headlines. When the ad serves the headlines will be selected from this list.',
                        _type: 'array',
                    },
                    images: { _description: 'List of image assets that may be displayed with the ad.', _type: 'array' },
                    videos: { _description: 'List of video assets that may be displayed with the ad.', _type: 'array' },
                },
                call_only_ad: {
                    _oneof: 'adData',
                    business_name: { _description: 'The business name in the ad.', _type: 'string' },
                    call_tracked: {
                        _description:
                            'Whether to enable call tracking for the creative. Enabling call tracking also enables call conversions.',
                        _type: 'boolean',
                    },
                    conversion_action: {
                        _description:
                            'The conversion action to attribute a call conversion to. If not set a default conversion action is used. This field only has effect if call_tracked is set to true. Otherwise this field is ignored.',
                        _type: 'string',
                    },
                    conversion_reporting_state: {
                        _description:
                            'The call conversion behavior of this call only ad. It can use its own call conversion setting, inherit the account level setting, or be disabled.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                            },
                            { s: 'DISABLED', description: 'Call conversion action is disabled.' },
                            {
                                s: 'USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION',
                                description:
                                    'Call conversion action will use call conversion type set at the\naccount level.',
                            },
                            {
                                s: 'USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION',
                                description:
                                    'Call conversion action will use call conversion type set at the resource\n(call only ads/call extensions) level.',
                            },
                        ],
                        _type: 'enum',
                    },
                    country_code: { _description: 'The country code in the ad.', _type: 'string' },
                    description1: { _description: "The first line of the ad's description.", _type: 'string' },
                    description2: { _description: "The second line of the ad's description.", _type: 'string' },
                    disable_call_conversion: {
                        _description:
                            'Whether to disable call conversion for the creative. If set to <code>true</code>, disables call conversions even when <code>call_tracked</code> is <code>true</code>. If <code>call_tracked</code> is <code>false</code>, this field is ignored.',
                        _type: 'boolean',
                    },
                    headline1: { _description: 'First headline in the ad.', _type: 'string' },
                    headline2: { _description: 'Second headline in the ad.', _type: 'string' },
                    phone_number: { _description: 'The phone number in the ad.', _type: 'string' },
                    phone_number_verification_url: {
                        _description: 'The URL to be used for phone number verification.',
                        _type: 'string',
                    },
                },
                device_preference: {
                    _description:
                        'The device preference for the ad. You can only specify a preference for mobile devices. When this preference is set the ad will be preferred over other ads when being displayed on a mobile device. The ad can still be displayed on other device types, e.g. if no other ads are available. If unspecified (no device preference), all devices are targeted. This is only supported by some ad types.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.' },
                        { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                        { s: 'MOBILE', description: 'Mobile devices with full browsers.' },
                        { s: 'TABLET', description: 'Tablets with full browsers.' },
                        { s: 'DESKTOP', description: 'Computers.' },
                        { s: 'OTHER', description: 'Other device types.' },
                    ],
                    _type: 'enum',
                },
                display_upload_ad: {
                    _oneof: 'adData',
                    display_upload_product_type: {
                        _description: 'The product type of this ad. See comments on the enum for details.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                            {
                                s: 'HTML5_UPLOAD_AD',
                                description:
                                    'HTML5 upload ad. This product type requires the upload_media_bundle\nfield in DisplayUploadAdInfo to be set.',
                            },
                            {
                                s: 'DYNAMIC_HTML5_EDUCATION_AD',
                                description:
                                    'Dynamic HTML5 education ad. This product type requires the\nupload_media_bundle field in DisplayUploadAdInfo to be set. Can only be\nused in an education campaign.',
                            },
                            {
                                s: 'DYNAMIC_HTML5_FLIGHT_AD',
                                description:
                                    'Dynamic HTML5 flight ad. This product type requires the\nupload_media_bundle field in DisplayUploadAdInfo to be set. Can only be\nused in a flight campaign.',
                            },
                            {
                                s: 'DYNAMIC_HTML5_HOTEL_RENTAL_AD',
                                description:
                                    'Dynamic HTML5 hotel and rental ad. This product type requires the\nupload_media_bundle field in DisplayUploadAdInfo to be set. Can only be\nused in a hotel campaign.',
                            },
                            {
                                s: 'DYNAMIC_HTML5_JOB_AD',
                                description:
                                    'Dynamic HTML5 job ad. This product type requires the\nupload_media_bundle field in DisplayUploadAdInfo to be set. Can only be\nused in a job campaign.',
                            },
                            {
                                s: 'DYNAMIC_HTML5_LOCAL_AD',
                                description:
                                    'Dynamic HTML5 local ad. This product type requires the\nupload_media_bundle field in DisplayUploadAdInfo to be set. Can only be\nused in a local campaign.',
                            },
                            {
                                s: 'DYNAMIC_HTML5_REAL_ESTATE_AD',
                                description:
                                    'Dynamic HTML5 real estate ad. This product type requires the\nupload_media_bundle field in DisplayUploadAdInfo to be set. Can only be\nused in a real estate campaign.',
                            },
                            {
                                s: 'DYNAMIC_HTML5_CUSTOM_AD',
                                description:
                                    'Dynamic HTML5 custom ad. This product type requires the\nupload_media_bundle field in DisplayUploadAdInfo to be set. Can only be\nused in a custom campaign.',
                            },
                            {
                                s: 'DYNAMIC_HTML5_TRAVEL_AD',
                                description:
                                    'Dynamic HTML5 travel ad. This product type requires the\nupload_media_bundle field in DisplayUploadAdInfo to be set. Can only be\nused in a travel campaign.',
                            },
                            {
                                s: 'DYNAMIC_HTML5_HOTEL_AD',
                                description:
                                    'Dynamic HTML5 hotel ad. This product type requires the\nupload_media_bundle field in DisplayUploadAdInfo to be set. Can only be\nused in a hotel campaign.',
                            },
                        ],
                        _type: 'enum',
                    },
                    media_bundle: {
                        asset: { _description: 'The Asset resource name of this media bundle.', _type: 'string' },
                    },
                },
                display_url: {
                    _description: 'The URL that appears in the ad description for some ad formats.',
                    _type: 'string',
                },
                expanded_dynamic_search_ad: {
                    _oneof: 'adData',
                    description: { _description: 'The description of the ad.', _type: 'string' },
                },
                expanded_text_ad: {
                    _oneof: 'adData',
                    description: { _description: 'The description of the ad.', _type: 'string' },
                    description2: { _description: 'The second description of the ad.', _type: 'string' },
                    headline_part1: { _description: "The first part of the ad's headline.", _type: 'string' },
                    headline_part2: { _description: "The second part of the ad's headline.", _type: 'string' },
                    headline_part3: { _description: "The third part of the ad's headline.", _type: 'string' },
                    path1: {
                        _description: "The text that can appear alongside the ad's displayed URL.",
                        _type: 'string',
                    },
                    path2: {
                        _description: "Additional text that can appear alongside the ad's displayed URL.",
                        _type: 'string',
                    },
                },
                final_app_urls: {
                    _description:
                        'A list of final app URLs that will be used on mobile if the user has the specific app installed.',
                    _type: 'array',
                },
                final_mobile_urls: {
                    _description: 'The list of possible final mobile URLs after all cross-domain redirects for the ad.',
                    _type: 'array',
                },
                final_urls: {
                    _description: 'The list of possible final URLs after all cross-domain redirects for the ad.',
                    _type: 'array',
                },
                gmail_ad: {
                    _oneof: 'adData',
                    header_image: {
                        _description:
                            'The MediaFile resource name of the header image. Valid image types are GIF, JPEG and PNG. The minimum size is 300x100 pixels and the aspect ratio must be between 3:1 and 5:1 (+-1%).',
                        _type: 'string',
                    },
                    marketing_image: {
                        _description:
                            'The MediaFile resource name of the marketing image. Valid image types are GIF, JPEG and PNG. The image must either be landscape with a minimum size of 600x314 pixels and aspect ratio of 600:314 (+-1%) or square with a minimum size of 300x300 pixels and aspect ratio of 1:1 (+-1%)',
                        _type: 'string',
                    },
                    marketing_image_description: {
                        _description: 'Description of the marketing image.',
                        _type: 'string',
                    },
                    marketing_image_display_call_to_action: {
                        text: { _description: 'Text for the display-call-to-action.', _type: 'string' },
                        text_color: {
                            _description:
                                'Text color for the display-call-to-action in hexadecimal, e.g. #ffffff for white.',
                            _type: 'string',
                        },
                        url_collection_id: {
                            _description:
                                'Identifies the url collection in the ad.url_collections field. If not set the url defaults to final_url.',
                            _type: 'string',
                        },
                    },
                    marketing_image_headline: { _description: 'Headline of the marketing image.', _type: 'string' },
                    product_images: { _description: 'Product images. Up to 15 images are supported.', _type: 'array' },
                    product_videos: {
                        _description:
                            'Product videos. Up to 7 videos are supported. At least one product video or a marketing image must be specified.',
                        _type: 'array',
                    },
                    teaser: {
                        business_name: { _description: 'Business name of the advertiser.', _type: 'string' },
                        description: { _description: 'Description of the teaser.', _type: 'string' },
                        headline: { _description: 'Headline of the teaser.', _type: 'string' },
                        logo_image: {
                            _description:
                                'The MediaFile resource name of the logo image. Valid image types are GIF, JPEG and PNG. The minimum size is 144x144 pixels and the aspect ratio must be 1:1 (+-1%).',
                            _type: 'string',
                        },
                    },
                },
                hotel_ad: { _oneof: 'adData' },
                id: { _description: 'The ID of the ad.', _type: 'int64' },
                image_ad: {
                    _oneof: 'adData',
                    ad_id_to_copy_image_from: { _description: 'An ad ID to copy the image from.', _type: 'int64' },
                    data: { _description: 'Raw image data as bytes.', _type: 'byte' },
                    image_url: { _description: 'URL of the full size image.', _type: 'string' },
                    media_file: { _description: 'The MediaFile resource to use for the image.', _type: 'string' },
                    mime_type: {
                        _description: 'The mime type of the image.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'The mime type has not been specified.' },
                            {
                                s: 'UNKNOWN',
                                description:
                                    'The received value is not known in this version.\n\nThis is a response-only value.',
                            },
                            { s: 'IMAGE_JPEG', description: 'MIME type of image/jpeg.' },
                            { s: 'IMAGE_GIF', description: 'MIME type of image/gif.' },
                            { s: 'IMAGE_PNG', description: 'MIME type of image/png.' },
                            { s: 'FLASH', description: 'MIME type of application/x-shockwave-flash.' },
                            { s: 'TEXT_HTML', description: 'MIME type of text/html.' },
                            { s: 'PDF', description: 'MIME type of application/pdf.' },
                            { s: 'MSWORD', description: 'MIME type of application/msword.' },
                            { s: 'MSEXCEL', description: 'MIME type of application/vnd.ms-excel.' },
                            { s: 'RTF', description: 'MIME type of application/rtf.' },
                            { s: 'AUDIO_WAV', description: 'MIME type of audio/wav.' },
                            { s: 'AUDIO_MP3', description: 'MIME type of audio/mp3.' },
                            { s: 'HTML5_AD_ZIP', description: 'MIME type of application/x-html5-ad-zip.' },
                        ],
                        _type: 'enum',
                    },
                    name: {
                        _description:
                            "The name of the image. If the image was created from a MediaFile, this is the MediaFile's name. If the image was created from bytes, this is empty.",
                        _type: 'string',
                    },
                    pixel_height: { _description: 'Height in pixels of the full size image.', _type: 'int64' },
                    pixel_width: { _description: 'Width in pixels of the full size image.', _type: 'int64' },
                    preview_image_url: { _description: 'URL of the preview size image.', _type: 'string' },
                    preview_pixel_height: {
                        _description: 'Height in pixels of the preview size image.',
                        _type: 'int64',
                    },
                    preview_pixel_width: { _description: 'Width in pixels of the preview size image.', _type: 'int64' },
                },
                legacy_app_install_ad: {
                    _oneof: 'adData',
                    app_id: { _description: 'The id of the mobile app.', _type: 'string' },
                    app_store: {
                        _description: 'The app store the mobile app is available in.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                            },
                            { s: 'APPLE_APP_STORE', description: 'Apple iTunes.' },
                            { s: 'GOOGLE_PLAY', description: 'Google Play.' },
                            { s: 'WINDOWS_STORE', description: 'Windows Store.' },
                            { s: 'WINDOWS_PHONE_STORE', description: 'Windows Phone Store.' },
                            { s: 'CN_APP_STORE', description: 'The app is hosted in a Chinese app store.' },
                        ],
                        _type: 'enum',
                    },
                    description1: { _description: 'The first description line of the ad.', _type: 'string' },
                    description2: { _description: 'The second description line of the ad.', _type: 'string' },
                    headline: { _description: 'The headline of the ad.', _type: 'string' },
                },
                legacy_responsive_display_ad: {
                    _oneof: 'adData',
                    accent_color: {
                        _description:
                            'The accent color of the ad in hexadecimal, e.g. #ffffff for white. If one of main_color and accent_color is set, the other is required as well.',
                        _type: 'string',
                    },
                    allow_flexible_color: {
                        _description:
                            "Advertiser's consent to allow flexible color. When true, the ad may be served with different color if necessary. When false, the ad will be served with the specified colors or a neutral color. The default value is true. Must be true if main_color and accent_color are not set.",
                        _type: 'boolean',
                    },
                    business_name: { _description: 'The business name in the ad.', _type: 'string' },
                    call_to_action_text: { _description: 'The call-to-action text for the ad.', _type: 'string' },
                    description: { _description: 'The description of the ad.', _type: 'string' },
                    format_setting: {
                        _description: 'Specifies which format the ad will be served in. Default is ALL_FORMATS.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                            { s: 'ALL_FORMATS', description: 'Text, image and native formats.' },
                            { s: 'NON_NATIVE', description: 'Text and image formats.' },
                            {
                                s: 'NATIVE',
                                description:
                                    'Native format, i.e. the format rendering is controlled by the publisher\nand not by Google.',
                            },
                        ],
                        _type: 'enum',
                    },
                    logo_image: {
                        _description: 'The MediaFile resource name of the logo image used in the ad.',
                        _type: 'string',
                    },
                    long_headline: { _description: "The long version of the ad's headline.", _type: 'string' },
                    main_color: {
                        _description:
                            'The main color of the ad in hexadecimal, e.g. #ffffff for white. If one of main_color and accent_color is set, the other is required as well.',
                        _type: 'string',
                    },
                    marketing_image: {
                        _description: 'The MediaFile resource name of the marketing image used in the ad.',
                        _type: 'string',
                    },
                    price_prefix: { _description: "Prefix before price. E.g. 'as low as'.", _type: 'string' },
                    promo_text: {
                        _description:
                            "Promotion text used for dyanmic formats of responsive ads. For example 'Free two-day shipping'.",
                        _type: 'string',
                    },
                    short_headline: { _description: "The short version of the ad's headline.", _type: 'string' },
                    square_logo_image: {
                        _description: 'The MediaFile resource name of the square logo image used in the ad.',
                        _type: 'string',
                    },
                    square_marketing_image: {
                        _description: 'The MediaFile resource name of the square marketing image used in the ad.',
                        _type: 'string',
                    },
                },
                name: {
                    _description:
                        'The name of the ad. This is only used to be able to identify the ad. It does not need to be unique and does not affect the served ad.',
                    _type: 'string',
                },
                responsive_display_ad: {
                    _oneof: 'adData',
                    accent_color: {
                        _description:
                            'The accent color of the ad in hexadecimal, e.g. #ffffff for white. If one of main_color and accent_color is set, the other is required as well.',
                        _type: 'string',
                    },
                    allow_flexible_color: {
                        _description:
                            "Advertiser's consent to allow flexible color. When true, the ad may be served with different color if necessary. When false, the ad will be served with the specified colors or a neutral color. The default value is true. Must be true if main_color and accent_color are not set.",
                        _type: 'boolean',
                    },
                    business_name: {
                        _description: 'The advertiser/brand name. Maximum display width is 25.',
                        _type: 'string',
                    },
                    call_to_action_text: {
                        _description: 'The call-to-action text for the ad. Maximum display width is 30.',
                        _type: 'string',
                    },
                    descriptions: {
                        _description:
                            'Descriptive texts for the ad. The maximum length is 90 characters. At least 1 and max 5 headlines can be specified.',
                        _type: 'array',
                    },
                    format_setting: {
                        _description: 'Specifies which format the ad will be served in. Default is ALL_FORMATS.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                            { s: 'ALL_FORMATS', description: 'Text, image and native formats.' },
                            { s: 'NON_NATIVE', description: 'Text and image formats.' },
                            {
                                s: 'NATIVE',
                                description:
                                    'Native format, i.e. the format rendering is controlled by the publisher\nand not by Google.',
                            },
                        ],
                        _type: 'enum',
                    },
                    headlines: {
                        _description:
                            'Short format headlines for the ad. The maximum length is 30 characters. At least 1 and max 5 headlines can be specified.',
                        _type: 'array',
                    },
                    logo_images: {
                        _description:
                            'Logo images to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 512x128 and the aspect ratio must be 4:1 (+-1%). Combined with square_logo_images the maximum is 5.',
                        _type: 'array',
                    },
                    long_headline: {
                        pinned_field: {
                            _description:
                                'The pinned field of the asset. This restricts the asset to only serve within this field. Multiple assets can be pinned to the same field. An asset that is unpinned or pinned to a different field will not serve in a field where some other asset has been pinned.',
                            _enums: [
                                { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                                {
                                    s: 'UNKNOWN',
                                    description:
                                        'The received value is not known in this version.\n\nThis is a response-only value.',
                                },
                                { s: 'HEADLINE_1', description: 'The asset is used in headline 1.' },
                                { s: 'HEADLINE_2', description: 'The asset is used in headline 2.' },
                                { s: 'HEADLINE_3', description: 'The asset is used in headline 3.' },
                                { s: 'DESCRIPTION_1', description: 'The asset is used in description 1.' },
                                { s: 'DESCRIPTION_2', description: 'The asset is used in description 2.' },
                            ],
                            _type: 'enum',
                        },
                        text: { _description: 'Asset text.', _type: 'string' },
                    },
                    main_color: {
                        _description:
                            'The main color of the ad in hexadecimal, e.g. #ffffff for white. If one of main_color and accent_color is set, the other is required as well.',
                        _type: 'string',
                    },
                    marketing_images: {
                        _description:
                            'Marketing images to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 600x314 and the aspect ratio must be 1.91:1 (+-1%). At least one marketing_image is required. Combined with square_marketing_images the maximum is 15.',
                        _type: 'array',
                    },
                    price_prefix: { _description: "Prefix before price. E.g. 'as low as'.", _type: 'string' },
                    promo_text: {
                        _description:
                            "Promotion text used for dyanmic formats of responsive ads. For example 'Free two-day shipping'.",
                        _type: 'string',
                    },
                    square_logo_images: {
                        _description:
                            'Square logo images to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 128x128 and the aspect ratio must be 1:1 (+-1%). Combined with square_logo_images the maximum is 5.',
                        _type: 'array',
                    },
                    square_marketing_images: {
                        _description:
                            'Square marketing images to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 300x300 and the aspect ratio must be 1:1 (+-1%). At least one square marketing_image is required. Combined with marketing_images the maximum is 15.',
                        _type: 'array',
                    },
                    youtube_videos: {
                        _description: 'Optional YouTube vidoes for the ad. A maximum of 5 videos can be specified.',
                        _type: 'array',
                    },
                },
                responsive_search_ad: {
                    _oneof: 'adData',
                    descriptions: {
                        _description:
                            'List of text assets for descriptions. When the ad serves the descriptions will be selected from this list.',
                        _type: 'array',
                    },
                    headlines: {
                        _description:
                            'List of text assets for headlines. When the ad serves the headlines will be selected from this list.',
                        _type: 'array',
                    },
                    path1: {
                        _description: 'First part of text that may appear appended to the url displayed in the ad.',
                        _type: 'string',
                    },
                    path2: {
                        _description:
                            'Second part of text that may appear appended to the url displayed in the ad. This field can only be set when path1 is also set.',
                        _type: 'string',
                    },
                },
                shopping_product_ad: { _oneof: 'adData' },
                shopping_smart_ad: { _oneof: 'adData' },
                system_managed_resource_source: {
                    _description:
                        'If this ad is system managed, then this field will indicate the source. This field is read-only.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.' },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                        },
                        { s: 'AD_VARIATIONS', description: 'Generated ad variations experiment ad.' },
                    ],
                    _type: 'enum',
                },
                text_ad: {
                    _oneof: 'adData',
                    description1: { _description: "The first line of the ad's description.", _type: 'string' },
                    description2: { _description: "The second line of the ad's description.", _type: 'string' },
                    headline: { _description: 'The headline of the ad.', _type: 'string' },
                },
                tracking_url_template: {
                    _description: 'The URL template for constructing a tracking URL.',
                    _type: 'string',
                },
                type: {
                    _description: 'The type of ad.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                        {
                            s: 'UNKNOWN',
                            description:
                                'The received value is not known in this version.\n\nThis is a response-only value.',
                        },
                        { s: 'TEXT_AD', description: 'The ad is a text ad.' },
                        { s: 'EXPANDED_TEXT_AD', description: 'The ad is an expanded text ad.' },
                        { s: 'CALL_ONLY_AD', description: 'The ad is a call only ad.' },
                        { s: 'EXPANDED_DYNAMIC_SEARCH_AD', description: 'The ad is an expanded dynamic search ad.' },
                        { s: 'HOTEL_AD', description: 'The ad is a hotel ad.' },
                        { s: 'SHOPPING_SMART_AD', description: 'The ad is a Smart Shopping ad.' },
                        { s: 'SHOPPING_PRODUCT_AD', description: 'The ad is a standard Shopping ad.' },
                        { s: 'VIDEO_AD', description: 'The ad is a video ad.' },
                        { s: 'GMAIL_AD', description: 'This ad is a Gmail ad.' },
                        { s: 'IMAGE_AD', description: 'This ad is an Image ad.' },
                        { s: 'RESPONSIVE_SEARCH_AD', description: 'The ad is a responsive search ad.' },
                        { s: 'LEGACY_RESPONSIVE_DISPLAY_AD', description: 'The ad is a legacy responsive display ad.' },
                        { s: 'APP_AD', description: 'The ad is an app ad.' },
                        { s: 'LEGACY_APP_INSTALL_AD', description: 'The ad is a legacy app install ad.' },
                        { s: 'RESPONSIVE_DISPLAY_AD', description: 'The ad is a responsive display ad.' },
                        {
                            s: 'HTML5_UPLOAD_AD',
                            description: 'The ad is a display upload ad with the HTML5_UPLOAD_AD product type.',
                        },
                        {
                            s: 'DYNAMIC_HTML5_AD',
                            description:
                                'The ad is a display upload ad with one of the DYNAMIC_HTML5_* product\ntypes.',
                        },
                        { s: 'APP_ENGAGEMENT_AD', description: 'The ad is an app engagement ad.' },
                    ],
                    _type: 'enum',
                },
                url_collections: {
                    _description:
                        'Additional URLs for the ad that are tagged with a unique identifier that can be referenced from other fields in the ad.',
                    _type: 'array',
                },
                url_custom_parameters: {
                    _description:
                        'The list of mappings that can be used to substitute custom parameter tags in a <code>tracking_url_template</code>, <code>final_urls</code>, or <code>mobile_final_urls</code>.',
                    _type: 'array',
                },
                video_ad: {
                    _oneof: 'adData',
                    bumper: {},
                    in_stream: {
                        action_button_label: {
                            _description:
                                "Label on the CTA (call-to-action) button taking the user to the video ad's final URL. Required for TrueView for action campaigns, optional otherwise.",
                            _type: 'string',
                        },
                        action_headline: {
                            _description:
                                'Additional text displayed with the CTA (call-to-action) button to give context and encourage clicking on the button.',
                            _type: 'string',
                        },
                        companion_banner: {
                            _description: 'The MediaFile resource name of the companion banner used with the ad.',
                            _type: 'string',
                        },
                    },
                    media_file: { _description: 'The MediaFile resource to use for the video.', _type: 'string' },
                    non_skippable: {},
                    out_stream: {
                        description: { _description: 'The description line.', _type: 'string' },
                        headline: { _description: 'The headline of the ad.', _type: 'string' },
                    },
                },
            },
            auto_apply_date: {
                _description:
                    'Date, if present, is the earliest when the recommendation will be auto applied. YYYY-MM-DD format, e.g., 2018-04-17.',
                _type: 'string',
            },
            creation_date: {
                _description: 'Creation date of the recommended ad. YYYY-MM-DD format, e.g., 2018-04-17.',
                _type: 'string',
            },
        },
        type: {
            _description: 'The type of recommendation.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'CAMPAIGN_BUDGET', description: 'Budget recommendation for budget constrained campaigns.' },
                { s: 'KEYWORD', description: 'Keyword recommendation.' },
                { s: 'TEXT_AD', description: 'Recommendation to add a new text ad.' },
                {
                    s: 'TARGET_CPA_OPT_IN',
                    description: 'Recommendation to update a campaign to use a Target CPA bidding strategy.',
                },
                {
                    s: 'MAXIMIZE_CONVERSIONS_OPT_IN',
                    description:
                        'Recommendation to update a campaign to use the Maximize Conversions\nbidding strategy.',
                },
                {
                    s: 'ENHANCED_CPC_OPT_IN',
                    description: 'Recommendation to enable Enhanced Cost Per Click for a campaign.',
                },
                {
                    s: 'SEARCH_PARTNERS_OPT_IN',
                    description:
                        "Recommendation to start showing your campaign's ads on Google Search\nPartners Websites.",
                },
                {
                    s: 'MAXIMIZE_CLICKS_OPT_IN',
                    description: 'Recommendation to update a campaign to use a Maximize Clicks bidding\nstrategy.',
                },
                {
                    s: 'OPTIMIZE_AD_ROTATION',
                    description:
                        'Recommendation to start using the "Optimize" ad rotation setting for the\ngiven ad group.',
                },
                { s: 'CALLOUT_EXTENSION', description: 'Recommendation to add callout extensions to a campaign.' },
                { s: 'SITELINK_EXTENSION', description: 'Recommendation to add sitelink extensions to a campaign.' },
                { s: 'CALL_EXTENSION', description: 'Recommendation to add call extensions to a campaign.' },
                {
                    s: 'KEYWORD_MATCH_TYPE',
                    description:
                        'Recommendation to change an existing keyword from one match type to a\nbroader match type.',
                },
                {
                    s: 'MOVE_UNUSED_BUDGET',
                    description: 'Recommendation to move unused budget from one budget to a constrained\nbudget.',
                },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list'],
}
