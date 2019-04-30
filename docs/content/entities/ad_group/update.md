---
title: Update AdGroup
order: 5
type: update
entity: AdGroup
---

### Update AdGroup

This section describes how to update a AdGroup.

```javascript
// Updating the entity

const ad_group = {
  resource_name: 'customers/9262111890/adGroups/66537099246', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.adGroups.update(ad_group)
```

```javascript
// Example result
;['customers/9262111890/adGroups/66537099246']
```
