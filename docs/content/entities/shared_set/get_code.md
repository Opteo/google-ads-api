---
title: Get SharedSet
order: 2.1
type: get_code
entity: SharedSet
---

```javascript
// Getting the entity
let result = await customer.sharedSets.get('customers/9262111890/sharedSets/1788591305')
```

```javascript
// Example result
;({
  id: 1788591305,
  member_count: 6,
  name: 'My shared set',
  reference_count: 0,
  resource_name: 'customers/9262111890/sharedSets/1788591305',
  status: 2,
  type: 2,
})
```
