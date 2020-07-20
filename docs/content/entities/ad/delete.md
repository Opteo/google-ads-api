---
title: Delete Ad 
order: 6
type: delete
entity: Ad 
---

### Delete an Ad 

The `customer.ads.delete(resource_name)` sets the `status` field of an Ad to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

- ##### resource_name *required*
    The resource_name of that Ad


#### Returns

_Nothing_