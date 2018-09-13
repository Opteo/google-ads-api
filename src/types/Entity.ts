import { UpdateConfig } from './Global'

declare namespace Entity {
    /**
     * Main Entity Interface
     * @interface
     */
    export interface Entity {
        resource_name: string
        id: string
        name: string
    }

    /**
     *  List Method Config Interface
     * @interface
     */
    export interface ListConfig {
        limit?: number,
        order_by?: string|Array<string>,
        fields: string[],
        constraints?: { [key: string]: string|any },
    }

    /**
     *  Update Method Config Interface
     * @interface
     */
    export interface EntityUpdateConfig extends UpdateConfig {
        id: string|number
    }

    /**
     *  New Entity Creation Config Interface
     * @interface
     */
    export interface NewEntityConfig {
        name?: string,
    }
}
export = Entity