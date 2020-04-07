---
title: Delete Campaign 
order: 6
type: delete
entity: Campaign 
---

### Delete a Campaign 

The `customer.campaigns.delete(resource_name)` sets the `status` field of a Campaign to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

- ##### resource_name *required*
    The resource_name of that Campaign


#### Returns

_Nothing_