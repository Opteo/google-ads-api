// @ts-ignore
import { DomainCategory } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The domain_category entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'domainCategories'
const GET_METHOD = 'getDomainCategory'
const GET_REQUEST = 'GetDomainCategoryRequest'

export default class DomainCategoryService extends Service {
    public async get(id: number | string): Promise<DomainCategory> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as DomainCategory
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ domain_category: DomainCategory }>> {
        return this.getListResults('domain_category', options)
    }
}
