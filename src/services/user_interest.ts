// @ts-ignore
import { UserInterest } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The user_interest entity:

const user_interest = {
    launched_to_all: 'boolean', // True if the user interest is launched to all channels and locales.
    resource_name: 'string', // The resource name of the user interest. User interest resource names have the form:  `customers/{customer_id}/userInterests/{user_interest_id}`
    availabilities: 'array', // Availability information of the user interest.
    user_interest_parent: 'string', // The parent of the user interest.
    name: 'string', // The name of the user interest.
    taxonomy_type:
        'UNSPECIFIED | UNKNOWN | AFFINITY | IN_MARKET | MOBILE_APP_INSTALL_USER | VERTICAL_GEO | NEW_SMART_PHONE_USER', // Taxonomy type of the user interest.
    user_interest_id: 'int64', // The ID of the user interest.
}

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
