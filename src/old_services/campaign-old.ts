import * as grpc from 'google-ads-node'
import { Campaign } from 'google-ads-node/build/lib/resources'

import Service from '../services/service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constant
 */
const RESOURCE_NAME = 'campaign'
const RESOURCE_URL_NAME = 'campaigns'
const SERVICE_GET_METHOD = 'getCampaign'
const SERVICE_MUTATE_METHOD = 'mutateCampaigns'

export default class CampaignService extends Service {
    public async get(id: number | string): Promise<Campaign> {
        const request = new grpc.GetCampaignRequest()
        request.setResourceName(this.buildResourceName(`${RESOURCE_URL_NAME}/${id}`))
        const campaign = await this.serviceCall(SERVICE_GET_METHOD, request)
        return campaign as Campaign
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ campaign: Campaign }>> {
        const campaigns = await this.getListResults(RESOURCE_NAME, options)
        return campaigns
    }

    public async create(campaign: Campaign, options?: ServiceCreateOptions): Promise<void> {
        const request = new grpc.MutateCampaignsRequest()
        const operation = new grpc.CampaignOperation()

        const pb = this.buildResource('Campaign', campaign) as grpc.Campaign
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
