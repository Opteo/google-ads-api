import Entity from './Entity'
import { ENDPOINTS, RESOURCE_NAMES } from '../constants'

import { HttpController } from '../types/Http'
import { NewSharedSetConfig } from '../types/SharedSet'

export default class SharedSets extends Entity {
    constructor(http_controller: HttpController) {
        super(http_controller, ENDPOINTS.shared_sets, RESOURCE_NAMES.shared_set)
    }

    create(config: NewSharedSetConfig | NewSharedSetConfig[]): Promise<any> {
        return super.create(config)
    }

    retrieve<SharedSet>(shared_set_id: string | number): Promise<any> {
        return super.retrieve(shared_set_id)
    }
}
