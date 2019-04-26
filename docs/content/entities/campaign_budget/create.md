---
title: Create CampaignBudget
order: 4
type: create
entity: CampaignBudget
---

### Create CampaignBudget

This section describes how to create a CampaignBudget.

```javascript
// Creating the entity

const campaign_budget = {
  // Your CampaignBudget here, without immutable fields such as resource_name
}

const result = await customer.campaignBudgets.create(campaign_budget)
```

```javascript
// Example result
;['customers/9262111890/campaignBudgets/1536143460']
```
