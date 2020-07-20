// @ts-ignore
import { ThirdPartyAppAnalyticsLink } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'thirdPartyAppAnalyticsLinks'
const GET_METHOD = 'getThirdPartyAppAnalyticsLink'
const GET_REQUEST = 'GetThirdPartyAppAnalyticsLinkRequest'

export default class ThirdPartyAppAnalyticsLinkService extends Service {
    public async get(id: number | string): Promise<ThirdPartyAppAnalyticsLink> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as ThirdPartyAppAnalyticsLink
    }

    public async list(
        options?: ServiceListOptions
    ): Promise<Array<{ third_party_app_analytics_link: ThirdPartyAppAnalyticsLink }>> {
        return this.getListResults('third_party_app_analytics_link', options)
    }
}
