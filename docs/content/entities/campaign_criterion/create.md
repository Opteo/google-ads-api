---
title: Create CampaignCriterion
order: 4
type: create
entity: CampaignCriterion
---

### Create CampaignCriterion

This section describes how to create a CampaignCriterion.

```javascript
// Creating the entity

const campaign_criterion = {
  // Your CampaignCriterion here, without immutable fields such as resource_name
}

const result = await customer.campaignCriteria.create(campaign_criterion)
```

```javascript
// Example result
;['customers/9262111890/campaignCriteria/1599497210~1000']
```
