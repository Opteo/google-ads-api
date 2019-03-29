// @ts-ignore
import { ChangeStatus } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'changeStatus'
const GET_METHOD = 'getChangeStatus'
const GET_REQUEST = 'GetChangeStatusRequest'

export default class ChangeStatusService extends Service {
    public async get(id: number | string): Promise<ChangeStatus> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as ChangeStatus
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ change_status: ChangeStatus }>> {
        return this.getListResults('change_status', options)
    }
}
