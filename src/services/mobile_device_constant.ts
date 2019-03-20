// @ts-ignore
import { MobileDeviceConstant } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'mobileDeviceConstants'
const MUTATE_METHOD = 'mutateMobileDeviceConstants'
const MUTATE_REQUEST = 'MutateMobileDeviceConstantsRequest'
const OPERATION_REQUEST = 'MobileDeviceConstantOperation'
const GET_METHOD = 'getMobileDeviceConstant'
const GET_REQUEST = 'GetMobileDeviceConstantRequest'
const RESOURCE = 'MobileDeviceConstant'

export default class MobileDeviceConstantService extends Service {
    public async get(id: number | string): Promise<MobileDeviceConstant> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as MobileDeviceConstant
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ mobile_device_constant: MobileDeviceConstant }>> {
        return this.getListResults('mobile_device_constant', options)
    }

    public async create(
        mobile_device_constant: MobileDeviceConstant | Array<MobileDeviceConstant>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, mobile_device_constant],
            ...options,
        })
    }

    public async update(
        mobile_device_constant: MobileDeviceConstant | Array<MobileDeviceConstant>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, mobile_device_constant],
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
