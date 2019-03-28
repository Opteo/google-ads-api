// @ts-ignore
import { ClickView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'clickViews'
const GET_METHOD = 'getClickView'
const GET_REQUEST = 'GetClickViewRequest'

export default class ClickViewService extends Service {
    public async get(id: number | string): Promise<ClickView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as ClickView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ click_view: ClickView }>> {
        return this.getListResults('click_view', options)
    }
}
