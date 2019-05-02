---
title: Delete SharedCriterion
order: 6
type: delete
entity: SharedCriterion
---

### Delete a SharedCriterion

The `customer.sharedCriteria.delete(resource_name)` sets the `status` field of a SharedCriterion to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that SharedCriterion

#### Returns

_Nothing_
