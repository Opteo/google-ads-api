---
title: Get CampaignSharedSet
order: 2
type: get
entity: CampaignSharedSet
---

### Get CampaignSharedSet

The `customer.campaignSharedSets.get()` method returns all fields for one CampaignSharedSet, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.campaignSharedSets.get('customers/9262111890/campaignSharedSets/1485014801~1788591305')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/campaignSharedSets/1485014801~1788591305',
  campaign: 'customers/9262111890/campaigns/1485014801',
  shared_set: 'customers/9262111890/sharedSets/1788591305',
  status: 3,
})
```
