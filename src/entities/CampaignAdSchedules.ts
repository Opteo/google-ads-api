import CampaignCriterions from './CampaignCriterions'

import { HttpController } from '../types/Http'

/* 
* 	Campaign Ad Schedule Alias for Campaign Criterion 
*/
export default class CampaignAdSchedules extends CampaignCriterions {

    constructor(http_controller: HttpController) {
        super(http_controller)
    }
}
