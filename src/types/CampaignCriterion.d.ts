import { KeywordObject } from './Keyword'
import { NewEntityConfig } from './Entity'

declare namespace CampaignCriterion {
    /**
     * CampaignCriterion Interface
     * @interface
     */
    export interface CampaignCriterion {
        resource_name: string,
        ad_schedule: AdSchedule,
        bid_modifier: number,
        campaign: string,
        criterion_id: number|string,
        device: Device,
        keyword: KeywordObject,
        location: string,
        negative: boolean,
        type: Type
    }

    /**
     * AdSchedule Interface
     * @interface
     */
    interface AdSchedule {
        day_of_week: DayOfWeek,
        end_hour: number,
        end_minute: number,
        start_hour: number,
        start_minute: number,
    }

    /**
     * Device Interface
     * @interface
     */
    interface Device {
        type: DeviceType | keyof typeof DeviceType
    }

    /**
     * Location Interface
     * @interface
     */
    interface Location {
        geo_target_constant: string
    }

     /**
     * Enum for Day Of Week
     * @readonly
     * @enum {string}
     */
    enum DayOfWeek {
        FRIDAY = 'FRIDAY',
        MONDAY = 'MONDAY',
        SATURDAY = 'SATURDAY',
        SUNDAY = 'SUNDAY',
        THURSDAY = 'THURSDAY',
        TUESDAY = 'TUESDAY',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED',
        WEDNESDAY = 'WEDNESDAY'
    }

     /**
     * Enum for Device Type
     * @readonly
     * @enum {string}
     */
    enum DeviceType {
        CONNECTED_TV = 'CONNECTED_TV',
        DESKTOP = 'DESKTOP',
        MOBILE = 'MOBILE',
        TABLET = 'TABLET',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED'
    } 

     /**
     * Enum for Criterion Type
     * @readonly
     * @enum {string}
     */
    enum Type {
        DEVICE = 'DEVICE',
        KEYWORD = 'KEYWORD',
        LISTING_GROUP = 'LISTING_GROUP',
        LOCATION = 'LOCATION',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED'
    }


    /**
     * Interface for New Criterion Config
     * @interface  
     * @param campaign_id
     */
    interface NewCriterion extends NewEntityConfig {
        campaign_id: string|number,
        type?: DeviceType | keyof typeof DeviceType,
        negative?: boolean,
        bid_modifier?: number
    }

    interface NewDevice extends NewCriterion {
        device: Device
    }  

    interface NewKeyword extends NewCriterion {
        negative: boolean,
        keyword: KeywordObject
    } 

    interface NewLocation extends NewCriterion {
        location: Location
    }

    interface newAdSchedule extends NewCriterion {
        ad_schedule: AdSchedule 
    }

    export type NewCriterionConfig = NewDevice | NewLocation | newAdSchedule | NewKeyword
}
export = CampaignCriterion