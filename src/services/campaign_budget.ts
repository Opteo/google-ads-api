import * as grpc from 'google-ads-node'
import { CampaignBudget } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constant
 */
const RESOURCE_NAME = 'campaign_budget'
const RESOURCE_URL_NAME = 'campaignBudgets'
const SERVICE_GET_METHOD = 'getCampaignBudget'

export default class CampaignBudgetService extends Service {
    public async get(id: number | string): Promise<CampaignBudget> {
        const request = new grpc.GetCampaignBudgetRequest()
        request.setResourceName(this.buildResourceName(`${RESOURCE_URL_NAME}/${id}`))
        const budget = await this.serviceCall(SERVICE_GET_METHOD, request)
        return budget as CampaignBudget
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ campaign_budget: CampaignBudget }>> {
        const budgets = await this.getListResults(RESOURCE_NAME, options)
        return budgets
    }

    public async create(budget: CampaignBudget, options?: ServiceCreateOptions): Promise<void> {
        const request = new grpc.MutateCampaignBudgetsRequest()
        const operation = new grpc.CampaignBudgetOperation()

        const pb = this.buildResource('CampaignBudget', budget) as grpc.CampaignBudget
        operation.setCreate(pb)

        request.setCustomerId(this.cid)
        request.setOperationsList([operation])

        if (options) {
            if (options.hasOwnProperty('validate_only')) {
                request.setValidateOnly(options.validate_only as boolean)
            }
            if (options.hasOwnProperty('partial_failure')) {
                request.setPartialFailure(options.partial_failure as boolean)
            }
        }

        console.log(request.toObject())

        try {
            const response = await this.serviceCall(SERVICE_MUTATE_METHOD, request)
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
}
