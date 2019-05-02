---
title: Get CampaignBudget
order: 2
type: get
entity: CampaignBudget
---

### Get a CampaignBudget

The `customer.campaignBudgets.get(resource_name)` method returns the CampaignBudget identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that CampaignBudget

#### Returns

Returns that CampaignBudget as an object.
