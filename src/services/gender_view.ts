// @ts-ignore
import { GenderView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'genderViews'
const MUTATE_METHOD = 'mutateGenderViews'
const MUTATE_REQUEST = 'MutateGenderViewsRequest'
const OPERATION_REQUEST = 'GenderViewOperation'
const GET_METHOD = 'getGenderView'
const GET_REQUEST = 'GetGenderViewRequest'
const RESOURCE = 'GenderView'

export default class GenderViewService extends Service {
    public async get(id: number | string): Promise<GenderView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as GenderView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ gender_view: GenderView }>> {
        return this.getListResults('gender_view', options)
    }

    public async create(
        gender_view: GenderView | Array<GenderView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, gender_view],
            ...options,
        })
    }

    public async update(
        gender_view: GenderView | Array<GenderView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, gender_view],
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
