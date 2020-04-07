---
title: Delete CampaignBidModifier 
order: 6
type: delete
entity: CampaignBidModifier 
---

### Delete a CampaignBidModifier 

The `customer.campaignBidModifiers.delete(resource_name)` sets the `status` field of a CampaignBidModifier to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

- ##### resource_name *required*
    The resource_name of that CampaignBidModifier


#### Returns

_Nothing_