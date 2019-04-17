// @ts-ignore
import { LanguageConstant } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The language_constant entity:

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'languageConstants'
const GET_METHOD = 'getLanguageConstant'
const GET_REQUEST = 'GetLanguageConstantRequest'

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
}
