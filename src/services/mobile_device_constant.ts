// @ts-ignore
import { MobileDeviceConstant } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The mobile_device_constant entity:

const mobile_device_constant = {
    operating_system_name: 'string', // The operating system of the mobile device.
    name: 'string', // The name of the mobile device.
    type: 'UNSPECIFIED | UNKNOWN | MOBILE | TABLET', // The type of mobile device.
    id: 'int64', // The ID of the mobile device constant.
    manufacturer_name: 'string', // The manufacturer of the mobile device.
    resource_name: 'string', // The resource name of the mobile device constant. Mobile device constant resource names have the form:  `mobileDeviceConstants/{criterion_id}`
}

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
