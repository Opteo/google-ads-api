import {
    GoogleAdsClient,
    SearchGoogleAdsRequest,
    LogOptions,
    ClientReadableStream,
    SearchGoogleAdsStreamResponse,
    SearchGoogleAdsStreamRequest,
} from 'google-ads-node'
import Bottleneck from 'bottleneck'

import { getAccessToken } from './token'

interface BuildSearchRequestResponse {
    request: SearchGoogleAdsRequest
    limit: number
}

interface BuildSearchStreamRequestResponse {
    request: SearchGoogleAdsStreamRequest
}

export interface GoogleAdsNodeOptions {
    prevent_mutations?: boolean
    logging?: LogOptions
}

export default class GrpcClient {
    private readonly client: GoogleAdsClient

    constructor(
        developer_token: string,
        client_id: string,
        client_secret: string,
        private readonly refresh_token: string,
        login_customer_id: string,
        gads_node_options: GoogleAdsNodeOptions
    ) {
        const additional_options: any = {}

        // Apply google-ads-node options if specified
        if (gads_node_options?.prevent_mutations) {
            additional_options.preventMutations = gads_node_options.prevent_mutations
        }
        if (gads_node_options?.logging) {
            additional_options.logging = gads_node_options.logging
        }

        this.client = new GoogleAdsClient({
            developer_token,
            client_id,
            client_secret,
            refresh_token,
            login_customer_id,
            parseResults: true,
            async accessTokenGetter(clientId: string, clientSecret: string, refreshToken: string) {
                return getAccessToken({
                    client_id: clientId,
                    client_secret: clientSecret,
                    refresh_token: refreshToken,
                })
            },
            ...additional_options,
        })
    }

    get refreshToken() {
        return this.refresh_token
    }

    public streamSearchData(
        request: SearchGoogleAdsStreamRequest
    ): ClientReadableStream<SearchGoogleAdsStreamResponse> {
        const service = this.client.getService('GoogleAdsService', { useStreaming: true })
        return service.searchStream(request)
    }

    public async searchWithRetry(throttler: Bottleneck, request: SearchGoogleAdsRequest) {
        const service = this.client.getService('GoogleAdsService')

        // @ts-ignore
        const response = await throttler.wrap(service.search).withOptions(
            {
                expiration: 1000 * 60 * 5,
            },
            // @ts-ignore
            request
        )
        return response
    }

    public async searchIterator(
        throttler: Bottleneck,
        request: SearchGoogleAdsRequest,
        limit: number
    ): Promise<Array<object>> {
        /*
            This next section serves to remedy the current odd 
            behavior around limit/page_size of the API. 

            At the moment, this is what happens:

            - If the page_size is higher than the limit:
                - the limit is ignored
                - the page_size is set to the limit
                - SOLUTION: don't paginate
            - If the page_size is lower than the limit:
                - the limit is ignored
                - SOLUTION: stop paginating when limit is hit

            We're going to get in touch with Google about this.
        */

        let results: Array<object> = []

        let response = await this.searchWithRetry(throttler, request)
        results = results.concat(response.resultsList)

        const hasNextPage = (res: any) => res && res.nextPageToken

        while (hasNextPage(response)) {
            const next_page_request = request.clone() as SearchGoogleAdsRequest
            next_page_request.setPageToken(response.nextPageToken)

            response = await this.searchWithRetry(throttler, next_page_request)
            results = results.concat(response.resultsList)

            // If there is no limit, `limit` will be set to 0.
            if (limit && results.length >= limit) {
                results = results.slice(0, limit)
                break
            }
        }

        return results
    }

    public buildSearchRequest(
        customer_id: string,
        query: string,
        page_size?: number,
        page_token?: string
    ): BuildSearchRequestResponse {
        const request = new SearchGoogleAdsRequest()
        request.setCustomerId(customer_id)
        request.setQuery(query)

        if (page_size) {
            request.setPageSize(page_size)
        }
        if (page_token) {
            request.setPageToken(page_token)
        }

        const has_limit = query.toLowerCase().includes(' limit ')
        let limit = 0 // The default limit is 0, which means no limit.
        if (has_limit) {
            limit = +query
                .toLowerCase()
                .split(' limit ')[1]
                .trim()
        }

        return { request, limit }
    }

    public buildSearchStreamRequest(customer_id: string, query: string): BuildSearchStreamRequestResponse {
        const request = new SearchGoogleAdsStreamRequest()
        request.setCustomerId(customer_id)
        request.setQuery(query)

        return { request }
    }

    public getService(name: string): any {
        return this.client.getService(name)
    }

    public buildResource(resource: string, data: any): unknown {
        return this.client.buildResource(resource, data)
    }
}
