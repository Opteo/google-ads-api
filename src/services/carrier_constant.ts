// @ts-ignore
import { CarrierConstant } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The carrier_constant entity:

const carrier_constant = {
    resource_name: 'string', // The resource name of the carrier criterion. Carrier criterion resource names have the form:  `carrierConstants/{criterion_id}`
    name: 'string', // The full name of the carrier in English.
    id: 'int64', // The ID of the carrier criterion.
    country_code: 'string', // The country code of the country where the carrier is located, e.g., "AR", "FR", etc.
}

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
