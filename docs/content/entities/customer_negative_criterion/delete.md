---
title: Delete CustomerNegativeCriterion
order: 6
type: delete
entity: CustomerNegativeCriterion
---

### Delete a CustomerNegativeCriterion

The `customer.customerNegativeCriteria.delete(resource_name)` sets the `status` field of a CustomerNegativeCriterion to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that CustomerNegativeCriterion

#### Returns

_Nothing_
