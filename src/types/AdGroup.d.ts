import { Entity } from './Entity'

import { NewEntityConfig } from './Entity'

declare namespace AdGroup {
    /**
     * Main AdGroup Interface
     * @interface
     */
    export interface AdGroup extends Entity {
        // resource_name: string
        // id: string
        // name: string
        status: AdGroupStatus,
        campaign: string,
        type: AdGroupType,
        cpc_bid_micros: string|number,
        cpm_bid_micros: string|number,
        cpa_bid_micros: string|number,
        cpv_bid_micros: string|number,
    }

    /**
     * Enum for CampaignStatus
     * @readonly
     * @enum {string}
     */
    enum AdGroupStatus {
        UNSPECIFIED = 'UNSPECIFIED',
        UNKNOWN = 'UNKNOWN',
        ENABLED = 'ENABLED',
        PAUSED = 'PAUSED',
        REMOVED = 'REMOVED',
    }

    /**
     * Enum for AdGroupType
     * @readonly
     * @enum {string}
     */
    enum AdGroupType {
        HOTEL_ADS = 'HOTEL_ADS',
        SEARCH_STANDARD = 'SEARCH_STANDARD',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED'
    }

    /**
     *  NewAdGroupConfig Interface
     * @interface
     */
    export interface NewAdGroupConfig extends NewEntityConfig {
        campaign_id: string|number,
        name: string
    }


}

export = AdGroup