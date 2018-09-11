import { Error as IError } from './types/Global'

export default class GoogleAdsError extends Error {
    public error_name: string
    public details: Array<object>
    public status: string
    public mistake: string
    public http_code: number

    constructor({message, status, details, code} : IError) {
        super(message)
       
        this.error_name = message
        this.details = details
        this.status = status
        this.http_code = code
        this.mistake = details ? details[0].errors[0].message : 'unknown'

        Error.captureStackTrace(this, this.constructor)
    }
}
 