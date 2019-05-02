---
title: Get CampaignFeed
order: 2
type: get
entity: CampaignFeed
---

### Get a CampaignFeed

The `customer.campaignFeeds.get(resource_name)` method returns the CampaignFeed identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that CampaignFeed

#### Returns

Returns that CampaignFeed as an object.
