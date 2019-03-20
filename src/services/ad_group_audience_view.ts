// @ts-ignore
import { AdGroupAudienceView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'adGroupAudienceViews'
const MUTATE_METHOD = 'mutateAdGroupAudienceViews'
const MUTATE_REQUEST = 'MutateAdGroupAudienceViewsRequest'
const OPERATION_REQUEST = 'AdGroupAudienceViewOperation'
const GET_METHOD = 'getAdGroupAudienceView'
const GET_REQUEST = 'GetAdGroupAudienceViewRequest'
const RESOURCE = 'AdGroupAudienceView'

export default class AdGroupAudienceViewService extends Service {
    public async get(id: number | string): Promise<AdGroupAudienceView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AdGroupAudienceView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ ad_group_audience_view: AdGroupAudienceView }>> {
        return this.getListResults('ad_group_audience_view', options)
    }

    public async create(
        ad_group_audience_view: AdGroupAudienceView | Array<AdGroupAudienceView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_audience_view],
            ...options,
        })
    }

    public async update(
        ad_group_audience_view: AdGroupAudienceView | Array<AdGroupAudienceView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, ad_group_audience_view],
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
