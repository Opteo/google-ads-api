// @ts-ignore
import { AdGroupAudienceView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'adGroupAudienceViews'
const GET_METHOD = 'getAdGroupAudienceView'
const GET_REQUEST = 'GetAdGroupAudienceViewRequest'

export default class AdGroupAudienceViewService extends Service {
    public async get(id: number | string): Promise<AdGroupAudienceView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AdGroupAudienceView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ ad_group_audience_view: AdGroupAudienceView }>> {
        return this.getListResults('ad_group_audience_view', options)
    }
}
