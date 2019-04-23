module.exports = {
    name: 'AdGroupAd',
    object: {
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the ad.\nAd group ad resource names have the form:\n\n`customers/{customer_id}/adGroupAds/{ad_group_id}~{ad_id}`',
        },
        ad_strength: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'PENDING', description: 'The ad strength is currently pending.' },
                { s: 'NO_ADS', description: 'No ads could be generated.' },
                { s: 'POOR', description: 'Poor strength.' },
                { s: 'AVERAGE', description: 'Average strength.' },
                { s: 'GOOD', description: 'Good strength.' },
                { s: 'EXCELLENT', description: 'Excellent strength.' },
            ],
            _description: 'Overall ad strength for this ad group ad.',
        },
        status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                {
                    s: 'UNKNOWN',
                    description: 'The received value is not known in this version.\n\nThis is a response-only value.',
                },
                { s: 'ENABLED', description: 'The ad group ad is enabled.' },
                { s: 'PAUSED', description: 'The ad group ad is paused.' },
                { s: 'REMOVED', description: 'The ad group ad is removed.' },
            ],
            _description: 'The status of the ad.',
        },
        ad: {
            gmail_ad: {
                marketing_image_description: { _type: 'string', _description: 'Description of the marketing image.' },
                marketing_image_display_call_to_action: {
                    text: { _type: 'string', _description: 'Text for the display-call-to-action.' },
                    url_collection_id: {
                        _type: 'string',
                        _description:
                            'Identifies the url collection in the ad.url_collections field. If not set\nthe url defaults to final_url.',
                    },
                    text_color: {
                        _type: 'string',
                        _description:
                            'Text color for the display-call-to-action in hexadecimal, e.g. #ffffff for\nwhite.',
                    },
                },
                product_videos: {
                    _type: 'array',
                    _description:
                        'Product videos. Up to 7 videos are supported. At least one product video\nor a marketing image must be specified.',
                },
                product_images: { _type: 'array', _description: 'Product images. Up to 15 images are supported.' },
                marketing_image_headline: { _type: 'string', _description: 'Headline of the marketing image.' },
                marketing_image: {
                    _type: 'string',
                    _description:
                        'The MediaFile resource name of the marketing image. Valid image types are\nGIF, JPEG and PNG. The image must either be landscape with a minimum size\nof 600x314 pixels and aspect ratio of 600:314 (+-1%) or square with a\nminimum size of 300x300 pixels and aspect ratio of 1:1 (+-1%)',
                },
                teaser: {
                    description: { _type: 'string', _description: 'Description of the teaser.' },
                    logo_image: {
                        _type: 'string',
                        _description:
                            'The MediaFile resource name of the logo image. Valid image types are GIF,\nJPEG and PNG. The minimum size is 144x144 pixels and the aspect ratio must\nbe 1:1 (+-1%).',
                    },
                    business_name: { _type: 'string', _description: 'Business name of the advertiser.' },
                    headline: { _type: 'string', _description: 'Headline of the teaser.' },
                },
                header_image: {
                    _type: 'string',
                    _description:
                        'The MediaFile resource name of the header image. Valid image types are GIF,\nJPEG and PNG. The minimum size is 300x100 pixels and the aspect ratio must\nbe between 3:1 and 5:1 (+-1%).',
                },
                _oneof: 'adData',
            },
            final_mobile_urls: {
                _type: 'array',
                _description: 'The list of possible final mobile URLs after all cross-domain redirects\nfor the ad.',
            },
            expanded_text_ad: {
                path_1: { _type: 'string', _description: "The text that can appear alongside the ad's displayed URL." },
                headline_part_1: { _type: 'string', _description: "The first part of the ad's headline." },
                description: { _type: 'string', _description: 'The description of the ad.' },
                description_2: { _type: 'string', _description: 'The second description of the ad.' },
                path_2: {
                    _type: 'string',
                    _description: "Additional text that can appear alongside the ad's displayed URL.",
                },
                headline_part_3: { _type: 'string', _description: "The third part of the ad's headline." },
                headline_part_2: { _type: 'string', _description: "The second part of the ad's headline." },
                _oneof: 'adData',
            },
            final_urls: {
                _type: 'array',
                _description: 'The list of possible final URLs after all cross-domain redirects for the\nad.',
            },
            id: { _type: 'int64', _description: 'The ID of the ad.' },
            responsive_search_ad: {
                headlines: {
                    _type: 'array',
                    _description:
                        'List of text assets for headlines. When the ad serves the headlines will\nbe selected from this list.',
                },
                path_2: {
                    _type: 'string',
                    _description:
                        'Second part of text that may appear appended to the url displayed in the\nad. This field can only be set when path1 is also set.',
                },
                descriptions: {
                    _type: 'array',
                    _description:
                        'List of text assets for descriptions. When the ad serves the descriptions\nwill be selected from this list.',
                },
                path_1: {
                    _type: 'string',
                    _description: 'First part of text that may appear appended to the url displayed in the ad.',
                },
                _oneof: 'adData',
            },
            legacy_app_install_ad: {
                app_id: { _type: 'string', _description: 'The id of the mobile app.' },
                description_2: { _type: 'string', _description: 'The second description line of the ad.' },
                description_1: { _type: 'string', _description: 'The first description line of the ad.' },
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
                _oneof: 'adData',
            },
            added_by_google_ads: {
                _type: 'boolean',
                _description:
                    'Indicates if this ad was automatically added by Google Ads and not by a\nuser. For example, this could happen when ads are automatically created as\nsuggestions for new ads based on knowledge of how existing ads are\nperforming.',
            },
            app_ad: {
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
                            'The pinned field of the asset. This restricts the asset to only serve\nwithin this field. Multiple assets can be pinned to the same field. An\nasset that is unpinned or pinned to a different field will not serve in a\nfield where some other asset has been pinned.',
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
                        'List of text assets for headlines. When the ad serves the headlines will\nbe selected from this list.',
                },
                youtube_videos: {
                    _type: 'array',
                    _description: 'List of YouTube video assets that may be displayed with the ad.',
                },
                descriptions: {
                    _type: 'array',
                    _description:
                        'List of text assets for descriptions. When the ad serves the descriptions\nwill be selected from this list.',
                },
                _oneof: 'adData',
            },
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
                ],
                _description: 'The type of ad.',
            },
            hotel_ad: { _oneof: 'adData' },
            text_ad: {
                description_1: { _type: 'string', _description: "The first line of the ad's description." },
                headline: { _type: 'string', _description: 'The headline of the ad.' },
                description_2: { _type: 'string', _description: "The second line of the ad's description." },
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
                    'If this ad is system managed, then this field will indicate the source.\nThis field is read-only.',
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
                    'The device preference for the ad. You can only specify a preference for\nmobile devices. When this preference is set the ad will be preferred over\nother ads when being displayed on a mobile device. The ad can still be\ndisplayed on other device types, e.g. if no other ads are available.\nIf unspecified (no device preference), all devices are targeted.\nThis is only supported by some ad types.',
            },
            name: {
                _type: 'string',
                _description:
                    'The name of the ad. This is only used to be able to identify the ad. It\ndoes not need to be unique and does not affect the served ad.',
            },
            legacy_responsive_display_ad: {
                allow_flexible_color: {
                    _type: 'boolean',
                    _description:
                        "Advertiser's consent to allow flexible color. When true, the ad may be\nserved with different color if necessary. When false, the ad will be served\nwith the specified colors or a neutral color.\nThe default value is true.\nMust be true if main_color and accent_color are not set.",
                },
                marketing_image: {
                    _type: 'string',
                    _description: 'The MediaFile resource name of the marketing image used in the ad.',
                },
                promo_text: {
                    _type: 'string',
                    _description:
                        "Promotion text used for dyanmic formats of responsive ads. For example\n'Free two-day shipping'.",
                },
                accent_color: {
                    _type: 'string',
                    _description:
                        'The accent color of the ad in hexadecimal, e.g. #ffffff for white.\nIf one of main_color and accent_color is set, the other is required as\nwell.',
                },
                logo_image: {
                    _type: 'string',
                    _description: 'The MediaFile resource name of the logo image used in the ad.',
                },
                main_color: {
                    _type: 'string',
                    _description:
                        'The main color of the ad in hexadecimal, e.g. #ffffff for white.\nIf one of main_color and accent_color is set, the other is required as\nwell.',
                },
                short_headline: { _type: 'string', _description: "The short version of the ad's headline." },
                description: { _type: 'string', _description: 'The description of the ad.' },
                price_prefix: { _type: 'string', _description: "Prefix before price. E.g. 'as low as'." },
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
                _oneof: 'adData',
            },
            url_collections: {
                _type: 'array',
                _description:
                    'Additional URLs for the ad that are tagged with a unique identifier that\ncan be referenced from other fields in the ad.',
            },
            url_custom_parameters: {
                _type: 'array',
                _description:
                    'The list of mappings that can be used to substitute custom parameter tags\nin a `tracking_url_template`, `final_urls`, or `mobile_final_urls`.',
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
                            'Additional text displayed with the CTA (call-to-action) button to give\ncontext and encourage clicking on the button.',
                    },
                    action_button_label: {
                        _type: 'string',
                        _description:
                            "Label on the CTA (call-to-action) button taking the user to the video ad's\nfinal URL.\nRequired for TrueView for action campaigns, optional otherwise.",
                    },
                },
                _oneof: 'adData',
            },
            image_ad: {
                image_url: { _type: 'string', _description: 'URL of the full size image.' },
                preview_pixel_height: { _type: 'int64', _description: 'Height in pixels of the preview size image.' },
                preview_image_url: { _type: 'string', _description: 'URL of the preview size image.' },
                ad_id_to_copy_image_from: { _type: 'int64', _description: 'An ad ID to copy the image from.' },
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
                data: { _type: 'byte', _description: 'Raw image data as bytes.' },
                pixel_width: { _type: 'int64', _description: 'Width in pixels of the full size image.' },
                preview_pixel_width: { _type: 'int64', _description: 'Width in pixels of the preview size image.' },
                media_file: { _type: 'string', _description: 'The MediaFile resource to use for the image.' },
                name: {
                    _type: 'string',
                    _description:
                        "The name of the image. If the image was created from a MediaFile, this is\nthe MediaFile's name. If the image was created from bytes, this is empty.",
                },
                pixel_height: { _type: 'int64', _description: 'Height in pixels of the full size image.' },
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
                        'The call conversion behavior of this call only ad. It can use its own call\nconversion setting, inherit the account level setting, or be disabled.',
                },
                description_2: { _type: 'string', _description: "The second line of the ad's description." },
                disable_call_conversion: {
                    _type: 'boolean',
                    _description:
                        'Whether to disable call conversion for the creative.\nIf set to `true`, disables call conversions even when `call_tracked` is\n`true`.\nIf `call_tracked` is `false`, this field is ignored.',
                },
                headline_2: { _type: 'string', _description: 'Second headline in the ad.' },
                business_name: { _type: 'string', _description: 'The business name in the ad.' },
                call_tracked: {
                    _type: 'boolean',
                    _description:
                        'Whether to enable call tracking for the creative. Enabling call\ntracking also enables call conversions.',
                },
                phone_number: { _type: 'string', _description: 'The phone number in the ad.' },
                country_code: { _type: 'string', _description: 'The country code in the ad.' },
                headline_1: { _type: 'string', _description: 'First headline in the ad.' },
                phone_number_verification_url: {
                    _type: 'string',
                    _description: 'The URL to be used for phone number verification.',
                },
                description_1: { _type: 'string', _description: "The first line of the ad's description." },
                conversion_action: {
                    _type: 'string',
                    _description:
                        'The conversion action to attribute a call conversion to. If not set a\ndefault conversion action is used. This field only has effect if\ncall_tracked is set to true. Otherwise this field is ignored.',
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
                        'Short format headlines for the ad. The maximum length is 30 characters.\nAt least 1 and max 5 headlines can be specified.',
                },
                descriptions: {
                    _type: 'array',
                    _description:
                        'Descriptive texts for the ad. The maximum length is 90 characters. At\nleast 1 and max 5 headlines can be specified.',
                },
                marketing_images: {
                    _type: 'array',
                    _description:
                        'Marketing images to be used in the ad. Valid image types are GIF,\nJPEG, and PNG. The minimum size is 600x314 and the aspect ratio must\nbe 1.91:1 (+-1%). At least one marketing_image is required. Combined with\nsquare_marketing_images the maximum is 15.',
                },
                allow_flexible_color: {
                    _type: 'boolean',
                    _description:
                        "Advertiser's consent to allow flexible color. When true, the ad may be\nserved with different color if necessary. When false, the ad will be served\nwith the specified colors or a neutral color.\nThe default value is true.\nMust be true if main_color and accent_color are not set.",
                },
                promo_text: {
                    _type: 'string',
                    _description:
                        "Promotion text used for dyanmic formats of responsive ads. For example\n'Free two-day shipping'.",
                },
                accent_color: {
                    _type: 'string',
                    _description:
                        'The accent color of the ad in hexadecimal, e.g. #ffffff for white.\nIf one of main_color and accent_color is set, the other is required as\nwell.',
                },
                main_color: {
                    _type: 'string',
                    _description:
                        'The main color of the ad in hexadecimal, e.g. #ffffff for white.\nIf one of main_color and accent_color is set, the other is required as\nwell.',
                },
                square_marketing_images: {
                    _type: 'array',
                    _description:
                        'Square marketing images to be used in the ad. Valid image types are GIF,\nJPEG, and PNG. The minimum size is 300x300 and the aspect ratio must\nbe 1:1 (+-1%). At least one square marketing_image is required. Combined\nwith marketing_images the maximum is 15.',
                },
                square_logo_images: {
                    _type: 'array',
                    _description:
                        'Square logo images to be used in the ad. Valid image types are GIF,\nJPEG, and PNG. The minimum size is 128x128 and the aspect ratio must\nbe 1:1 (+-1%). Combined with square_logo_images the maximum is 5.',
                },
                youtube_videos: {
                    _type: 'array',
                    _description: 'Optional YouTube vidoes for the ad. A maximum of 5 videos can be specified.',
                },
                logo_images: {
                    _type: 'array',
                    _description:
                        'Logo images to be used in the ad. Valid image types are GIF,\nJPEG, and PNG. The minimum size is 512x128 and the aspect ratio must\nbe 4:1 (+-1%). Combined with square_logo_images the maximum is 5.',
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
                            'The pinned field of the asset. This restricts the asset to only serve\nwithin this field. Multiple assets can be pinned to the same field. An\nasset that is unpinned or pinned to a different field will not serve in a\nfield where some other asset has been pinned.',
                    },
                    text: { _type: 'string', _description: 'Asset text.' },
                },
                _oneof: 'adData',
            },
        },
        policy_summary: {
            approval_status: {
                _type: 'enum',
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
                _description:
                    'The overall approval status of this ad, calculated based on the status of\nits individual policy topic entries.',
            },
            policy_topic_entries: { _type: 'array', _description: 'The list of policy findings for this ad.' },
            review_status: {
                _type: 'enum',
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
                _description: 'Where in the review process this ad is.',
            },
        },
        ad_group: { _type: 'string', _description: 'The ad group to which the ad belongs.' },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
