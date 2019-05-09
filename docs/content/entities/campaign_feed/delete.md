---
title: Delete CampaignFeed 
order: 6
type: delete
entity: CampaignFeed 
---

### Delete a CampaignFeed 

The `customer.campaignFeeds.delete(resource_name)` sets the `status` field of a CampaignFeed to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

-   ##### resource_name _required_
    The resource_name of that CampaignFeed


#### Returns

_Nothing_