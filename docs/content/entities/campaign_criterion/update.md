---
title: Update CampaignCriterion
order: 5
type: update
entity: CampaignCriterion
---

### Update CampaignCriterion

This section describes how to update a CampaignCriterion.

```javascript
// Updating the entity

const campaign_criterion = {
  resource_name: 'customers/9262111890/campaignCriteria/1599497210~1000', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.campaignCriteria.update(campaign_criterion)
```

```javascript
// Example result
;['customers/9262111890/campaignCriteria/1599497210~1000']
```
