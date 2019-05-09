---
title: Delete CampaignLabel 
order: 6
type: delete
entity: CampaignLabel 
---

### Delete a CampaignLabel 

The `customer.campaignLabels.delete(resource_name)` sets the `status` field of a CampaignLabel to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

-   ##### resource_name _required_
    The resource_name of that CampaignLabel


#### Returns

_Nothing_