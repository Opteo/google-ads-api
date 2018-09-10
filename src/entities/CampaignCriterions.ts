import Entity from './Entity'
import { ENDPOINTS, RESOURCE_NAMES } from '../constants'

import { HttpController } from '../types/Http'
import { NewCriterionConfig } from '../types/CampaignCriterion'

export default class CampaignCriterions extends Entity {

    constructor(http_controller: HttpController) {
        super(http_controller, ENDPOINTS.campaign_criteria, RESOURCE_NAMES.campaign_criteria)
    }

    create(config: NewCriterionConfig) : Promise<any> {
        return super.create(config)
    }
}
