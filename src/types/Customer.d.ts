import Campaigns from '../entities/Campaigns'
import CampaignBudgets from '../entities/CampaignBudgets'
import AdGroups from '../entities/AdGroups'
import AdGroupAds from '../entities/AdGroupAds'
import AdGroupCriterions from '../entities/AdGroupCriterions'
import Keywords from '../entities/Keywords'
import SharedSets from '../entities/SharedSets'

import { UpdateConfig } from './Global'

declare namespace Customer {
    /**
     *  Customer Instance Interface
     * @interface
     */
    export interface Customer {
        campaigns: Campaigns,
        campaignBudgets: CampaignBudgets,
        adgroups: AdGroups,
        ads: AdGroupAds,
        adgroupCriterions: AdGroupCriterions,
        keywords: Keywords,
        sharedSets: SharedSets,
        retrieve: () => Promise<any>,
        search: (query: string) => Promise<any>
    }

}
export = Customer