---
title: Delete MediaFile
order: 6
type: delete
entity: MediaFile
---

### Delete a MediaFile

The `customer.mediaFiles.delete(resource_name)` sets the `status` field of a MediaFile to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that MediaFile

#### Returns

_Nothing_
