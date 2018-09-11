import CampaignCriterions from './CampaignCriterions'

import { HttpController } from '../types/Http'

/* 
* 	Campaign Criterion Alias for Campaign Ad Schedule 
*/
export default class CampaignAdSchedules extends CampaignCriterions {

    constructor(http_controller: HttpController) {
        super(http_controller)
    }
}
