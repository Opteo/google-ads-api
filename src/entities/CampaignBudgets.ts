import Entity from './Entity'
import { ENDPOINTS, RESOURCE_NAMES } from '../constants'

import { HttpController } from '../types/Http'
import { NewCampaignBudgetConfig } from '../types/CampaignBudget'

export default class CampaignBudgets extends Entity {
    constructor(http_controller: HttpController) {
        super(http_controller, ENDPOINTS.campaign_budgets, RESOURCE_NAMES.campaign_budget)
    }

    create(config: NewCampaignBudgetConfig): Promise<any> {
        return super.create(config)
    }

    retrieve<CampaignBudget>(campaign_budget_id: string): Promise<any> {
        return super.retrieve(campaign_budget_id)
    }
}
