// @ts-ignore
import { MobileDeviceConstant } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'mobileDeviceConstants'
const GET_METHOD = 'getMobileDeviceConstant'
const GET_REQUEST = 'GetMobileDeviceConstantRequest'

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
}
