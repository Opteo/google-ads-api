import Entity from './Entity'
import { ENDPOINTS, RESOURCE_NAMES } from '../constants'

import { HttpController } from '../types/Http'
import { NewSharedSetCriterion } from '../types/SharedSetCriterion'

export default class SharedSetCriterions extends Entity {
    constructor(http_controller: HttpController) {
        super(http_controller, ENDPOINTS.shared_set_criteria, RESOURCE_NAMES.shared_set_criterion)
    }

    create(config: NewSharedSetCriterion): Promise<any> {
        return super.create(config)
    }
}
