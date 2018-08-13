
import Entity from './Entity'
import { ENDPOINTS, RESOURCE_NAMES } from '../constants'
import { HttpController } from '../types/Http'
import { ListKeywordsConfig, NewKeywordConfig } from '../types/Keyword'

export default class Keywords extends Entity {

    constructor(http_controller: HttpController) {
        super(http_controller, ENDPOINTS.keywords, RESOURCE_NAMES.keyword)
    }

    create(config: NewKeywordConfig) : Promise<any> {
        return super.create(config)
    }

    list(config: ListKeywordsConfig) : Promise<any> {
        return super.list(config)
    }

    retrieve<IKeyword>(keyword_id: string) : Promise<any> {
        return super.retrieve(keyword_id)
    }

}
