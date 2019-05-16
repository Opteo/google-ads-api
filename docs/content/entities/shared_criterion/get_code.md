---
title: Get SharedCriterion
order: 2.1
type: get_code
entity: SharedCriterion
---

```javascript
// Getting the entity
let result = await customer.sharedCriteria.get('customers/9262111890/sharedCriteria/1788591305~627191652608')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/sharedCriteria/1788591305~627191652608',
  criterion_id: 627191652608,
  keyword: { match_type: 2, text: 'test-keyword-399026' },
  shared_set: 'customers/9262111890/sharedSets/1788591305',
  type: 2,
})
```
