declare namespace Global {
    /**
     *  Library Instance Interface
     * @interface
     */

    export interface Library {
        client_id: string|number,
        developer_token: string,
        client_secret: string,
    } 

    /**
     *  Account Instance Interface
     * @interface
     */

    export interface Account {
        customer_account_id: string|number,
        refresh_token: string,
    } 

    /**
     *  Client Instance Interface
     * @interface
     */

    export interface Client {
        cid: string|number,
        refresh_token: string,
        client_id: string|number,
        developer_token: string,
        client_secret: string,
    }     

    /**
     *  Update Config Interface
     * @interface
     */
    export interface UpdateConfig {
        update: { [key: string]: string|number|object },
    }
}
export = Global