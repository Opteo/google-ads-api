---
title: Update CampaignCriterion
order: 5
type: update
entity: CampaignCriterion
---

This section describes how to update a CampaignCriterion.

```javascript
// Updating the entity

const campaign_criterion = {
    resource_name: 'customers/9262111890/campaignCriteria/1473765780~1000', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.campaignCriteria.update(campaign_criterion)

console.log(results) // ['customers/9262111890/campaignCriteria/1473765780~1000']
```
