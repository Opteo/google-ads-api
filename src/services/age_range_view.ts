// @ts-ignore
import { AgeRangeView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'ageRangeViews'
const MUTATE_METHOD = 'mutateAgeRangeViews'
const MUTATE_REQUEST = 'MutateAgeRangeViewsRequest'
const OPERATION_REQUEST = 'AgeRangeViewOperation'
const GET_METHOD = 'getAgeRangeView'
const GET_REQUEST = 'GetAgeRangeViewRequest'
const RESOURCE = 'AgeRangeView'

export default class AgeRangeViewService extends Service {
    public async get(id: number | string): Promise<AgeRangeView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as AgeRangeView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ age_range_view: AgeRangeView }>> {
        return this.getListResults('age_range_view', options)
    }

    public async create(
        age_range_view: AgeRangeView | Array<AgeRangeView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, age_range_view],
            ...options,
        })
    }

    public async update(
        age_range_view: AgeRangeView | Array<AgeRangeView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, age_range_view],
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
