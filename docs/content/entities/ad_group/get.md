---
title: Get AdGroup
order: 2
type: get
entity: AdGroup
---

### Get an AdGroup

The `customer.adGroups.get(resource_name)` method returns the AdGroup identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that AdGroup

#### Returns

Returns that AdGroup as an object.