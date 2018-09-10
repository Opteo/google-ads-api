import AdGroupCriterions from './AdGroupCriterions'

import { HttpController } from '../types/Http'
import { NewKeywordConfig } from '../types/Keyword'

/* 
* 	Keywords Alias for AdGroup Criterion 
*/
export default class Keywords extends AdGroupCriterions {

    constructor(http_controller: HttpController) {
        super(http_controller)
    }

    create(config: NewKeywordConfig) : Promise<any> {
        return super.create(config)
    }
}
