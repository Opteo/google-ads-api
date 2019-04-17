// @ts-ignore
import { UserInterest } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The user_interest entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'userInterests'
const GET_METHOD = 'getUserInterest'
const GET_REQUEST = 'GetUserInterestRequest'

export default class UserInterestService extends Service {
    public async get(id: number | string): Promise<UserInterest> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as UserInterest
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ user_interest: UserInterest }>> {
        return this.getListResults('user_interest', options)
    }
}
