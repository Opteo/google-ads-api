---
title: Delete KeywordPlanAdGroup
order: 6
type: delete
entity: KeywordPlanAdGroup
---

### Delete a KeywordPlanAdGroup

The `customer.keywordPlanAdGroups.delete(resource_name)` sets the `status` field of a KeywordPlanAdGroup to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that KeywordPlanAdGroup

#### Returns

_Nothing_
