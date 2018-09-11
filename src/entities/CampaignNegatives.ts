import CampaignCriterions from './CampaignCriterions'

import { HttpController } from '../types/Http'

/* 
* 	Campaign Criterion Alias for Campaign Negatives 
*/
export default class CampaignNegatives extends CampaignCriterions {

    constructor(http_controller: HttpController) {
        super(http_controller)
    }
}
