---
title: Delete Asset 
order: 6
type: delete
entity: Asset 
---

### Delete an Asset 

The `customer.assets.delete(resource_name)` sets the `status` field of an Asset to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

- ##### resource_name *required*
    The resource_name of that Asset


#### Returns

_Nothing_