---
title: Get CampaignSharedSet
order: 2.1
type: get_code
entity: CampaignSharedSet
---

```javascript
// Getting the entity
let result = await customer.campaignSharedSets.get('customers/9262111890/campaignSharedSets/1485014801~1788591305')
```

```javascript
// Example result
;({
  campaign: 'customers/9262111890/campaigns/1485014801',
  resource_name: 'customers/9262111890/campaignSharedSets/1485014801~1788591305',
  shared_set: 'customers/9262111890/sharedSets/1788591305',
  status: 3,
})
```
