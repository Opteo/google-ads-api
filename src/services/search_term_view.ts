// @ts-ignore
import { SearchTermView } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'searchTermViews'
const MUTATE_METHOD = 'mutateSearchTermViews'
const MUTATE_REQUEST = 'MutateSearchTermViewsRequest'
const OPERATION_REQUEST = 'SearchTermViewOperation'
const GET_METHOD = 'getSearchTermView'
const GET_REQUEST = 'GetSearchTermViewRequest'
const RESOURCE = 'SearchTermView'

export default class SearchTermViewService extends Service {
    public async get(id: number | string): Promise<SearchTermView> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as SearchTermView
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ search_term_view: SearchTermView }>> {
        return this.getListResults('search_term_view', options)
    }

    public async create(
        search_term_view: SearchTermView | Array<SearchTermView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, search_term_view],
            ...options,
        })
    }

    public async update(
        search_term_view: SearchTermView | Array<SearchTermView>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, search_term_view],
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
