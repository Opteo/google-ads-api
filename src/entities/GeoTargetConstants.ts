import { HttpController } from '../types/Http'
import { SuggestGeoTargetConstantConfig } from './../types/GeoTargetConstant'

export default class GeoTargetConstants {
    private http_controller: HttpController
    private endpoint: string

    /**
     * GeoTargetConstants
     * @constructor
     */
    constructor(http_controller: HttpController, endpoint: string, resource: string) {
        this.http_controller = http_controller
        this.endpoint = endpoint
    }

    /**
     * Suggests Geo Target Constants
     * @param {object} config
     * @param {integer} config.limit
     * @param {object} config.constraints
     */
    public suggest(config?: SuggestGeoTargetConstantConfig): Promise<any> {
        return this.http_controller.suggest(config as SuggestGeoTargetConstantConfig, this.endpoint)
    }

    /**
     * Retrieves Single Geo Target Constant
     * @param {string} geo_target_constant_id
     */
    public retrieve(geo_target_constant_id: string | number): Promise<any> {
        return this.http_controller.retrieve(this.endpoint, geo_target_constant_id)
    }
}
