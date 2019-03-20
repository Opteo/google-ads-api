// @ts-ignore
import { CarrierConstant } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'carrierConstants'
const MUTATE_METHOD = 'mutateCarrierConstants'
const MUTATE_REQUEST = 'MutateCarrierConstantsRequest'
const OPERATION_REQUEST = 'CarrierConstantOperation'
const GET_METHOD = 'getCarrierConstant'
const GET_REQUEST = 'GetCarrierConstantRequest'
const RESOURCE = 'CarrierConstant'

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

    public async create(
        carrier_constant: CarrierConstant | Array<CarrierConstant>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, carrier_constant],
            ...options,
        })
    }

    public async update(
        carrier_constant: CarrierConstant | Array<CarrierConstant>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, carrier_constant],
            ...options,
        })
    }

    public async delete(id: number | string, options?: ServiceCreateOptions) {
        return this.serviceDelete({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            entity_id: id,
            ...options,
        })
    }
}
