import CampaignCriterions from './CampaignCriterions'

import { HttpController } from '../types/Http'
import { NewKeywordConfig } from '../types/Keyword'

/* 
* 	CampaignNegatives Alias for Campaign Criterion 
*/
export default class CampaignNegatives extends CampaignCriterions {

    constructor(http_controller: HttpController) {
        super(http_controller)
    }
}
