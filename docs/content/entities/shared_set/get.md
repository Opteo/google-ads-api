---
title: Get SharedSet
order: 2
type: get
entity: SharedSet
---

### Get SharedSet

The `customer.sharedSets.get()` method returns all fields for one SharedSet, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.sharedSets.get('customers/9262111890/sharedSets/1802068178')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/sharedSets/1802068178',
  id: 1802068178,
  member_count: 0,
  name: 'My shared set',
  reference_count: 0,
  status: 3,
  type: 2,
})
```
