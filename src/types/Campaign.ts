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
    }

    /**
     * Interface for NewCampaignConfig
     * @interface
     */
    export interface NewCampaignConfig extends NewEntityConfig {
        budget_id: string
        advertising_channel_type: AdvertisingChannelType | keyof typeof AdvertisingChannelType
        target_spend: TargetSpend
    }
}
export = Campaign
