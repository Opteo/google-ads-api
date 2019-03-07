import { GoogleAdsClient, SearchGoogleAdsRequest } from 'google-ads-node'
import Bottleneck from 'bottleneck'

interface BuildSearchRequestResponse {
    request: SearchGoogleAdsRequest
    limit: number
}

export default class GrpcClient {
    // @ts-ignore
    private client: GoogleAdsClient

    // this.client.developer_token,
    // this.client.client_id,
    // this.client.client_secret,
    // this.client.refresh_token,
    // this.client.manager_cid

    constructor(
        developer_token: string,
        client_id: string,
        client_secret: string,
        refresh_token: string,
        login_customer_id?: string
    ) {
        this.client = new GoogleAdsClient({
            developer_token,
            client_id,
            client_secret,
            refresh_token,
            login_customer_id,
            parseResults: true,
        })
    }

    public async searchWithRetry(throttler: Bottleneck, request: SearchGoogleAdsRequest) {
        const service = this.client.getService('GoogleAdsService')

        // @ts-ignore
        const response = await throttler.wrap(service.search).withOptions(
            {
                expiration: 1000 * 60 * 5,
            },
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
            const { nextPageToken, resultsList } = response
            results = results.concat(resultsList)

            if (results.length >= limit) {
                results = results.slice(0, limit)
                break
            }

            const next_page_request = request.clone() as SearchGoogleAdsRequest
            next_page_request.setPageToken(nextPageToken)

            response = await this.searchWithRetry(throttler, next_page_request)
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
        let limit = 0
        if (has_limit) {
            limit = +query
                .toLowerCase()
                .split(' limit ')[1]
                .trim()
        }

        return { request, limit }
    }
}
