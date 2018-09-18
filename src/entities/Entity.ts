import { ListConfig, EntityUpdateConfig, NewEntityConfig } from '../types/Entity'
import { HttpController } from '../types/Http'

export default class Entity {
    private http_controller: HttpController
    private endpoint: string
    private resource: string

    constructor(http_controller: HttpController, endpoint: string, resource: string){
        this.http_controller = http_controller
        this.endpoint = endpoint
        this.resource = resource
    }

    public retrieve(entity_id: string|number) : Promise<any> {
        return this.http_controller.retrieve(this.endpoint, entity_id)
    }

    public create(config: NewEntityConfig) : Promise<any> {
        return this.http_controller.create(config, this.endpoint)
    }
    
    public list(config?: ListConfig) : Promise<any> {
        return this.http_controller.list(config, this.resource)
    }

    public update(config: EntityUpdateConfig) : Promise<any> {
        return this.http_controller.update(config, this.endpoint)
    }
    
    public delete(entity_id: string|number) : Promise<any> {
        return this.http_controller.delete(this.endpoint, entity_id)
    }
    
}
