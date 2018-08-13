import { Entity } from './Entity'

import { NewEntityConfig } from './Entity'

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
        UNSPECIFIED = 'Unspecified',
        UNKNOWN = 'Unknown',
        ENABLED = 'Enabled',
        PAUSED = 'Paused',
        REMOVED = 'Removed',
    }

    /**
     * Enum for ServingStatus
     * @readonly
     * @enum {string}
     */
    enum ServingStatus {
        ENABLED = 'Enabled',
        REMOVED = 'Removed',
        PAUSED = 'Paused',
    }

    /**
     * Enum for AdServingOptimizationStatus
     * @readonly
     * @enum {string}
     */
    enum AdServingOptimizationStatus {
        UNSPECIFIED = 'Unspecified',
        UNKNOWN = 'Unknown',
        OPTIMIZE = 'Optimize',
        CONVERSION_OPTIMIZE = 'Conversion Optimize',
        ROTATE = 'Rotate',
        ROTATE_INDEFINITELY = 'Rotate Indefinitely',
        UNAVAILABLE = 'Unavailable',
    }

    /**
     * Enum for AdvertisingChannelType
     * @readonly
     * @enum {string}
     */
    enum AdvertisingChannelType {
        UNSPECIFIED = 'Unspecified',
        UNKNOWN = 'Unknown',
        SEARCH = 'Search',
        HOTEL = 'Hotel',
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
        cpc_bid_ceiling_micros: string|number
    }

    /**
     * Interface for NewCampaignConfig
     * @interface
     */
    export interface NewCampaignConfig extends NewEntityConfig {
        budget_id: string,
        target_spend: TargetSpend
    }
}
export = Campaign