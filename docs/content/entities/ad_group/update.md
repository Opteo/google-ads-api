---
title: Update AdGroup
order: 5
type: update
entity: AdGroup
---

This section describes how to update a AdGroup.

```javascript
// Updating the entity

const ad_group = {
    resource_name: 'customers/9262111890/adGroups/54493284610', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.adGroups.update(ad_group)

console.log(results) // ['customers/9262111890/adGroups/54493284610']
```
