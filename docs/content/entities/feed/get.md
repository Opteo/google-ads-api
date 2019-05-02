---
title: Get Feed
order: 2
type: get
entity: Feed
---

### Get a Feed

The `customer.feeds.get(resource_name)` method returns the Feed identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that Feed

#### Returns

Returns that Feed as an object.
