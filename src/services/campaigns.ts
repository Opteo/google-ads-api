import Bottleneck from 'bottleneck'

import GrpcClient from '../grpc'
import Service from './service'
import { GetCampaignRequest } from 'google-ads-node'

// TODO: Update this when new gads-node published
import { Campaign } from '../../../google-ads-node/build/lib/resources'

// TODO: Use global ListOptions
interface ListOptions {
    fields: string[]
    limit?: number
    constraints?: object
}

type CampaignList = { campaign: Campaign }[]

export default class Campaigns extends Service {
    constructor(cid: string, client: GrpcClient, throttler: Bottleneck) {
        super(cid, client, throttler, 'CampaignService')
    }

    async get(id: number | string): Promise<Campaign> {
        const request: GetCampaignRequest = new GetCampaignRequest()
        request.setResourceName(this.buildResourceName(`campaigns/${id}`))
        const campaign: Campaign = await this.serviceCall('getCampaign', request)
        return campaign
    }

    async list(options: ListOptions): Promise<CampaignList> {
        const campaigns = await this.getListResults(options, 'campaign')
        return campaigns
    }
}
