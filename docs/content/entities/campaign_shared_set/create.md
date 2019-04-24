---
title: Create CampaignSharedSet
order: 4
type: create
entity: CampaignSharedSet
---

This section describes how to create a CampaignSharedSet.

```javascript
// Creating the entity

const campaign_shared_set = {
    // Your CampaignSharedSet here, without immutable fields such as resource_name
}

const results = await customer.campaignSharedSets.create(campaign_shared_set)

console.log(results) // ['customers/9262111890/campaignSharedSets/1485014801~1788591305']
```
