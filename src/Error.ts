export default class GoogleAdsError extends Error {
    constructor(message:string, status:string, details:any, http_code:number) {
        super(message);
        Object.setPrototypeOf(this, GoogleAdsError.prototype);
        // Ensure the name of this error is the same as the class name
        if(details){
            this.mistake = details[0].errors[0].message
        }  
        this.name = this.constructor.name;
        this.details = details
        this.status = status
        this.http_code = http_code

        Error.captureStackTrace(this, this.constructor);
    }
}
 