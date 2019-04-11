// @ts-ignore
import { AdGroupCriterionLabel } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The ad_group_criterion_label entity:

const ad_group_criterion_label = {
    ad_group_criterion: 'string', // The ad group criterion to which the label is attached.
    resource_name: 'string', // The resource name of the ad group criterion label. Ad group criterion label resource names have the form:  `customers/{customer_id}/adGroupCriterionLabels/{ad_group_id}~{criterion_id}~{label_id}`
    label: 'string', // The label assigned to the ad group criterion.
}

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'adGroupCriterionLabels'
const MUTATE_METHOD = 'mutateAdGroupCriterionLabels'
const MUTATE_REQUEST = 'MutateAdGroupCriterionLabelsRequest'
const OPERATION_REQUEST = 'AdGroupCriterionLabelOperation'
const GET_METHOD = 'getAdGroupCriterionLabel'
const GET_REQUEST = 'GetAdGroupCriterionLabelRequest'
const RESOURCE = 'AdGroupCriterionLabel'

export default class AdGroupCriterionLabelService extends Service {
    public async get(id: number | string): Promise<AdGroupCriterionLabel> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AdGroupCriterionLabel
    }

    public async list(
        options?: ServiceListOptions
    ): Promise<Array<{ ad_group_criterion_label: AdGroupCriterionLabel }>> {
        return this.getListResults('ad_group_criterion_label', options)
    }

    public async create(
        ad_group_criterion_label: AdGroupCriterionLabel | Array<AdGroupCriterionLabel>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_criterion_label],
            ...options,
        })
    }

    public async update(
        ad_group_criterion_label: AdGroupCriterionLabel | Array<AdGroupCriterionLabel>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_criterion_label],
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
