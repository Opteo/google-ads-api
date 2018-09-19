import { NewEntityConfig } from './Entity'
import { KeywordObject } from './Keyword'

declare namespace SharedSetCriterion {
    /**
     *  SharedSetCriterion Interface
     * @interface
     */
    export interface SharedSetCriterion {
        keyword: KeywordObject
        resource_name: string
        shared_set: string
        type: SharedSetCriterionType
    }

    /**
     * Enum for SharedSetCriterionType
     * @readonly
     * @enum {string}
     */
    enum SharedSetCriterionType {
        DEVICE = 'DEVICE',
        KEYWORD = 'KEYWORD',
        LISTING_GROUP = 'LISTING_GROUP',
        LOCATION = 'LOCATION',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED',
    }

    /**
     * Interface for New Shared Set Criterion
     * @interface
     * @param campaign_id
     */
    interface NewSharedCriterion extends NewEntityConfig {
        shared_set_id: string | number
    }

    interface newKeyword extends NewSharedCriterion {
        keyword: KeywordObject
    }

    export type NewSharedSetCriterion = newKeyword
}
export = SharedSetCriterion
