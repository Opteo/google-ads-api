import { Error as IError } from './types/Global'
import { get } from 'lodash'

export default class GoogleAdsError extends Error {
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
