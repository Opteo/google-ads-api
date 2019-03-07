import { Error as IError } from './types/Global'
import { get } from 'lodash'
import { SearchGoogleAdsRequest } from 'google-ads-node'

export class GoogleAdsError extends Error {
    public error_name: string
    public details: object[]
    public status: string
    public http_code: number
    public trigger: string
    public location: object[]

    constructor({ message, status, details, code }: IError) {
        const detailed_message = get(details, '[0].errors[0].message')
        message = detailed_message ? `${message} ${detailed_message}` : message

        super(message)
        this.error_name = message
        this.details = details
        this.status = status
        this.http_code = code

        this.trigger = get(details, '[0].errors[0].trigger.stringValue')
        this.location = get(details, '[0].errors[0].location.fieldPathElements')

        Error.captureStackTrace(this, this.constructor)
    }
}

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
