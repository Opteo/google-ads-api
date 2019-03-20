// @ts-ignore
import { Label } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'labels'
const MUTATE_METHOD = 'mutateLabels'
const MUTATE_REQUEST = 'MutateLabelsRequest'
const OPERATION_REQUEST = 'LabelOperation'
const GET_METHOD = 'getLabel'
const GET_REQUEST = 'GetLabelRequest'
const RESOURCE = 'Label'

export default class LabelService extends Service {
    public async get(id: number | string): Promise<Label> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as Label
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ label: Label }>> {
        return this.getListResults('label', options)
    }

    public async create(
        label: Label | Array<Label>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, label],
            ...options,
        })
    }

    public async update(
        label: Label | Array<Label>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, label],
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
