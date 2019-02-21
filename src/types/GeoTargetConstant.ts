import { Entity } from './Entity'

declare namespace GeoTargetConstant {
    /**
     * Main GeoTargetConstant Interface
     * @interface
     */
    export interface GeoTargetConstant extends Entity {
        // resource_name: string
        // id: string
        // name: string
        country_code: string
        target_type: string
        status: GeoTargetConstantStatus
        canonical_name: string
    }

    /**
     * Enum for GeoTargetConstantStatus
     * @readonly
     * @enum {string}
     */
    enum GeoTargetConstantStatus {
        UNSPECIFIED = 'UNSPECIFIED',
        UNKNOWN = 'UNKNOWN',
        ENABLED = 'ENABLED',
        REMOVAL_PLANNED = 'REMOVAL_PLANNED',
    }

    /**
     *  Location Names Interface
     * @interface
     */
    export interface LocationNames {
        names: string[]
    }

    /**
     *  Geo Targets Interface
     * @interface
     */
    export interface GeoTargets {
        geo_target_constants: string[]
    }

    /**
     *  Suggest Method Config Interface
     * @interface
     */
    export interface SuggestGeoTargetConstantConfig {
        locale?: string
        country_code?: string
        location_names?: LocationNames
        geo_targets?: GeoTargets
    }
}

export = GeoTargetConstant
