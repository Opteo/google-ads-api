---
title: Delete CampaignCriterion 
order: 6
type: delete
entity: CampaignCriterion 
---

### Delete a CampaignCriterion 

The `customer.campaignCriteria.delete(resource_name)` sets the `status` field of a CampaignCriterion to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

-   ##### resource_name _required_
    The resource_name of that CampaignCriterion


#### Returns

_Nothing_