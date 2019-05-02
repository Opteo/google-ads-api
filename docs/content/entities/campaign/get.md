---
title: Get Campaign
order: 2
type: get
entity: Campaign
---

### Get a Campaign

The `customer.campaigns.get(resource_name)` method returns the Campaign identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that Campaign

#### Returns

Returns that Campaign as an object.
