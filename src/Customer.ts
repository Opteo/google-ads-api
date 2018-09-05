// import Campaigns from './entities/Campaigns'
import Campaigns from './entities/Campaigns'
import CampaignBudgets from './entities/CampaignBudgets'
import AdGroups from './entities/AdGroups'
import AdGroupAds from './entities/AdGroupAds'
import Keywords from './entities/Keywords'
import SharedSets from './entities/SharedSets'

import { ENDPOINTS } from './constants'
import { Customer } from './types/Customer'
import { HttpController } from './types/Http'

export default function Customer(http_controller: HttpController) : Customer  {
	return {
		campaigns: new Campaigns(http_controller),
		campaignBudgets: new CampaignBudgets(http_controller),
		adgroups: new AdGroups(http_controller),
		ads: new AdGroupAds(http_controller),         
		keywords: new Keywords(http_controller),
		sharedSets: new SharedSets(http_controller),
		retrieve: () => http_controller.retrieve(ENDPOINTS.customers),
		search: (query: string) => http_controller.search(query), 
	}
}

