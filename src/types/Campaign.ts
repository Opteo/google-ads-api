import { Entity, NewEntityConfig } from './Entity'

declare namespace Campaign {
    /**
     * Main Campaign Interface
     * @interface
     */
    export interface Campaign extends Entity {
        // resource_name: string
        // id: string
        // name: string
        status: CampaignStatus
        campaign_budget: string
        ad_serving_optimization_status: AdServingOptimizationStatus
        advertising_channel_type: AdvertisingChannelType
        network_settings: NetworkSettings
        start_date: string
        end_date: string
        serving_status: ServingStatus
        bidding_strategy_type: string
        target_spend: TargetSpend
        segments: CampaignSegments
    }

    /**
     * Interface for CampaignSegments
     * @interface
     */
    export interface CampaignSegments {
        ad_network_type: string
        date: string
        day_of_week: string
        device: string
        hour: string
        month: string
        quarter: string
        slot: string
        week: string
        year: string
    }

    /**
     * Enum for CampaignStatus
     * @readonly
     * @enum {string}
     */
    enum CampaignStatus {
        UNSPECIFIED = 'UNSPECIFIED',
        UNKNOWN = 'UNKNOWN',
        ENABLED = 'ENABLED',
        PAUSED = 'PAUSED',
        REMOVED = 'REMOVED',
    }

    /**
     * Enum for ServingStatus
     * @readonly
     * @enum {string}
     */
    enum ServingStatus {
        ENABLED = 'ENABLED',
        REMOVED = 'REMOVED',
        PAUSED = 'PAUSED',
    }

    /**
     * Enum for AdServingOptimizationStatus
     * @readonly
     * @enum {string}
     */
    enum AdServingOptimizationStatus {
        UNSPECIFIED = 'UNSPECIFIED',
        UNKNOWN = 'UNKNOWN',
        OPTIMIZE = 'OPTIMIZE',
        CONVERSION_OPTIMIZE = 'CONVERSION OPTIMIZE',
        ROTATE = 'ROTATE',
        ROTATE_INDEFINITELY = 'ROTATE INDEFINITELY',
        UNAVAILABLE = 'UNAVAILABLE',
    }

    /**
     * Enum for AdvertisingChannelType
     * @readonly
     * @enum {string}
     */
    enum AdvertisingChannelType {
        DISPLAY = 'DISPLAY',
        HOTEL = 'HOTEL',
        SEARCH = 'SEARCH',
        SHOPPING = 'SHOPPING',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED',
        VIDEO = 'VIDEO',
    }
    
    /**
     * Enum for AdvertisingChannelSubType
     * @readonly
     * @enum {string}
     */
    enum AdvertisingChannelSubType {
        DISPLAY_EXPRESS = 'DISPLAY_EXPRESS',
        DISPLAY_GMAIL_AD = 'DISPLAY_GMAIL_AD',
        DISPLAY_MOBILE_APP = 'DISPLAY_MOBILE_APP',
        DISPLAY_SMART_CAMPAIGN = 'DISPLAY_SMART_CAMPAIGN',
        SEARCH_EXPRESS = 'SEARCH_EXPRESS',
        SEARCH_MOBILE_APP = 'SEARCH_MOBILE_APP',
        SHOPPING_SMART_ADS = 'SHOPPING_SMART_ADS',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED',
        VIDEO_ACTION = 'VIDEO_ACTION',
        VIDEO_OUTSTREAM = 'VIDEO_OUTSTREAM'
    }

    /**
     * Interface for NetworkSettings
     * @interface
     */
    export interface NetworkSettings {
        target_google_search: boolean
        target_search_network: boolean
        target_content_network: boolean
        target_partner_search_network: boolean
    }

    /**
     * Interface for TargetSpend
     * @interface
     */
    export interface TargetSpend {
        cpc_bid_ceiling_micros: string | number
        target_spend_micros?: string | number
    }
    
    /**
     * Interface for ManualCpc
     * @interface
     */
    export interface ManualCpcy {
        enhanced_cpc_enabled: boolean
    }
    
    /**
     * Interface for ManualCpc
     * @interface
     */
    export interface ManualCpc {
        enhanced_cpc_enabled: boolean
    }
    
    /**
     * Interface for MaximizeConversionValue
     * @interface
     */
    export interface MaximizeConversionValue {
        target_roas: string | number
    }
    
    /**
     * Interface for PercentCpc
     * @interface
     */
    export interface PercentCpc {
        cpc_bid_ceiling_micros?: string | number
        enhanced_cpc_enabled?: boolean
    }
    
    /**
     * Interface for TargetCpa
     * @interface
     */
    export interface TargetCpa {
        target_cpa_micros?: string | number
        cpc_bid_ceiling_micros?: string | number
        cpc_bid_floor_micros?: string | number
    }
    
    /**
     * Interface for TargetRoas
     * @interface
     */
    export interface TargetRoas {
        target_cpa_micros?: string | number
        cpc_bid_ceiling_micros?: string | number
        cpc_bid_floor_micros?: string | number
    }

    /**
     * Interface for NewCampaignConfig
     * @interface
     */
    export interface NewCampaignConfig extends NewEntityConfig {
        budget_id: string
        advertising_channel_type: AdvertisingChannelType | keyof typeof AdvertisingChannelType
        target_spend?: TargetSpend
        status?: CampaignStatus
        network_setting?: NetworkSettings
        advertising_channel_sub_type?: AdvertisingChannelSubType | keyof typeof AdvertisingChannelSubType
        manual_cpc?: ManualCpc
        // manual_cpm?: any
        // manual_cpv?: any
        maximize_conversion_value?: MaximizeConversionValue
        // maximize_conversions?: any
        percent_cpc?: PercentCpc
        target_cpa?: TargetCpa
        // target_cpm?: any
        target_roas?: TargetRoas
        target_spend?: TargetSpend
    }
}
export = Campaign
