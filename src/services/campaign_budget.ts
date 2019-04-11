// @ts-ignore
import { CampaignBudget } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The campaign_budget entity:

const campaign_budget = {
    amount_micros: 'int64', // The amount of the budget, in the local currency for the account. Amount is specified in micros, where one million is equivalent to one currency unit.
    explicitly_shared: 'boolean', // Specifies whether the budget is explicitly shared. Defaults to true if unspecified in a create operation.  If true, the budget was created with the purpose of sharing across one or more campaigns.  If false, the budget was created with the intention of only being used with a single campaign. The budget's name and status will stay in sync with the campaign's name and status. Attempting to share the budget with a second campaign will result in an error.  A non-shared budget can become an explicitly shared. The same operation must also assign the budget a name.  A shared campaign budget can never become non-shared.
    reference_count: 'int64', // The number of campaigns actively using the budget.  This field is read-only.
    recommended_budget_amount_micros: 'int64', // The recommended budget amount. If no recommendation is available, this will be set to the budget amount. Amount is specified in micros, where one million is equivalent to one currency unit.  This field is read-only.
    status: 'UNSPECIFIED | UNKNOWN | ENABLED | REMOVED', // The status of this campaign budget. This field is read-only.
    has_recommended_budget: 'boolean', // Indicates whether there is a recommended budget for this campaign budget.  This field is read-only.
    period: 'UNSPECIFIED | UNKNOWN | DAILY | CUSTOM | FIXED_DAILY', // Period over which to spend the budget. Defaults to DAILY if not specified.
    name: 'string', // The name of the campaign budget.  When creating a campaign budget through CampaignBudgetService, every explicitly shared campaign budget must have a non-null, non-empty name. Campaign budgets that are not explicitly shared derive their name from the attached campaign's name.  The length of this string must be between 1 and 255, inclusive, in UTF-8 bytes, (trimmed).
    id: 'int64', // The ID of the campaign budget.  A campaign budget is created using the CampaignBudgetService create operation and is assigned a budget ID. A budget ID can be shared across different campaigns; the system will then allocate the campaign budget among different campaigns to get optimum results.
    resource_name: 'string', // The resource name of the campaign budget. Campaign budget resource names have the form:  `customers/{customer_id}/campaignBudgets/{budget_id}`
    recommended_budget_estimated_change_weekly_views: 'int64', // The estimated change in weekly views if the recommended budget is applied.  This field is read-only.
    recommended_budget_estimated_change_weekly_interactions: 'int64', // The estimated change in weekly interactions if the recommended budget is applied.  This field is read-only.
    delivery_method: 'UNSPECIFIED | UNKNOWN | STANDARD | ACCELERATED', // The delivery method that determines the rate at which the campaign budget is spent.  Defaults to STANDARD if unspecified in a create operation.
    total_amount_micros: 'int64', // The lifetime amount of the budget, in the local currency for the account. Amount is specified in micros, where one million is equivalent to one currency unit.
    recommended_budget_estimated_change_weekly_clicks: 'int64', // The estimated change in weekly clicks if the recommended budget is applied.  This field is read-only.
    type: 'UNSPECIFIED | UNKNOWN | STANDARD | HOTEL_ADS_COMMISSION', // The type of the campaign budget.
    recommended_budget_estimated_change_weekly_cost_micros: 'int64', // The estimated change in weekly cost in micros if the recommended budget is applied. One million is equivalent to one currency unit.  This field is read-only.
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'campaignBudgets'
const MUTATE_METHOD = 'mutateCampaignBudgets'
const MUTATE_REQUEST = 'MutateCampaignBudgetsRequest'
const OPERATION_REQUEST = 'CampaignBudgetOperation'
const GET_METHOD = 'getCampaignBudget'
const GET_REQUEST = 'GetCampaignBudgetRequest'
const RESOURCE = 'CampaignBudget'

export default class CampaignBudgetService extends Service {
    public async get(id: number | string): Promise<CampaignBudget> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CampaignBudget
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ campaign_budget: CampaignBudget }>> {
        return this.getListResults('campaign_budget', options)
    }

    public async create(
        campaign_budget: CampaignBudget | Array<CampaignBudget>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_budget],
            ...options,
        })
    }

    public async update(
        campaign_budget: CampaignBudget | Array<CampaignBudget>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_budget],
            ...options,
        })
    }

    public async delete(id: number | string, options?: ServiceCreateOptions) {
        return this.serviceDelete({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            entity_id: id,
            ...options,
        })
    }
}
