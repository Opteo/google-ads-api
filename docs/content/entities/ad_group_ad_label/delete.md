---
title: Delete AdGroupAdLabel
order: 6
type: delete
entity: AdGroupAdLabel
---

### Delete an AdGroupAdLabel

The `customer.adGroupAdLabels.delete(resource_name)` sets the `status` field of an AdGroupAdLabel to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that AdGroupAdLabel

#### Returns

_Nothing_
