---
title: Update KeywordPlanCampaign
order: 5
type: update
entity: KeywordPlanCampaign
---

This section describes how to update a KeywordPlanCampaign.

```javascript
// Updating the entity

const keyword_plan_campaign = {
    resource_name: 'customers/3827277046/keywordPlanCampaigns/4773388', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.keywordPlanCampaigns.update(keyword_plan_campaign)

console.log(results) // ['customers/3827277046/keywordPlanCampaigns/4773388']
```
