---
title: Get Video
order: 2
type: get
entity: Video
---

### Get a Video

The `customer.videos.get(resource_name)` method returns the Video identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that Video

#### Returns

Returns that Video as an object.
