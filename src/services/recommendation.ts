// @ts-ignore
import { Recommendation } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The recommendation entity:

const recommendation = {
    optimize_ad_rotation_recommendation: {},
    resource_name: 'string', // The resource name of the recommendation.  `customers/{customer_id}/recommendations/{recommendation_id}`
    search_partners_opt_in_recommendation: {},
    keyword_match_type_recommendation: {
        keyword: {
            match_type: 'UNSPECIFIED | UNKNOWN | EXACT | PHRASE | BROAD', // The match type of the keyword.
            text: 'string', // The text of the keyword (at most 80 characters and 10 words).
        },
        recommended_match_type: 'UNSPECIFIED | UNKNOWN | EXACT | PHRASE | BROAD', // The recommended new match type.
    },
    keyword_recommendation: {
        recommended_cpc_bid_micros: 'string', // The recommended CPC (cost-per-click) bid.
        keyword: {
            match_type: 'UNSPECIFIED | UNKNOWN | EXACT | PHRASE | BROAD', // The match type of the keyword.
            text: 'string', // The text of the keyword (at most 80 characters and 10 words).
        },
    },
    campaign_budget: 'string', // The budget targeted by this recommendation. This will be set only when the recommendation affects a single campaign budget.  This field will be set for the following recommendation types: CAMPAIGN_BUDGET
    maximize_conversions_opt_in_recommendation: {
        recommended_budget_amount_micros: 'string', // The recommended new budget amount.
    },
    type:
        'UNSPECIFIED | UNKNOWN | CAMPAIGN_BUDGET | KEYWORD | TEXT_AD | TARGET_CPA_OPT_IN | MAXIMIZE_CONVERSIONS_OPT_IN | ENHANCED_CPC_OPT_IN | SEARCH_PARTNERS_OPT_IN | MAXIMIZE_CLICKS_OPT_IN | OPTIMIZE_AD_ROTATION | KEYWORD_MATCH_TYPE | MOVE_UNUSED_BUDGET', // The type of recommendation.
    impact: {
        base_metrics: {
            cost_micros: 'string', // Cost (in micros) for advertising, in the local currency for the account.
            video_views: 'number', // Number of video views for a video ad campaign.
            impressions: 'number', // Number of ad impressions.
            clicks: 'number', // Number of ad clicks.
            conversions: 'number', // Number of conversions.
        },
        potential_metrics: {
            cost_micros: 'string', // Cost (in micros) for advertising, in the local currency for the account.
            video_views: 'number', // Number of video views for a video ad campaign.
            impressions: 'number', // Number of ad impressions.
            clicks: 'number', // Number of ad clicks.
            conversions: 'number', // Number of conversions.
        },
    },
    ad_group: 'string', // The ad group targeted by this recommendation. This will be set only when the recommendation affects a single ad group.  This field will be set for the following recommendation types: KEYWORD, OPTIMIZE_AD_ROTATION, TEXT_AD
    campaign: 'string', // The campaign targeted by this recommendation. This will be set only when the recommendation affects a single campaign.  This field will be set for the following recommendation types: ENHANCED_CPC_OPT_IN, KEYWORD, MAXIMIZE_CLICKS_OPT_IN, MAXIMIZE_CONVERSIONS_OPT_IN, OPTIMIZE_AD_ROTATION, SEARCH_PARTNERS_OPT_IN, TARGET_CPA_OPT_IN, TEXT_AD
    text_ad_recommendation: {
        creation_date: 'string', // Creation date of the recommended ad. YYYY-MM-DD format, e.g., 2018-04-17.
        auto_apply_date: 'string', // Date, if present, is the earliest when the recommendation will be auto applied. YYYY-MM-DD format, e.g., 2018-04-17.
        ad: {
            gmail_ad: {
                marketing_image_description: 'string', // Description of the marketing image.
                marketing_image_display_call_to_action: {
                    text: 'string', // Text for the display-call-to-action.
                    url_collection_id: 'string', // Identifies the url collection in the ad.url_collections field. If not set the url defaults to final_url.
                    text_color: 'string', // Text color for the display-call-to-action in hexadecimal, e.g. #ffffff for white.
                },
                product_videos: 'array', // Product videos. Up to 7 videos are supported. At least one product video or a marketing image must be specified.
                product_images: 'array', // Product images. Up to 15 images are supported.
                marketing_image_headline: 'string', // Headline of the marketing image.
                marketing_image: 'string', // The MediaFile resource name of the marketing image. Valid image types are GIF, JPEG and PNG. The image must either be landscape with a minimum size of 600x314 pixels and aspect ratio of 600:314 (+-1%) or square with a minimum size of 300x300 pixels and aspect ratio of 1:1 (+-1%)
                teaser: {
                    description: 'string', // Description of the teaser.
                    logo_image: 'string', // The MediaFile resource name of the logo image. Valid image types are GIF, JPEG and PNG. The minimum size is 144x144 pixels and the aspect ratio must be 1:1 (+-1%).
                    business_name: 'string', // Business name of the advertiser.
                    headline: 'string', // Headline of the teaser.
                },
                header_image: 'string', // The MediaFile resource name of the header image. Valid image types are GIF, JPEG and PNG. The minimum size is 300x100 pixels and the aspect ratio must be between 3:1 and 5:1 (+-1%).
            },
            final_mobile_urls: 'array', // The list of possible final mobile URLs after all cross-domain redirects for the ad.
            expanded_text_ad: {
                path_1: 'string', // The text that can appear alongside the ad's displayed URL.
                headline_part_1: 'string', // The first part of the ad's headline.
                description: 'string', // The description of the ad.
                description_2: 'string', // The second description of the ad.
                path_2: 'string', // Additional text that can appear alongside the ad's displayed URL.
                headline_part_3: 'string', // The third part of the ad's headline.
                headline_part_2: 'string', // The second part of the ad's headline.
            },
            final_urls: 'array', // The list of possible final URLs after all cross-domain redirects for the ad.
            id: 'string', // The ID of the ad.
            responsive_search_ad: {
                headlines: 'array', // List of text assets for headlines. When the ad serves the headlines will be selected from this list.
                path_2: 'string', // Second part of text that may appear appended to the url displayed in the ad. This field can only be set when path1 is also set.
                descriptions: 'array', // List of text assets for descriptions. When the ad serves the descriptions will be selected from this list.
                path_1: 'string', // First part of text that may appear appended to the url displayed in the ad.
            },
            legacy_app_install_ad: {
                app_id: 'string', // The id of the mobile app.
                description_2: 'string', // The second description line of the ad.
                description_1: 'string', // The first description line of the ad.
                headline: 'string', // The headline of the ad.
                app_store:
                    'UNSPECIFIED | UNKNOWN | APPLE_APP_STORE | GOOGLE_PLAY | WINDOWS_STORE | WINDOWS_PHONE_STORE | CN_APP_STORE', // The app store the mobile app is available in.
            },
            added_by_google_ads: 'boolean', // Indicates if this ad was automatically added by Google Ads and not by a user. For example, this could happen when ads are automatically created as suggestions for new ads based on knowledge of how existing ads are performing.
            app_ad: {
                mandatory_ad_text: {
                    pinned_field:
                        'UNSPECIFIED | UNKNOWN | HEADLINE_1 | HEADLINE_2 | HEADLINE_3 | DESCRIPTION_1 | DESCRIPTION_2', // The pinned field of the asset. This restricts the asset to only serve within this field. Multiple assets can be pinned to the same field. An asset that is unpinned or pinned to a different field will not serve in a field where some other asset has been pinned.
                    text: 'string', // Asset text.
                },
                images: 'array', // List of image assets that may be displayed with the ad.
                html_5_media_bundles: 'array', // List of media bundle assets that may be used with the ad.
                headlines: 'array', // List of text assets for headlines. When the ad serves the headlines will be selected from this list.
                youtube_videos: 'array', // List of YouTube video assets that may be displayed with the ad.
                descriptions: 'array', // List of text assets for descriptions. When the ad serves the descriptions will be selected from this list.
            },
            type:
                'UNSPECIFIED | UNKNOWN | TEXT_AD | EXPANDED_TEXT_AD | CALL_ONLY_AD | EXPANDED_DYNAMIC_SEARCH_AD | HOTEL_AD | SHOPPING_SMART_AD | SHOPPING_PRODUCT_AD | VIDEO_AD | GMAIL_AD | IMAGE_AD | RESPONSIVE_SEARCH_AD | LEGACY_RESPONSIVE_DISPLAY_AD | APP_AD | LEGACY_APP_INSTALL_AD | RESPONSIVE_DISPLAY_AD', // The type of ad.
            hotel_ad: {},
            text_ad: {
                description_1: 'string', // The first line of the ad's description.
                headline: 'string', // The headline of the ad.
                description_2: 'string', // The second line of the ad's description.
            },
            system_managed_resource_source: 'UNSPECIFIED | UNKNOWN | AD_VARIATIONS', // If this ad is system managed, then this field will indicate the source. This field is read-only.
            shopping_product_ad: {},
            device_preference: 'UNSPECIFIED | UNKNOWN | MOBILE | TABLET | DESKTOP | OTHER', // The device preference for the ad. You can only specify a preference for mobile devices. When this preference is set the ad will be preferred over other ads when being displayed on a mobile device. The ad can still be displayed on other device types, e.g. if no other ads are available. If unspecified (no device preference), all devices are targeted. This is only supported by some ad types.
            name: 'string', // The name of the ad. This is only used to be able to identify the ad. It does not need to be unique and does not affect the served ad.
            legacy_responsive_display_ad: {
                allow_flexible_color: 'boolean', // Advertiser's consent to allow flexible color. When true, the ad may be served with different color if necessary. When false, the ad will be served with the specified colors or a neutral color. The default value is true. Must be true if main_color and accent_color are not set.
                marketing_image: 'string', // The MediaFile resource name of the marketing image used in the ad.
                promo_text: 'string', // Promotion text used for dyanmic formats of responsive ads. For example 'Free two-day shipping'.
                accent_color: 'string', // The accent color of the ad in hexadecimal, e.g. #ffffff for white. If one of main_color and accent_color is set, the other is required as well.
                logo_image: 'string', // The MediaFile resource name of the logo image used in the ad.
                main_color: 'string', // The main color of the ad in hexadecimal, e.g. #ffffff for white. If one of main_color and accent_color is set, the other is required as well.
                short_headline: 'string', // The short version of the ad's headline.
                description: 'string', // The description of the ad.
                price_prefix: 'string', // Prefix before price. E.g. 'as low as'.
                square_logo_image: 'string', // The MediaFile resource name of the square logo image used in the ad.
                long_headline: 'string', // The long version of the ad's headline.
                call_to_action_text: 'string', // The call-to-action text for the ad.
                square_marketing_image: 'string', // The MediaFile resource name of the square marketing image used in the ad.
                format_setting: 'UNSPECIFIED | UNKNOWN | ALL_FORMATS | NON_NATIVE | NATIVE', // Specifies which format the ad will be served in. Default is ALL_FORMATS.
                business_name: 'string', // The business name in the ad.
            },
            url_collections: 'array', // Additional URLs for the ad that are tagged with a unique identifier that can be referenced from other fields in the ad.
            url_custom_parameters: 'array', // The list of mappings that can be used to substitute custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`.
            video_ad: {
                media_file: 'string', // The MediaFile resource to use for the video.
                bumper: {},
                out_stream: {
                    headline: 'string', // The headline of the ad.
                    description: 'string', // The description line.
                },
                non_skippable: {},
                in_stream: {
                    action_headline: 'string', // Additional text displayed with the CTA (call-to-action) button to give context and encourage clicking on the button.
                    action_button_label: 'string', // Label on the CTA (call-to-action) button taking the user to the video ad's final URL. Required for TrueView for action campaigns, optional otherwise.
                },
            },
            image_ad: {
                image_url: 'string', // URL of the full size image.
                preview_pixel_height: 'string', // Height in pixels of the preview size image.
                preview_image_url: 'string', // URL of the preview size image.
                ad_id_to_copy_image_from: 'string', // An ad ID to copy the image from.
                mime_type:
                    'UNSPECIFIED | UNKNOWN | IMAGE_JPEG | IMAGE_GIF | IMAGE_PNG | FLASH | TEXT_HTML | PDF | MSWORD | MSEXCEL | RTF | AUDIO_WAV | AUDIO_MP3 | HTML5_AD_ZIP', // The mime type of the image.
                data: 'string', // Raw image data as bytes.
                pixel_width: 'string', // Width in pixels of the full size image.
                preview_pixel_width: 'string', // Width in pixels of the preview size image.
                media_file: 'string', // The MediaFile resource to use for the image.
                name: 'string', // The name of the image. If the image was created from a MediaFile, this is the MediaFile's name. If the image was created from bytes, this is empty.
                pixel_height: 'string', // Height in pixels of the full size image.
            },
            tracking_url_template: 'string', // The URL template for constructing a tracking URL.
            shopping_smart_ad: {},
            expanded_dynamic_search_ad: {
                description: 'string', // The description of the ad.
            },
            call_only_ad: {
                conversion_reporting_state:
                    'UNSPECIFIED | UNKNOWN | DISABLED | USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION | USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION', // The call conversion behavior of this call only ad. It can use its own call conversion setting, inherit the account level setting, or be disabled.
                description_2: 'string', // The second line of the ad's description.
                disable_call_conversion: 'boolean', // Whether to disable call conversion for the creative. If set to `true`, disables call conversions even when `call_tracked` is `true`. If `call_tracked` is `false`, this field is ignored.
                headline_2: 'string', // Second headline in the ad.
                business_name: 'string', // The business name in the ad.
                call_tracked: 'boolean', // Whether to enable call tracking for the creative. Enabling call tracking also enables call conversions.
                phone_number: 'string', // The phone number in the ad.
                country_code: 'string', // The country code in the ad.
                headline_1: 'string', // First headline in the ad.
                phone_number_verification_url: 'string', // The URL to be used for phone number verification.
                description_1: 'string', // The first line of the ad's description.
                conversion_action: 'string', // The conversion action to attribute a call conversion to. If not set a default conversion action is used. This field only has effect if call_tracked is set to true. Otherwise this field is ignored.
            },
            display_url: 'string', // The URL that appears in the ad description for some ad formats.
            responsive_display_ad: {
                call_to_action_text: 'string', // The call-to-action text for the ad. Maximum display width is 30.
                format_setting: 'UNSPECIFIED | UNKNOWN | ALL_FORMATS | NON_NATIVE | NATIVE', // Specifies which format the ad will be served in. Default is ALL_FORMATS.
                business_name: 'string', // The advertiser/brand name. Maximum display width is 25.
                headlines: 'array', // Short format headlines for the ad. The maximum length is 30 characters. At least 1 and max 5 headlines can be specified.
                descriptions: 'array', // Descriptive texts for the ad. The maximum length is 90 characters. At least 1 and max 5 headlines can be specified.
                marketing_images: 'array', // Marketing images to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 600x314 and the aspect ratio must be 1.91:1 (+-1%). At least one marketing_image is required. Combined with square_marketing_images the maximum is 15.
                allow_flexible_color: 'boolean', // Advertiser's consent to allow flexible color. When true, the ad may be served with different color if necessary. When false, the ad will be served with the specified colors or a neutral color. The default value is true. Must be true if main_color and accent_color are not set.
                promo_text: 'string', // Promotion text used for dyanmic formats of responsive ads. For example 'Free two-day shipping'.
                accent_color: 'string', // The accent color of the ad in hexadecimal, e.g. #ffffff for white. If one of main_color and accent_color is set, the other is required as well.
                main_color: 'string', // The main color of the ad in hexadecimal, e.g. #ffffff for white. If one of main_color and accent_color is set, the other is required as well.
                square_marketing_images: 'array', // Square marketing images to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 300x300 and the aspect ratio must be 1:1 (+-1%). At least one square marketing_image is required. Combined with marketing_images the maximum is 15.
                square_logo_images: 'array', // Square logo images to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 128x128 and the aspect ratio must be 1:1 (+-1%). Combined with square_logo_images the maximum is 5.
                youtube_videos: 'array', // Optional YouTube vidoes for the ad. A maximum of 5 videos can be specified.
                logo_images: 'array', // Logo images to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 512x128 and the aspect ratio must be 4:1 (+-1%). Combined with square_logo_images the maximum is 5.
                price_prefix: 'string', // Prefix before price. E.g. 'as low as'.
                long_headline: {
                    pinned_field:
                        'UNSPECIFIED | UNKNOWN | HEADLINE_1 | HEADLINE_2 | HEADLINE_3 | DESCRIPTION_1 | DESCRIPTION_2', // The pinned field of the asset. This restricts the asset to only serve within this field. Multiple assets can be pinned to the same field. An asset that is unpinned or pinned to a different field will not serve in a field where some other asset has been pinned.
                    text: 'string', // Asset text.
                },
            },
        },
    },
    maximize_clicks_opt_in_recommendation: {
        recommended_budget_amount_micros: 'string', // The recommended new budget amount. Only set if the current budget is too high.
    },
    move_unused_budget_recommendation: {
        excess_campaign_budget: 'string', // The excess budget's resource_name.
        budget_recommendation: {
            current_budget_amount_micros: 'string', // The current budget amount in micros.
            budget_options: 'array', // The budget amounts and associated impact estimates for some values of possible budget amounts.
            recommended_budget_amount_micros: 'string', // The recommended budget amount in micros.
        },
    },
    enhanced_cpc_opt_in_recommendation: {},
    dismissed: 'boolean', // Whether the recommendation is dismissed or not.
    target_cpa_opt_in_recommendation: {
        options: 'array', // The available goals and corresponding options for Target CPA strategy.
        recommended_target_cpa_micros: 'string', // The recommended average CPA target. See required budget amount and impact of using this recommendation in options list.
    },
    campaign_budget_recommendation: {
        current_budget_amount_micros: 'string', // The current budget amount in micros.
        budget_options: 'array', // The budget amounts and associated impact estimates for some values of possible budget amounts.
        recommended_budget_amount_micros: 'string', // The recommended budget amount in micros.
    },
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'recommendations'
const GET_METHOD = 'getRecommendation'
const GET_REQUEST = 'GetRecommendationRequest'

export default class RecommendationService extends Service {
    public async get(id: number | string): Promise<Recommendation> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as Recommendation
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ recommendation: Recommendation }>> {
        return this.getListResults('recommendation', options)
    }
}
