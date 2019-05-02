---
title: Delete AdGroup
order: 6
type: delete
entity: AdGroup
---

### Delete an AdGroup

The `customer.adGroups.delete(resource_name)` sets the `status` field of an AdGroup to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that AdGroup

#### Returns

_Nothing_
