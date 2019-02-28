import Entity from './Entity'
import { ENDPOINTS, RESOURCE_NAMES } from '../constants'

import { HttpController } from '../types/Http'
import { NewConversionActionConfig } from './../types/ConversionAction'

export default class ConversionActions extends Entity {
    constructor(http_controller: HttpController) {
        super(http_controller, ENDPOINTS.conversion_actions, RESOURCE_NAMES.conversion_action)
    }

    create(config: NewConversionActionConfig | NewConversionActionConfig[]): Promise<any> {
        return super.create(config)
    }
}
