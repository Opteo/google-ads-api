// @ts-ignore
import { CampaignAudienceView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'campaignAudienceViews'
const GET_METHOD = 'getCampaignAudienceView'
const GET_REQUEST = 'GetCampaignAudienceViewRequest'

export default class CampaignAudienceViewService extends Service {
    public async get(id: number | string): Promise<CampaignAudienceView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CampaignAudienceView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ campaign_audience_view: CampaignAudienceView }>> {
        return this.getListResults('campaign_audience_view', options)
    }
}
