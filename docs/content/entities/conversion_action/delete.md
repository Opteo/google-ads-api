---
title: Delete ConversionAction
order: 6
type: delete
entity: ConversionAction
---

### Delete a ConversionAction

The `customer.conversionActions.delete(resource_name)` sets the `status` field of a ConversionAction to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that ConversionAction

#### Returns

_Nothing_
