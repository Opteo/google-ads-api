---
title: Update CampaignSharedSet
order: 5
type: update
entity: CampaignSharedSet
---

### Update CampaignSharedSet

This section describes how to update a CampaignSharedSet.

```javascript
// Updating the entity

const campaign_shared_set = {
  resource_name: 'customers/9262111890/campaignSharedSets/1485014801~1788591305', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.campaignSharedSets.update(campaign_shared_set)
```

```javascript
// Example result
;['customers/9262111890/campaignSharedSets/1485014801~1788591305']
```
