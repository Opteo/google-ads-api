// @ts-ignore
import { AdGroup } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'adGroups'
const MUTATE_METHOD = 'mutateAdGroups'
const MUTATE_REQUEST = 'MutateAdGroupsRequest'
const OPERATION_REQUEST = 'AdGroupOperation'
const GET_METHOD = 'getAdGroup'
const GET_REQUEST = 'GetAdGroupRequest'
const RESOURCE = 'AdGroup'

export default class AdGroupService extends Service {
    public async get(id: number | string): Promise<AdGroup> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AdGroup
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ ad_group: AdGroup }>> {
        return this.getListResults('ad_group', options)
    }

    public async create(
        ad_group: AdGroup | Array<AdGroup>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group],
            ...options,
        })
    }

    public async update(
        ad_group: AdGroup | Array<AdGroup>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group],
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
