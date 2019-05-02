---
title: Get SharedSet
order: 2
type: get
entity: SharedSet
---

### Get a SharedSet

The `customer.sharedSets.get(resource_name)` method returns the SharedSet identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that SharedSet

#### Returns

Returns that SharedSet as an object.

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
