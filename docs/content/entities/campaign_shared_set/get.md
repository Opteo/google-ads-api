---
title: Get CampaignSharedSet
order: 2
type: get
entity: CampaignSharedSet
---

### Get a CampaignSharedSet

The `customer.campaignSharedSets.get(resource_name)` method returns the CampaignSharedSet identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that CampaignSharedSet

#### Returns

Returns that CampaignSharedSet as an object.

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
