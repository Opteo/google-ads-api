---
title: Delete CampaignSharedSet 
order: 6
type: delete
entity: CampaignSharedSet 
---

### Delete a CampaignSharedSet 

The `customer.campaignSharedSets.delete(resource_name)` sets the `status` field of a CampaignSharedSet to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

- ##### resource_name *required*
    The resource_name of that CampaignSharedSet


#### Returns

_Nothing_