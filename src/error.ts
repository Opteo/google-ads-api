import { get } from 'lodash'
import {
    SearchGoogleAdsRequest,
    MutateGoogleAdsRequest,
    PolicyTopicEntry,
    PolicyViolationDetails,
} from 'google-ads-node'

export class GrpcError extends Error {
    public readonly code: number
    public readonly request: object
    public readonly request_id: string
    public readonly location: string
    public readonly failure: any
    public readonly policy_violation_details: PolicyTopicEntry.AsObject[] | PolicyViolationDetails.AsObject | undefined

    constructor(err: any, request: SearchGoogleAdsRequest | MutateGoogleAdsRequest) {
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
        this.policy_violation_details = get(err, "metadata._internal_repr['policy-violation-details-bin'][0]")
        this.failure = err

        // Decode policy violation details buffer if it exists
        if (this.policy_violation_details) {
            try {
                this.policy_violation_details = JSON.parse(this.policy_violation_details.toString())
            } catch {
                this.policy_violation_details = undefined
            }
        }
    }
}
