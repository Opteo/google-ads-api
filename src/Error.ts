import { Error as IError } from './types/Global'
import { get } from 'lodash'

export default class GoogleAdsError extends Error {
    public error_name: string
    public details: Array<object>
    public status: string
    public http_code: number

    constructor({message, status, details, code} : IError) {
        const detailed_message = get(details, '[0].errors[0].message')
        message = detailed_message ? `${message} ${detailed_message}` : message

        super(message)
        this.error_name = message
        this.details = details
        this.status = status
        this.http_code = code

        Error.captureStackTrace(this, this.constructor)
    }
}
 