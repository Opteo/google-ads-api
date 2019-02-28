import { Entity, NewEntityConfig } from './Entity'

declare namespace ConversionAction {
    /**
     * Main ConversionAction Interface
     * @interface
     */
    export interface ConversionAction extends Entity {
        // resource_name: string
        // id: string
        // name: string
        status: ConversionActionStatus
        type: ConversionActionType
        category: ConversionActionCategory
        owner_customer: string
        include_in_conversions_metric: boolean
        click_through_lookback_window_days: number
        view_through_lookback_window_days: number
        value_settings: ValueSettings
        counting_type: ConversionActionCountingType
        attribution_model_settings: AttributionModelSettings
        tag_snippets: TagSnippet[]
        phone_call_duration_seconds: number
        app_id: string
    }

    /**
     * Enum for ConversionActionStatus
     * @readonly
     * @enum {string}
     */
    enum ConversionActionStatus {
        UNSPECIFIED = 'UNSPECIFIED',
        UNKNOWN = 'UNKNOWN',
        ENABLED = 'ENABLED',
        REMOVED = 'REMOVED',
        HIDDEN = 'HIDDEN',
    }

    /**
     * Enum for ConversionActionType
     * @readonly
     * @enum {string}
     */
    enum ConversionActionType {
        UNSPECIFIED = 'UNSPECIFIED',
        UNKNOWN = 'UNKNOWN',
        AD_CALL = 'AD_CALL',
        CLICK_TO_CALL = 'CLICK_TO_CALL',
        GOOGLE_PLAY_DOWNLOAD = 'GOOGLE_PLAY_DOWNLOAD',
        GOOGLE_PLAY_IN_APP_PURCHASE = 'GOOGLE_PLAY_IN_APP_PURCHASE',
        UPLOAD_CALLS = 'UPLODAD_CALLS',
        UPLOAD_CLICKS = 'UPLOAD_CLICKS',
        WEBPAGE = 'WEBPAGE',
        WESITE_CALL = 'WEBSITE_CALL',
    }

    /**
     * Enum for ConversionActionCategory
     * @readonly
     * @enum {string}
     */
    enum ConversionActionCategory {
        UNSPECIFIED = 'UNSPECIFIED',
        UNKNOWN = 'UNKNOWN',
        DEFAULT = 'DEFAULT',
        PAGE_VIEW = 'PAGE_VIEW',
        PURCHASE = 'PURCHASE',
        SIGNUP = 'SIGNUP',
        LEAD = 'LEAD',
        DOWNLOAD = 'DOWNLOAD',
    }

    /**
     * Enum for ConversionActionCountingType
     * @readonly
     * @enum {string}
     */
    enum ConversionActionCountingType {
        UNSPECIFIED = 'UNSPECIFIED',
        UNKNOWN = 'UNKNOWN',
        ONE_PER_CLICK = 'ONE_PER_CLICK',
        MANY_PER_CLICK = 'MANY_PER_CLICK',
    }

    /**
     * Enum for AttributionModel
     * @readonly
     * @enum {string}
     */
    enum AttributionModel {
        UNSPECIFIED = 'UNSPECIFIED',
        UNKNOWN = 'UNKNOWN',
        GOOGLE_ADS_LAST_CLICK = 'GOOGLE_ADS_LAST_CLICK',
        GOOGLE_SEARCH_ATTRIBUTION_FIRST_CLICK = 'GOOGLE_SEARCH_ATTRIBUTION_FIRST_CLICK',
        GOOGLE_SEARCH_ATTRIBUTION_LINEAR = 'GOOGLE_SEARCH_ATTRIBUTION_LINEAR',
        GOOGLE_SEARCH_ATTRIBUTION_TIME_DECAY = 'GOOGLE_SEARCH_ATTRIBUTION_TIME_DECAY',
        GOOGLE_SEARCH_ATTRIBUTION_POSITION_BASED = 'GOOGLE_SEARCH_ATTRIBUTION_POSITION_BASED',
        GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN = 'GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN',
    }

    /**
     * Enum for DataDrivenModelStatus
     * @readonly
     * @enum {string}
     */
    enum DataDrivenModelStatus {
        UNSPECIFIED = 'UNSPECIFIED',
        UNKNOWN = 'UNKNOWN',
        AVAILABLE = 'AVAILABLE',
        STALE = 'STALE',
        EXPIRED = 'EXPIRED',
        NEVER_GENERATED = 'NEVER_GENERATED',
    }

    /**
     * Enum for TrackingCodeType
     * @readonly
     * @enum {string}
     */
    enum TrackingCodeType {
        UNSPECIFIED = 'UNSPECIFIED',
        UNKNOWN = 'UNKNOWN',
        WEBPAGE = 'WEBPAGE',
        WEBPAGE_ONCLICK = 'WEBPAGE_ONCLICK',
        CLICK_TO_CALL = 'CLICK_TO_CALL',
    }

    /**
     * Enum for TrackingCodePageFormat
     * @readonly
     * @enum {string}
     */
    enum TrackingCodePageFormat {
        UNSPECIFIED = 'UNSPECIFIED',
        UNKNOWN = 'UNKNOWN',
        HTML = 'HTML',
        AMP = 'AMP',
    }

    /**
     * Interface for ValueSettings
     * @interface
     */
    export interface ValueSettings {
        default_value?: number
        default_currency_code?: string
        always_use_default_value?: boolean
    }

    /**
     * Interface for AttributionModelSettings
     * @interface
     */
    export interface AttributionModelSettings {
        attribution_model?: AttributionModel | string
        data_driven_model_status?: DataDrivenModelStatus
    }

    /**
     * Interface for TagSnippet
     * @interface
     */
    export interface TagSnippet {
        type: TrackingCodeType
        page_format: TrackingCodePageFormat
        global_site_tag: string
        event_snippet: string
    }

    /**
     *  NewConversionActionConfig Interface
     * @interface
     */
    export interface NewConversionActionConfig extends NewEntityConfig {
        type?: ConversionActionType | string
        category?: ConversionActionCategory | string
        include_in_conversions_metric?: boolean
        click_through_lookback_window_days?: number
        view_through_lookback_window_days?: number
        value_settings?: ValueSettings
        counting_type?: ConversionActionCountingType | string
        attribution_model_settings?: AttributionModelSettings
        phone_call_duration_seconds?: number
        app_id?: string
    }
}
export = ConversionAction
