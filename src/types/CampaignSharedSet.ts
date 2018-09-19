import { NewEntityConfig } from './Entity'

declare namespace CampaignSharedSet {
    /**
     * Main Campaign Interface
     * @interface
     */
    export interface CampaignSharedSet {
        resource_name: string
        campaign: string
        shared_set: string
        status: CampaignSharedSetStatus
    }

    /**
     * Enum for CampaignSharedSetStatus
     * @readonly
     * @enum {string}
     */
    enum CampaignSharedSetStatus {
        ENABLED = 'ENABLED',
        REMOVED = 'REMOVED',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED',
    }

    /**
     * Create Campaign Shared Set Interface
     * @interface
     */
    export interface CreateConfig extends NewEntityConfig {
        campaign_id: string | number
        shared_set_id: string | number
    }
}
export = CampaignSharedSet
