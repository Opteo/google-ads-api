---
title: Get SharedCriterion
order: 2
type: get
entity: SharedCriterion
---

### Get SharedCriterion

The `customer.sharedCriteria.get()` method returns all fields for one SharedCriterion, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

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
