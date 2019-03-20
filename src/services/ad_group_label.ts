// @ts-ignore
import { AdGroupLabel } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'adGroupLabels'
const MUTATE_METHOD = 'mutateAdGroupLabels'
const MUTATE_REQUEST = 'MutateAdGroupLabelsRequest'
const OPERATION_REQUEST = 'AdGroupLabelOperation'
const GET_METHOD = 'getAdGroupLabel'
const GET_REQUEST = 'GetAdGroupLabelRequest'
const RESOURCE = 'AdGroupLabel'

export default class AdGroupLabelService extends Service {
    public async get(id: number | string): Promise<AdGroupLabel> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AdGroupLabel
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ ad_group_label: AdGroupLabel }>> {
        return this.getListResults('ad_group_label', options)
    }

    public async create(
        ad_group_label: AdGroupLabel | Array<AdGroupLabel>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_label],
            ...options,
        })
    }

    public async update(
        ad_group_label: AdGroupLabel | Array<AdGroupLabel>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_label],
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
