import { get } from 'lodash'
import { SearchGoogleAdsRequest } from 'google-ads-node'

export class SearchGrpcError extends Error {
    public readonly code: number
    public readonly request: object
    public readonly request_id: string
    public readonly location: string
    public readonly failure: any

    constructor(err: any, request: SearchGoogleAdsRequest) {
        const { code, details } = err

        super(details)
        try {
            // Error.code is usually a number, so typescript really needs massaging here to accept an object.
            this.code = JSON.parse(get(err, "metadata._internal_repr['error-code'][0]"))
            for (const key in this.code as any) {
                if ((this.code as any)[key] === 0) {
                    delete (this.code as any)[key]
                }
            }
        } catch (err) {
            this.code = code
        }
        this.request = request.toObject()
        this.request_id = get(err, "metadata._internal_repr['request-id'][0]")
        this.location = get(err, "metadata._internal_repr['location'][0]")
        this.failure = err
    }
}
