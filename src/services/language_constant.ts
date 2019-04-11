// @ts-ignore
import { LanguageConstant } from 'google-ads-node/build/lib/resources'

import Service from './service'
import { ServiceListOptions } from '../types'

// The language_constant entity:

const language_constant = {
    targetable: 'boolean', // Whether the language is targetable.
    id: 'string', // The ID of the language constant.
    resource_name: 'string', // The resource name of the language constant. Language constant resource names have the form:  `languageConstants/{criterion_id}`
    name: 'string', // The full name of the language in English, e.g., "English (US)", "Spanish", etc.
    code: 'string', // The language code, e.g. "en_US", "en_AU", "es", "fr", etc.
}

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
