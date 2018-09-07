import { Entity, ListConfig, NewEntityConfig } from './Entity'

declare namespace AdGroupAd {

    /**
     * Main AdGroupAd Interface
     * @interface
     */
    export interface AdGroupAd extends Entity {
        // resource_name: string,
        status: AdStatus,
        ad_group: string,
        ad: Ad
    }

    /**
     * Ad Interface
     * @interface
     */
    export interface Ad {
        id: string|number,
        final_urls: { [key: string]: string },
        final_mobile_urls?: { [key: string]: string },
        display_url: string,
        type: AdType,
        // [key: string]: TextAd | ExpandedTextAd | DynamicSearchAd | ExpandedDynamicSearchAd | ResponsiveDisplayAd | CallOnlyAd,
        tracking_url_template?: string,
        url_custom_parameters?: { [key: string]: string },
    }

    /**
     * TextAd Interface
     * @interface
     */
    export interface TextAd {
        description1: string,
        description2: string,
        headline: string,
    }

    /**
     * ExpandedTextAd Interface
     * @interface
     */
    export interface ExpandedTextAd {
        description: string,
        headline_part1: string,
        headline_part2: string,
        path1: string,
        path2: string,
    }

    /**
     * DynamicSearchAd Interface
     * @interface
     */
    export interface DynamicSearchAd {
        description1: string,
        description2: string,
    }

    /**
     * ExpandedDynamicSearchAd Interface
     * @interface
     */
    export interface ExpandedDynamicSearchAd {
        description: string,
    }

    /**
     * ResponsiveDisplayAd Interface
     * @interface
     */
    export interface ResponsiveDisplayAd {
        business_name: string,
        description: string,
        long_headline: string,
        short_headline: string,
    }

    /**
     * CallOnlyAd Interface
     * @interface
     */
    export interface CallOnlyAd {
        business_name: string,
        call_tracked: string,
        country_code: string,
        description1: string,
        description2: string,
        disable_call_conversion: boolean,
        phone_number: string,
        phone_number_verification_url: string,
    }

    /**
     * Enum for AdStatus
     * @readonly
     * @enum {string}
     */
    export enum AdStatus {
        ENABLED = 'ENABLED',
        PAUSED = 'PAUSED',
        REMOVED = 'REMOVED',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED'
    }

    /**
     * Enum for AdType
     * @readonly
     * @enum {string}
     */
    export enum AdType {
        CALL_ONLY_AD = 'CALL_ONLY_AD',
        DYNAMIC_SEARCH_AD = 'DYNAMIC_SEARCH_AD',
        EXPANDED_DYNAMIC_SEARCH_AD = 'EXPANDED_DYNAMIC_SEARCH_AD',
        EXPANDED_TEXT_AD = 'EXPANDED_TEXT_AD',
        HOTEL_AD = 'HOTEL_AD',
        RESPONSIVE_DISPLAY_AD = 'RESPONSIVE_DISPLAY_AD',
        TEXT_AD = 'TEXT_AD',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED'
    }

    /**
     * Interface for ListAdsConfig
     * @interface ListAdsConfig 
     */
    export interface ListAdsConfig extends ListConfig {
        ad_group_id: string|number
    }

    /**
     * Interface for NewAdConfig
     * @interface NewAdConfig 
     */
    export interface NewAdConfig extends NewEntityConfig {
        ad_group_id: string|number
        ad: object
    }
}

export = AdGroupAd