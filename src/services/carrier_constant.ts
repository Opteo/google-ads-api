// @ts-ignore
import { CarrierConstant } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'carrierConstants'
const GET_METHOD = 'getCarrierConstant'
const GET_REQUEST = 'GetCarrierConstantRequest'

export default class CarrierConstantService extends Service {
    public async get(id: number | string): Promise<CarrierConstant> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CarrierConstant
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ carrier_constant: CarrierConstant }>> {
        return this.getListResults('carrier_constant', options)
    }
}
