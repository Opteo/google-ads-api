// @ts-ignore
import { ParentalStatusView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The parental_status_view entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'parentalStatusViews'
const GET_METHOD = 'getParentalStatusView'
const GET_REQUEST = 'GetParentalStatusViewRequest'

export default class ParentalStatusViewService extends Service {
    public async get(id: number | string): Promise<ParentalStatusView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as ParentalStatusView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ parental_status_view: ParentalStatusView }>> {
        return this.getListResults('parental_status_view', options)
    }
}
