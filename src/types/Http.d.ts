import { NewEntityConfig, ListConfig } from './Entity'
import { UpdateConfig } from './Global'

declare namespace Http {
    /**
     *  Http Controller Interface
     * @interface
     */
    
    export interface HttpController {
        retrieve(entity: string, entity_id?: string|number): Promise<object>, 
        create(config: NewEntityConfig, entity: string): Promise<object>, 
        list(config: ListConfig, resource: string): Promise<object>, 
        update(config: UpdateConfig, entity: string): Promise<object>, 
        delete(entity: string, entity_id: string|number): Promise<object>, 
        search(entity: string): Promise<object>, 
    }

    /**
     *  Access Token Interface
     * @interface
     */
    export interface AccessToken {
        access_token: string,
        expires_in: number,
        id_token: string|number,
        token_type: string
    }

    /**
     *  Error Interface
     * @interface
     */
    export interface Error {
        code: string|number, // create new enum?
        details: object,
        message: string,
        status: string, // create new enum?
      }

    /**
     * Request Options Interface
     * @interface
     */
    export interface RequestOptions {
        method: string,
        url: string,
        headers: {
            authorization: string,
            'developer-token': string
        },
        qs?: object,
        body?: string
    }

    /**
     * Result Interface
     * @interface
     */
    export interface Result {
        results: object,
        total_results_count: string|number,
        field_mask: string
    }
}
export = Http