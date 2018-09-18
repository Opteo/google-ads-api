import Bottleneck from "bottleneck";

declare namespace Global {
    /**
     *  Library Instance Interface
     * @interface
     */

    export interface Library {
        client_id: string|number,
        developer_token: string,
        client_secret: string,
        redis_options?: any
    } 

    /**
     *  Account Instance Interface
     * @interface
     */
    export interface Account {
        customer_account_id?: string|number,
        refresh_token?: string,
        async_account_getter?: Function
    }  

    /**
     *  Account Info Interface
     * @interface
     */
    export interface AccountInfo { 
        cid: string, 
        refresh_token: string 
    }

    /**
     *  Client Instance Interface
     * @interface
     */

    export interface Client {
        account_promise: Promise<object>,
        cid: string,
        refresh_token: string,
        client_id: string|number,
        developer_token: string,
        client_secret: string,
    }   

    /**
     *  Client Constructor Interface
     * @interface
     */

    export interface ClientConstructor {
        async_account_getter: Function,
        client_id: string|number,
        developer_token: string,
        client_secret: string,
        throttler : Bottleneck
    }     

    /**
     *  Update Config Interface
     * @interface
     */
    export interface UpdateConfig {
        update: { [key: string]: string|number|object },
    }

    /**
     *  Google Ads Error Interface
     * @interface
     */
    export interface Error {
        message: string,
        status: string, 
        details: any, 
        code: number
    }


    /**
     *  Report Method Config Interface
     * @interface
     */
    export interface ReportConfig {
        entity: string,
        attributes?: Array<string>
        metrics?: Array<string>
        segments?: Array<string> 
        constraints?: Array<string>|Array<object>|string,
        date_constant?: DateConstant | keyof typeof DateConstant,
        from_date?: string, // ISO 8601(YYYY-MM-DD) format
        to_date?: string, // ISO 8601(YYYY-MM-DD) format
        limit?: number,
        order_by?: string|Array<string>,
        sort_order?: string,
        convert_micros?: boolean
    }

     /**
     * Enum for Date Constant
     * @readonly
     * @enum {string}
     */
    enum DateConstant {
        LAST_7_DAYS = 'LAST_7_DAYS',
        LAST_14_DAYS = 'LAST_14_DAYS',  
        LAST_30_DAYS = 'LAST_30_DAYS',
        LAST_BUSINESS_WEEK = 'LAST_BUSINESS_WEEK',
        LAST_MONTH = 'LAST_MONTH',
        THIS_MONTH = 'THIS_MONTH',
        LAST_WEEK_MON_SUN = 'LAST_WEEK_MON_SUN',
        LAST_WEEK_SUN_SAT = 'LAST_WEEK_SUN_SAT',
        THIS_WEEK_MON_TODAY = 'THIS_WEEK_MON_TODAY',
        THIS_WEEK_SUN_TODAY = 'THIS_WEEK_SUN_TODAY',
        YESTERDAY = 'YESTERDAY',
        TODAY = 'TODAY',
    }
}
export = Global