module.exports = {
    name: 'Recommendation',
    object: {
        campaign: {
            _type: 'string',
            _description:
                'The campaign targeted by this recommendation. This will be set only when the recommendation affects a single campaign. This field will be set for the following recommendation types: ENHANCED_CPC_OPT_IN, KEYWORD, MAXIMIZE_CLICKS_OPT_IN, MAXIMIZE_CONVERSIONS_OPT_IN, OPTIMIZE_AD_ROTATION, SEARCH_PARTNERS_OPT_IN, TARGET_CPA_OPT_IN, TEXT_AD',
        },
        callout_extension_recommendation: {
            recommended_extensions: { _type: 'array', _description: 'Callout extensions recommended to be added.' },
            _oneof: 'recommendation',
        },
        call_extension_recommendation: {
            recommended_extensions: { _type: 'array', _description: 'Call extensions recommended to be added.' },
            _oneof: 'recommendation',
        },
        move_unused_budget_recommendation: {
            excess_campaign_budget: { _type: 'string', _description: "The excess budget's resource_name." },
            budget_recommendation: {
                current_budget_amount_micros: { _type: 'int64', _description: 'The current budget amount in micros.' },
                budget_options: {
                    _type: 'array',
                    _description:
                        'The budget amounts and associated impact estimates for some values of possible budget amounts.',
                },
                recommended_budget_amount_micros: {
                    _type: 'int64',
                    _description: 'The recommended budget amount in micros.',
                },
            },
            _oneof: 'recommendation',
        },
        maximize_clicks_opt_in_recommendation: {
            recommended_budget_amount_micros: {
                _type: 'int64',
                _description: 'The recommended new budget amount. Only set if the current budget is too high.',
            },
            _oneof: 'recommendation',
        },
        text_ad_recommendation: {
            ad: {
                final_app_urls: {
                    _type: 'array',
                    _description:
                        'A list of final app URLs that will be used on mobile if the user has the specific app installed.',
                },
                final_urls: {
                    _type: 'array',
                    _description: 'The list of possible final URLs after all cross-domain redirects for the ad.',
                },
                id: { _type: 'int64', _description: 'The ID of the ad.' },
                responsive_search_ad: {
                    headlines: {
                        _type: 'array',
                        _description:
                            'List of text assets for headlines. When the ad serves the headlines will be selected from this list.',
                    },
                    path2: {
                        _type: 'string',
                        _description:
                            'Second part of text that may appear appended to the url displayed in the ad. This field can only be set when path1 is also set.',
                    },
                    descriptions: {
                        _type: 'array',
                        _description:
                            'List of text assets for descriptions. When the ad serves the descriptions will be selected from this list.',
                    },
                    path1: {
                        _type: 'string',
                        _description: 'First part of text that may appear appended to the url displayed in the ad.',
                    },
                    _oneof: 'adData',
                },
                legacy_app_install_ad: {
                    description1: { _type: 'string', _description: 'The first description line of the ad.' },
                    headline: { _type: 'string', _description: 'The headline of the ad.' },
                    app_store: {
                        _type: 'enum',
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
                        _description: 'The app store the mobile app is available in.',
                    },
                    app_id: { _type: 'string', _description: 'The id of the mobile app.' },
                    description2: { _type: 'string', _description: 'The second description line of the ad.' },
                    _oneof: 'adData',
                },
                added_by_google_ads: {
                    _type: 'boolean',
                    _description:
                        'Indicates if this ad was automatically added by Google Ads and not by a user. For example, this could happen when ads are automatically created as suggestions for new ads based on knowledge of how existing ads are performing.',
                },
                app_ad: {
                    descriptions: {
                        _type: 'array',
                        _description:
                            'List of text assets for descriptions. When the ad serves the descriptions will be selected from this list.',
                    },
                    mandatory_ad_text: {
                        pinned_field: {
                            _type: 'enum',
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
                            _description:
                                'The pinned field of the asset. This restricts the asset to only serve within this field. Multiple assets can be pinned to the same field. An asset that is unpinned or pinned to a different field will not serve in a field where some other asset has been pinned.',
                        },
                        text: { _type: 'string', _description: 'Asset text.' },
                    },
                    images: { _type: 'array', _description: 'List of image assets that may be displayed with the ad.' },
                    html_5_media_bundles: {
                        _type: 'array',
                        _description: 'List of media bundle assets that may be used with the ad.',
                    },
                    headlines: {
                        _type: 'array',
                        _description:
                            'List of text assets for headlines. When the ad serves the headlines will be selected from this list.',
                    },
                    youtube_videos: {
                        _type: 'array',
                        _description: 'List of YouTube video assets that may be displayed with the ad.',
                    },
                    _oneof: 'adData',
                },
                hotel_ad: { _oneof: 'adData' },
                type: {
                    _type: 'enum',
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
                    _description: 'The type of ad.',
                },
                app_engagement_ad: {
                    headlines: {
                        _type: 'array',
                        _description:
                            'List of text assets for headlines. When the ad serves the headlines will be selected from this list.',
                    },
                    descriptions: {
                        _type: 'array',
                        _description:
                            'List of text assets for descriptions. When the ad serves the descriptions will be selected from this list.',
                    },
                    images: { _type: 'array', _description: 'List of image assets that may be displayed with the ad.' },
                    videos: { _type: 'array', _description: 'List of video assets that may be displayed with the ad.' },
                    _oneof: 'adData',
                },
                display_upload_ad: {
                    media_bundle: {
                        asset: { _type: 'string', _description: 'The Asset resource name of this media bundle.' },
                    },
                    display_upload_product_type: {
                        _type: 'enum',
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
                        _description: 'The product type of this ad. See comments on the enum for details.',
                    },
                    _oneof: 'adData',
                },
                text_ad: {
                    description1: { _type: 'string', _description: "The first line of the ad's description." },
                    headline: { _type: 'string', _description: 'The headline of the ad.' },
                    description2: { _type: 'string', _description: "The second line of the ad's description." },
                    _oneof: 'adData',
                },
                system_managed_resource_source: {
                    _type: 'enum',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.' },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                        },
                        { s: 'AD_VARIATIONS', description: 'Generated ad variations experiment ad.' },
                    ],
                    _description:
                        'If this ad is system managed, then this field will indicate the source. This field is read-only.',
                },
                shopping_product_ad: { _oneof: 'adData' },
                device_preference: {
                    _type: 'enum',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.' },
                        { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                        { s: 'MOBILE', description: 'Mobile devices with full browsers.' },
                        { s: 'TABLET', description: 'Tablets with full browsers.' },
                        { s: 'DESKTOP', description: 'Computers.' },
                        { s: 'OTHER', description: 'Other device types.' },
                    ],
                    _description:
                        'The device preference for the ad. You can only specify a preference for mobile devices. When this preference is set the ad will be preferred over other ads when being displayed on a mobile device. The ad can still be displayed on other device types, e.g. if no other ads are available. If unspecified (no device preference), all devices are targeted. This is only supported by some ad types.',
                },
                name: {
                    _type: 'string',
                    _description:
                        'The name of the ad. This is only used to be able to identify the ad. It does not need to be unique and does not affect the served ad.',
                },
                legacy_responsive_display_ad: {
                    promo_text: {
                        _type: 'string',
                        _description:
                            "Promotion text used for dyanmic formats of responsive ads. For example 'Free two-day shipping'.",
                    },
                    accent_color: {
                        _type: 'string',
                        _description:
                            'The accent color of the ad in hexadecimal, e.g. #ffffff for white. If one of main_color and accent_color is set, the other is required as well.',
                    },
                    logo_image: {
                        _type: 'string',
                        _description: 'The MediaFile resource name of the logo image used in the ad.',
                    },
                    main_color: {
                        _type: 'string',
                        _description:
                            'The main color of the ad in hexadecimal, e.g. #ffffff for white. If one of main_color and accent_color is set, the other is required as well.',
                    },
                    short_headline: { _type: 'string', _description: "The short version of the ad's headline." },
                    price_prefix: { _type: 'string', _description: "Prefix before price. E.g. 'as low as'." },
                    description: { _type: 'string', _description: 'The description of the ad.' },
                    square_logo_image: {
                        _type: 'string',
                        _description: 'The MediaFile resource name of the square logo image used in the ad.',
                    },
                    long_headline: { _type: 'string', _description: "The long version of the ad's headline." },
                    call_to_action_text: { _type: 'string', _description: 'The call-to-action text for the ad.' },
                    square_marketing_image: {
                        _type: 'string',
                        _description: 'The MediaFile resource name of the square marketing image used in the ad.',
                    },
                    format_setting: {
                        _type: 'enum',
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
                        _description: 'Specifies which format the ad will be served in. Default is ALL_FORMATS.',
                    },
                    business_name: { _type: 'string', _description: 'The business name in the ad.' },
                    marketing_image: {
                        _type: 'string',
                        _description: 'The MediaFile resource name of the marketing image used in the ad.',
                    },
                    allow_flexible_color: {
                        _type: 'boolean',
                        _description:
                            "Advertiser's consent to allow flexible color. When true, the ad may be served with different color if necessary. When false, the ad will be served with the specified colors or a neutral color. The default value is true. Must be true if main_color and accent_color are not set.",
                    },
                    _oneof: 'adData',
                },
                url_collections: {
                    _type: 'array',
                    _description:
                        'Additional URLs for the ad that are tagged with a unique identifier that can be referenced from other fields in the ad.',
                },
                url_custom_parameters: {
                    _type: 'array',
                    _description:
                        'The list of mappings that can be used to substitute custom parameter tags in a <code>tracking_url_template</code>, <code>final_urls</code>, or <code>mobile_final_urls</code>.',
                },
                video_ad: {
                    media_file: { _type: 'string', _description: 'The MediaFile resource to use for the video.' },
                    bumper: {},
                    out_stream: {
                        headline: { _type: 'string', _description: 'The headline of the ad.' },
                        description: { _type: 'string', _description: 'The description line.' },
                    },
                    non_skippable: {},
                    in_stream: {
                        action_headline: {
                            _type: 'string',
                            _description:
                                'Additional text displayed with the CTA (call-to-action) button to give context and encourage clicking on the button.',
                        },
                        companion_banner: {
                            _type: 'string',
                            _description: 'The MediaFile resource name of the companion banner used with the ad.',
                        },
                        action_button_label: {
                            _type: 'string',
                            _description:
                                "Label on the CTA (call-to-action) button taking the user to the video ad's final URL. Required for TrueView for action campaigns, optional otherwise.",
                        },
                    },
                    _oneof: 'adData',
                },
                image_ad: {
                    pixel_height: { _type: 'int64', _description: 'Height in pixels of the full size image.' },
                    image_url: { _type: 'string', _description: 'URL of the full size image.' },
                    preview_pixel_height: {
                        _type: 'int64',
                        _description: 'Height in pixels of the preview size image.',
                    },
                    preview_image_url: { _type: 'string', _description: 'URL of the preview size image.' },
                    mime_type: {
                        _type: 'enum',
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
                        _description: 'The mime type of the image.',
                    },
                    ad_id_to_copy_image_from: { _type: 'int64', _description: 'An ad ID to copy the image from.' },
                    data: { _type: 'byte', _description: 'Raw image data as bytes.' },
                    pixel_width: { _type: 'int64', _description: 'Width in pixels of the full size image.' },
                    preview_pixel_width: { _type: 'int64', _description: 'Width in pixels of the preview size image.' },
                    media_file: { _type: 'string', _description: 'The MediaFile resource to use for the image.' },
                    name: {
                        _type: 'string',
                        _description:
                            "The name of the image. If the image was created from a MediaFile, this is the MediaFile's name. If the image was created from bytes, this is empty.",
                    },
                    _oneof: 'adData',
                },
                tracking_url_template: {
                    _type: 'string',
                    _description: 'The URL template for constructing a tracking URL.',
                },
                shopping_smart_ad: { _oneof: 'adData' },
                expanded_dynamic_search_ad: {
                    description: { _type: 'string', _description: 'The description of the ad.' },
                    _oneof: 'adData',
                },
                call_only_ad: {
                    phone_number: { _type: 'string', _description: 'The phone number in the ad.' },
                    country_code: { _type: 'string', _description: 'The country code in the ad.' },
                    headline1: { _type: 'string', _description: 'First headline in the ad.' },
                    phone_number_verification_url: {
                        _type: 'string',
                        _description: 'The URL to be used for phone number verification.',
                    },
                    description1: { _type: 'string', _description: "The first line of the ad's description." },
                    conversion_action: {
                        _type: 'string',
                        _description:
                            'The conversion action to attribute a call conversion to. If not set a default conversion action is used. This field only has effect if call_tracked is set to true. Otherwise this field is ignored.',
                    },
                    conversion_reporting_state: {
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
                                description:
                                    'Call conversion action will use call conversion type set at the\naccount level.',
                            },
                            {
                                s: 'USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION',
                                description:
                                    'Call conversion action will use call conversion type set at the resource\n(call only ads/call extensions) level.',
                            },
                        ],
                        _description:
                            'The call conversion behavior of this call only ad. It can use its own call conversion setting, inherit the account level setting, or be disabled.',
                    },
                    description2: { _type: 'string', _description: "The second line of the ad's description." },
                    disable_call_conversion: {
                        _type: 'boolean',
                        _description:
                            'Whether to disable call conversion for the creative. If set to <code>true</code>, disables call conversions even when <code>call_tracked</code> is <code>true</code>. If <code>call_tracked</code> is <code>false</code>, this field is ignored.',
                    },
                    headline2: { _type: 'string', _description: 'Second headline in the ad.' },
                    business_name: { _type: 'string', _description: 'The business name in the ad.' },
                    call_tracked: {
                        _type: 'boolean',
                        _description:
                            'Whether to enable call tracking for the creative. Enabling call tracking also enables call conversions.',
                    },
                    _oneof: 'adData',
                },
                display_url: {
                    _type: 'string',
                    _description: 'The URL that appears in the ad description for some ad formats.',
                },
                responsive_display_ad: {
                    call_to_action_text: {
                        _type: 'string',
                        _description: 'The call-to-action text for the ad. Maximum display width is 30.',
                    },
                    format_setting: {
                        _type: 'enum',
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
                        _description: 'Specifies which format the ad will be served in. Default is ALL_FORMATS.',
                    },
                    business_name: {
                        _type: 'string',
                        _description: 'The advertiser/brand name. Maximum display width is 25.',
                    },
                    headlines: {
                        _type: 'array',
                        _description:
                            'Short format headlines for the ad. The maximum length is 30 characters. At least 1 and max 5 headlines can be specified.',
                    },
                    descriptions: {
                        _type: 'array',
                        _description:
                            'Descriptive texts for the ad. The maximum length is 90 characters. At least 1 and max 5 headlines can be specified.',
                    },
                    marketing_images: {
                        _type: 'array',
                        _description:
                            'Marketing images to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 600x314 and the aspect ratio must be 1.91:1 (+-1%). At least one marketing_image is required. Combined with square_marketing_images the maximum is 15.',
                    },
                    allow_flexible_color: {
                        _type: 'boolean',
                        _description:
                            "Advertiser's consent to allow flexible color. When true, the ad may be served with different color if necessary. When false, the ad will be served with the specified colors or a neutral color. The default value is true. Must be true if main_color and accent_color are not set.",
                    },
                    promo_text: {
                        _type: 'string',
                        _description:
                            "Promotion text used for dyanmic formats of responsive ads. For example 'Free two-day shipping'.",
                    },
                    accent_color: {
                        _type: 'string',
                        _description:
                            'The accent color of the ad in hexadecimal, e.g. #ffffff for white. If one of main_color and accent_color is set, the other is required as well.',
                    },
                    main_color: {
                        _type: 'string',
                        _description:
                            'The main color of the ad in hexadecimal, e.g. #ffffff for white. If one of main_color and accent_color is set, the other is required as well.',
                    },
                    square_marketing_images: {
                        _type: 'array',
                        _description:
                            'Square marketing images to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 300x300 and the aspect ratio must be 1:1 (+-1%). At least one square marketing_image is required. Combined with marketing_images the maximum is 15.',
                    },
                    square_logo_images: {
                        _type: 'array',
                        _description:
                            'Square logo images to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 128x128 and the aspect ratio must be 1:1 (+-1%). Combined with square_logo_images the maximum is 5.',
                    },
                    youtube_videos: {
                        _type: 'array',
                        _description: 'Optional YouTube vidoes for the ad. A maximum of 5 videos can be specified.',
                    },
                    logo_images: {
                        _type: 'array',
                        _description:
                            'Logo images to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 512x128 and the aspect ratio must be 4:1 (+-1%). Combined with square_logo_images the maximum is 5.',
                    },
                    price_prefix: { _type: 'string', _description: "Prefix before price. E.g. 'as low as'." },
                    long_headline: {
                        pinned_field: {
                            _type: 'enum',
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
                            _description:
                                'The pinned field of the asset. This restricts the asset to only serve within this field. Multiple assets can be pinned to the same field. An asset that is unpinned or pinned to a different field will not serve in a field where some other asset has been pinned.',
                        },
                        text: { _type: 'string', _description: 'Asset text.' },
                    },
                    _oneof: 'adData',
                },
                gmail_ad: {
                    product_images: { _type: 'array', _description: 'Product images. Up to 15 images are supported.' },
                    teaser: {
                        business_name: { _type: 'string', _description: 'Business name of the advertiser.' },
                        headline: { _type: 'string', _description: 'Headline of the teaser.' },
                        description: { _type: 'string', _description: 'Description of the teaser.' },
                        logo_image: {
                            _type: 'string',
                            _description:
                                'The MediaFile resource name of the logo image. Valid image types are GIF, JPEG and PNG. The minimum size is 144x144 pixels and the aspect ratio must be 1:1 (+-1%).',
                        },
                    },
                    marketing_image: {
                        _type: 'string',
                        _description:
                            'The MediaFile resource name of the marketing image. Valid image types are GIF, JPEG and PNG. The image must either be landscape with a minimum size of 600x314 pixels and aspect ratio of 600:314 (+-1%) or square with a minimum size of 300x300 pixels and aspect ratio of 1:1 (+-1%)',
                    },
                    marketing_image_headline: { _type: 'string', _description: 'Headline of the marketing image.' },
                    header_image: {
                        _type: 'string',
                        _description:
                            'The MediaFile resource name of the header image. Valid image types are GIF, JPEG and PNG. The minimum size is 300x100 pixels and the aspect ratio must be between 3:1 and 5:1 (+-1%).',
                    },
                    marketing_image_description: {
                        _type: 'string',
                        _description: 'Description of the marketing image.',
                    },
                    marketing_image_display_call_to_action: {
                        text_color: {
                            _type: 'string',
                            _description:
                                'Text color for the display-call-to-action in hexadecimal, e.g. #ffffff for white.',
                        },
                        text: { _type: 'string', _description: 'Text for the display-call-to-action.' },
                        url_collection_id: {
                            _type: 'string',
                            _description:
                                'Identifies the url collection in the ad.url_collections field. If not set the url defaults to final_url.',
                        },
                    },
                    product_videos: {
                        _type: 'array',
                        _description:
                            'Product videos. Up to 7 videos are supported. At least one product video or a marketing image must be specified.',
                    },
                    _oneof: 'adData',
                },
                final_mobile_urls: {
                    _type: 'array',
                    _description: 'The list of possible final mobile URLs after all cross-domain redirects for the ad.',
                },
                expanded_text_ad: {
                    description: { _type: 'string', _description: 'The description of the ad.' },
                    description2: { _type: 'string', _description: 'The second description of the ad.' },
                    path2: {
                        _type: 'string',
                        _description: "Additional text that can appear alongside the ad's displayed URL.",
                    },
                    headline_part3: { _type: 'string', _description: "The third part of the ad's headline." },
                    headline_part2: { _type: 'string', _description: "The second part of the ad's headline." },
                    path1: {
                        _type: 'string',
                        _description: "The text that can appear alongside the ad's displayed URL.",
                    },
                    headline_part1: { _type: 'string', _description: "The first part of the ad's headline." },
                    _oneof: 'adData',
                },
            },
            creation_date: {
                _type: 'string',
                _description: 'Creation date of the recommended ad. YYYY-MM-DD format, e.g., 2018-04-17.',
            },
            auto_apply_date: {
                _type: 'string',
                _description:
                    'Date, if present, is the earliest when the recommendation will be auto applied. YYYY-MM-DD format, e.g., 2018-04-17.',
            },
            _oneof: 'recommendation',
        },
        enhanced_cpc_opt_in_recommendation: { _oneof: 'recommendation' },
        dismissed: { _type: 'boolean', _description: 'Whether the recommendation is dismissed or not.' },
        target_cpa_opt_in_recommendation: {
            recommended_target_cpa_micros: {
                _type: 'int64',
                _description:
                    'The recommended average CPA target. See required budget amount and impact of using this recommendation in options list.',
            },
            options: {
                _type: 'array',
                _description: 'The available goals and corresponding options for Target CPA strategy.',
            },
            _oneof: 'recommendation',
        },
        campaign_budget_recommendation: {
            current_budget_amount_micros: { _type: 'int64', _description: 'The current budget amount in micros.' },
            budget_options: {
                _type: 'array',
                _description:
                    'The budget amounts and associated impact estimates for some values of possible budget amounts.',
            },
            recommended_budget_amount_micros: {
                _type: 'int64',
                _description: 'The recommended budget amount in micros.',
            },
            _oneof: 'recommendation',
        },
        optimize_ad_rotation_recommendation: { _oneof: 'recommendation' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the recommendation. <code>customers/{customer_id}/recommendations/{recommendation_id}</code>',
        },
        search_partners_opt_in_recommendation: { _oneof: 'recommendation' },
        keyword_recommendation: {
            recommended_cpc_bid_micros: { _type: 'int64', _description: 'The recommended CPC (cost-per-click) bid.' },
            keyword: {
                match_type: {
                    _type: 'enum',
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
                    _description: 'The match type of the keyword.',
                },
                text: {
                    _type: 'string',
                    _description: 'The text of the keyword (at most 80 characters and 10 words).',
                },
            },
            _oneof: 'recommendation',
        },
        keyword_match_type_recommendation: {
            recommended_match_type: {
                _type: 'enum',
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
                _description: 'The recommended new match type.',
            },
            keyword: {
                match_type: {
                    _type: 'enum',
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
                    _description: 'The match type of the keyword.',
                },
                text: {
                    _type: 'string',
                    _description: 'The text of the keyword (at most 80 characters and 10 words).',
                },
            },
            _oneof: 'recommendation',
        },
        campaign_budget: {
            _type: 'string',
            _description:
                'The budget targeted by this recommendation. This will be set only when the recommendation affects a single campaign budget. This field will be set for the following recommendation types: CAMPAIGN_BUDGET',
        },
        maximize_conversions_opt_in_recommendation: {
            recommended_budget_amount_micros: { _type: 'int64', _description: 'The recommended new budget amount.' },
            _oneof: 'recommendation',
        },
        sitelink_extension_recommendation: {
            recommended_extensions: { _type: 'array', _description: 'Sitelink extensions recommended to be added.' },
            _oneof: 'recommendation',
        },
        type: {
            _type: 'enum',
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
            _description: 'The type of recommendation.',
        },
        impact: {
            potential_metrics: {
                cost_micros: {
                    _type: 'int64',
                    _description: 'Cost (in micros) for advertising, in the local currency for the account.',
                },
                video_views: { _type: 'double', _description: 'Number of video views for a video ad campaign.' },
                impressions: { _type: 'double', _description: 'Number of ad impressions.' },
                clicks: { _type: 'double', _description: 'Number of ad clicks.' },
                conversions: { _type: 'double', _description: 'Number of conversions.' },
            },
            base_metrics: {
                cost_micros: {
                    _type: 'int64',
                    _description: 'Cost (in micros) for advertising, in the local currency for the account.',
                },
                video_views: { _type: 'double', _description: 'Number of video views for a video ad campaign.' },
                impressions: { _type: 'double', _description: 'Number of ad impressions.' },
                clicks: { _type: 'double', _description: 'Number of ad clicks.' },
                conversions: { _type: 'double', _description: 'Number of conversions.' },
            },
        },
        ad_group: {
            _type: 'string',
            _description:
                'The ad group targeted by this recommendation. This will be set only when the recommendation affects a single ad group. This field will be set for the following recommendation types: KEYWORD, OPTIMIZE_AD_ROTATION, TEXT_AD',
        },
    },
    methods: ['get', 'list'],
}
