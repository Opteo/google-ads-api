---
title: Delete SharedSet
order: 6
type: delete
entity: SharedSet
---

### Delete a SharedSet

The `customer.sharedSets.delete(resource_name)` sets the `status` field of a SharedSet to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that SharedSet

#### Returns

_Nothing_

```javascript
// Deleting the entity

await customer.sharedSets.delete('customers/9262111890/sharedSets/1802068178')
```
