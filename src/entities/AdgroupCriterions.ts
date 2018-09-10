import Entity from './Entity'
import { ENDPOINTS, RESOURCE_NAMES } from '../constants'

import { HttpController } from '../types/Http'
import { NewCriterionConfig } from '../types/AdGroupCriterion'

export default class AdGroupCriterions extends Entity {

    constructor(http_controller: HttpController) {
        super(http_controller, ENDPOINTS.adgroup_critera, RESOURCE_NAMES.adgroup_critera)
    }

    create(config: NewCriterionConfig) : Promise<any> {
        return super.create(config)
    }
}
