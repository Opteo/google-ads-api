// @ts-ignore
import { AgeRangeView } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The age_range_view entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'ageRangeViews'
const GET_METHOD = 'getAgeRangeView'
const GET_REQUEST = 'GetAgeRangeViewRequest'

export default class AgeRangeViewService extends Service {
    public async get(id: number | string): Promise<AgeRangeView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AgeRangeView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ age_range_view: AgeRangeView }>> {
        return this.getListResults('age_range_view', options)
    }
}
