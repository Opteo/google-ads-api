import { GoogleAdsClient, SearchGoogleAdsRequest } from 'google-ads-node'
import Bottleneck from 'bottleneck'

export default class GrpcClient {
    // @ts-ignore
    private client: GoogleAdsClient

    constructor(developer_token: string, access_token: string, login_customer_id?: string) {
        this.client = new GoogleAdsClient({
            developer_token,
            access_token,
            login_customer_id,
            parseResults: true,
        })
    }

    public async searchWithRetry(throttler: Bottleneck, request: SearchGoogleAdsRequest) {
        const service = this.client.getService('GoogleAdsService')

        try {
            // @ts-ignore
            const response = await throttler.wrap(service.search).withOptions(
                {
                    expiration: 1000 * 60 * 5,
                },
                request
            )
            return response
        } catch (err) {
            console.log('Error in search:')
            console.log(err)
        }
    }

    public buildSearchRequest(
        customer_id: string,
        query: string,
        page_size?: number,
        page_token?: string
    ): SearchGoogleAdsRequest {
        const request = new SearchGoogleAdsRequest()
        request.setCustomerId(customer_id)
        request.setQuery(query)

        if (page_size) {
            request.setPageSize(page_size)
        }
        if (page_token) {
            request.setPageToken(page_token)
        }

        return request
    }
}
