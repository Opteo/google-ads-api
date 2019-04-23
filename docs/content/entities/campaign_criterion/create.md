---
title: Create CampaignCriterion
order: 4
type: create
entity: CampaignCriterion
---

This section describes how to create a CampaignCriterion.

```javascript
// Creating the entity

const campaign_criterion = {
    // Your CampaignCriterion here, without immutable fields such as resource_name
}

const results = await customer.campaignCriteria.create(campaign_criterion)

console.log(results) // ['customers/9262111890/campaignCriteria/1473765780~1000']
```
