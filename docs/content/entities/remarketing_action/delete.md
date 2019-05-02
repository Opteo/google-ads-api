---
title: Delete RemarketingAction
order: 6
type: delete
entity: RemarketingAction
---

### Delete a RemarketingAction

The `customer.remarketingActions.delete(resource_name)` sets the `status` field of a RemarketingAction to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that RemarketingAction

#### Returns

_Nothing_
