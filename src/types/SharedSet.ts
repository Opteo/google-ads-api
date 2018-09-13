import { Entity, NewEntityConfig } from './Entity'
// import { UpdateConfig } from './Global'

declare namespace SharedSet {
    /**
     *  Shared Set Instance Interface
     * @interface
     */
    export interface SharedSet extends Entity {
        member_count: string|number,
        reference_count: string|number,
        status: SharedSetStatus,
        type: SharedSetType,
    }

     /**
     * Enum for Shared Set Status
     * @readonly
     * @enum {string}
     */
    enum SharedSetStatus {
        ENABLED = 'ENABLED',
        REMOVED = 'REMOVED',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED',
    }

    /**
     * Enum for Shared Set Type
     * @readonly
     * @enum {string}
     */
    enum SharedSetType {
        NEGATIVE_KEYWORDS = 'NEGATIVE_KEYWORDS',
        NEGATIVE_PLACEMENTS = 'NEGATIVE_PLACEMENTS',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED',
    }

    /**
     * Interface for New Shared Set Config
     * @interface
     */
    export interface NewSharedSetConfig extends NewEntityConfig {
        type: SharedSetType | keyof typeof SharedSetType,
    }
    
}
export = SharedSet