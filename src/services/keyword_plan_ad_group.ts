// @ts-ignore
import { KeywordPlanAdGroup } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'keywordPlanAdGroups'
const MUTATE_METHOD = 'mutateKeywordPlanAdGroups'
const MUTATE_REQUEST = 'MutateKeywordPlanAdGroupsRequest'
const OPERATION_REQUEST = 'KeywordPlanAdGroupOperation'
const GET_METHOD = 'getKeywordPlanAdGroup'
const GET_REQUEST = 'GetKeywordPlanAdGroupRequest'
const RESOURCE = 'KeywordPlanAdGroup'

export default class KeywordPlanAdGroupService extends Service {
    public async get(id: number | string): Promise<KeywordPlanAdGroup> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as KeywordPlanAdGroup
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ keyword_plan_ad_group: KeywordPlanAdGroup }>> {
        return this.getListResults('keyword_plan_ad_group', options)
    }

    public async create(
        keyword_plan_ad_group: KeywordPlanAdGroup | Array<KeywordPlanAdGroup>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, keyword_plan_ad_group],
            ...options,
        })
    }

    public async update(
        keyword_plan_ad_group: KeywordPlanAdGroup | Array<KeywordPlanAdGroup>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, keyword_plan_ad_group],
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
