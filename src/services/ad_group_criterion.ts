// @ts-ignore
import { AdGroupCriterion } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The ad_group_criterion entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'adGroupCriteria'
const MUTATE_METHOD = 'mutateAdGroupCriteria'
const MUTATE_REQUEST = 'MutateAdGroupCriteriaRequest'
const OPERATION_REQUEST = 'AdGroupCriterionOperation'
const GET_METHOD = 'getAdGroupCriterion'
const GET_REQUEST = 'GetAdGroupCriterionRequest'
const RESOURCE = 'AdGroupCriterion'

export default class AdGroupCriterionService extends Service {
    public async get(id: number | string): Promise<AdGroupCriterion> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AdGroupCriterion
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ ad_group_criterion: AdGroupCriterion }>> {
        return this.getListResults('ad_group_criterion', options)
    }

    public async create(
        ad_group_criterion: AdGroupCriterion | Array<AdGroupCriterion>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_criterion],
            ...options,
        })
    }

    public async update(
        ad_group_criterion: AdGroupCriterion | Array<AdGroupCriterion>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_criterion],
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
