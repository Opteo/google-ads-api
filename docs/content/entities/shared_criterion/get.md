---
title: Get SharedCriterion
order: 2
type: get
entity: SharedCriterion
---

### Get a SharedCriterion

The `customer.sharedCriteria.get(resource_name)` method returns the SharedCriterion identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that SharedCriterion

#### Returns

Returns that SharedCriterion as an object.

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
