// @ts-ignore
import { ConversionAction } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'conversionActions'
const MUTATE_METHOD = 'mutateConversionActions'
const MUTATE_REQUEST = 'MutateConversionActionsRequest'
const OPERATION_REQUEST = 'ConversionActionOperation'
const GET_METHOD = 'getConversionAction'
const GET_REQUEST = 'GetConversionActionRequest'
const RESOURCE = 'ConversionAction'

export default class ConversionActionService extends Service {
    public async get(id: number | string): Promise<ConversionAction> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as ConversionAction
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ conversion_action: ConversionAction }>> {
        return this.getListResults('conversion_action', options)
    }

    public async create(
        conversion_action: ConversionAction | Array<ConversionAction>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, conversion_action],
            ...options,
        })
    }

    public async update(
        conversion_action: ConversionAction | Array<ConversionAction>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, conversion_action],
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
