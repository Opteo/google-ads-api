// @ts-ignore
import { AdGroupAdLabel } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The ad_group_ad_label entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'adGroupAdLabels'
const MUTATE_METHOD = 'mutateAdGroupAdLabels'
const MUTATE_REQUEST = 'MutateAdGroupAdLabelsRequest'
const OPERATION_REQUEST = 'AdGroupAdLabelOperation'
const GET_METHOD = 'getAdGroupAdLabel'
const GET_REQUEST = 'GetAdGroupAdLabelRequest'
const RESOURCE = 'AdGroupAdLabel'

export default class AdGroupAdLabelService extends Service {
    public async get(id: number | string): Promise<AdGroupAdLabel> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AdGroupAdLabel
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ ad_group_ad_label: AdGroupAdLabel }>> {
        return this.getListResults('ad_group_ad_label', options)
    }

    public async create(
        ad_group_ad_label: AdGroupAdLabel | Array<AdGroupAdLabel>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_ad_label],
            ...options,
        })
    }

    public async update(
        ad_group_ad_label: AdGroupAdLabel | Array<AdGroupAdLabel>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_ad_label],
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
