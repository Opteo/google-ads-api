---
title: Delete CustomerClientLink 
order: 6
type: delete
entity: CustomerClientLink 
---

### Delete a CustomerClientLink 

The `customer.customerClientLinks.delete(resource_name)` sets the `status` field of a CustomerClientLink to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

- ##### resource_name *required*
    The resource_name of that CustomerClientLink


#### Returns

_Nothing_