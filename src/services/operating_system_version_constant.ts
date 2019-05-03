// @ts-ignore
import { OperatingSystemVersionConstant } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'operatingSystemVersionConstants'
const GET_METHOD = 'getOperatingSystemVersionConstant'
const GET_REQUEST = 'GetOperatingSystemVersionConstantRequest'

export default class OperatingSystemVersionConstantService extends Service {
    public async get(id: number | string): Promise<OperatingSystemVersionConstant> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as OperatingSystemVersionConstant
    }

    public async list(
        options?: ServiceListOptions
    ): Promise<Array<{ operating_system_version_constant: OperatingSystemVersionConstant }>> {
        return this.getListResults('operating_system_version_constant', options)
    }
}
