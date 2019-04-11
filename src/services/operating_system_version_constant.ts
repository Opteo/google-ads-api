// @ts-ignore
import { OperatingSystemVersionConstant } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The operating_system_version_constant entity:

const operating_system_version_constant = {
    operator_type: 'UNSPECIFIED | UNKNOWN | EQUALS_TO | GREATER_THAN_EQUALS_TO', // Determines whether this constant represents a single version or a range of versions.
    os_major_version: 'integer', // The OS Major Version number.
    os_minor_version: 'integer', // The OS Minor Version number.
    name: 'string', // Name of the operating system.
    id: 'string', // The ID of the operating system version.
    resource_name: 'string', // The resource name of the operating system version constant. Operating system version constant resource names have the form:  `operatingSystemVersionConstants/{criterion_id}`
}

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
