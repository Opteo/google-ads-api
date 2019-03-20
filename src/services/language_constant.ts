// @ts-ignore
import { LanguageConstant } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'languageConstants'
const MUTATE_METHOD = 'mutateLanguageConstants'
const MUTATE_REQUEST = 'MutateLanguageConstantsRequest'
const OPERATION_REQUEST = 'LanguageConstantOperation'
const GET_METHOD = 'getLanguageConstant'
const GET_REQUEST = 'GetLanguageConstantRequest'
const RESOURCE = 'LanguageConstant'

export default class LanguageConstantService extends Service {
    public async get(id: number | string): Promise<LanguageConstant> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as LanguageConstant
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ language_constant: LanguageConstant }>> {
        return this.getListResults('language_constant', options)
    }

    public async create(
        language_constant: LanguageConstant | Array<LanguageConstant>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, language_constant],
            ...options,
        })
    }

    public async update(
        language_constant: LanguageConstant | Array<LanguageConstant>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, language_constant],
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
