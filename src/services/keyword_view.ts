// @ts-ignore
import { KeywordView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'keywordViews'
const MUTATE_METHOD = 'mutateKeywordViews'
const MUTATE_REQUEST = 'MutateKeywordViewsRequest'
const OPERATION_REQUEST = 'KeywordViewOperation'
const GET_METHOD = 'getKeywordView'
const GET_REQUEST = 'GetKeywordViewRequest'
const RESOURCE = 'KeywordView'

export default class KeywordViewService extends Service {
    public async get(id: number | string): Promise<KeywordView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as KeywordView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ keyword_view: KeywordView }>> {
        return this.getListResults('keyword_view', options)
    }

    public async create(
        keyword_view: KeywordView | Array<KeywordView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, keyword_view],
            ...options,
        })
    }

    public async update(
        keyword_view: KeywordView | Array<KeywordView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, keyword_view],
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
