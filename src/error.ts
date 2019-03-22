import { get } from 'lodash'
import { SearchGoogleAdsRequest } from 'google-ads-node'

export class SearchGrpcError extends Error {
    public code: number
    public request: object
    public request_id: string
    public failure: any

    constructor(err: any, request: SearchGoogleAdsRequest) {
        const { code, details } = err

        super(details)
        this.code = code
        this.request = request.toObject()
        this.request_id = get(err, "metadata._internal_repr['request-id'][0]")
        this.failure = err
    }
}
