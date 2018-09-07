import Entity from './Entity'
import { ENDPOINTS, RESOURCE_NAMES } from '../constants'

import { HttpController } from '../types/Http'
import { NewAdGroupConfig } from '../types/AdGroup'

export default class AdGroups extends Entity {

    constructor(http_controller: HttpController) {
        super(http_controller, ENDPOINTS.adgroups, RESOURCE_NAMES.adgroup)
    }

    create(config: NewAdGroupConfig) : Promise<any> {
        return super.create(config)
    }


}
