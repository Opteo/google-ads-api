import { Entity, NewEntityConfig } from './Entity'

declare namespace CampaignBudget {
    /**
     * Main Campaign Interface
     * @interface
     */
    export interface CampaignBudget extends Entity {
        // resource_name: string
        // id: string
        // name: string
        amount_micros: string
        status: BudgetStatus
        delivery_method: DeliveryMethod
        explicitly_shared: boolean
        reference_count: string
    }
    /**
     * Enum for DeliveryMethod
     * @readonly
     * @enum {string}
     */
    enum DeliveryMethod {
        STANDARD = 'STANDARD',
        ACCELERATED = 'ACCELERATED',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED',
    }

    /**
     * Enum for BudgetStatus
     * @readonly
     * @enum {string}
     */
    enum BudgetStatus {
        ENABLED = 'ENABLED',
        REMOVED = 'REMOVED',
        PAUSED = 'PAUSED',
        UNSPECIFIED = 'UNSPECIFIED',
    }
    
    /**
     * Enum for BudgetPeriod
     * @readonly
     * @enum {string}
     */
    enum BudgetPeriod {
        CUSTOM = 'CUSTOM',
        DAILY = 'DAILY',
        FIXED_DAILY = 'FIXED_DAILY',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED',
    }

    /**
     * Interface for NewCampaignBudgetConfig
     * @interface
     */
    export interface NewCampaignBudgetConfig extends NewEntityConfig {
        amount_micros: string | number
        explicitly_shared: boolean
        delivery_method?: DeliveryMethod
        period?: BudgetPeriod
    }
}
export = CampaignBudget
