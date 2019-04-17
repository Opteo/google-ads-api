// @ts-ignore
import { GenderView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The gender_view entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'genderViews'
const GET_METHOD = 'getGenderView'
const GET_REQUEST = 'GetGenderViewRequest'

export default class GenderViewService extends Service {
    public async get(id: number | string): Promise<GenderView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as GenderView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ gender_view: GenderView }>> {
        return this.getListResults('gender_view', options)
    }
}
