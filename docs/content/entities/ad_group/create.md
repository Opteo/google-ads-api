---
title: Create AdGroup
order: 4
type: create
entity: AdGroup
---

### Create AdGroup

This section describes how to create a AdGroup.

```javascript
// Creating the entity

const ad_group = {
  // Your AdGroup here, without immutable fields such as resource_name
}

const result = await customer.adGroups.create(ad_group)
```

```javascript
// Example result
;['customers/9262111890/adGroups/54493284610']
```
