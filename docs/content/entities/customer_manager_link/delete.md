---
title: Delete CustomerManagerLink 
order: 6
type: delete
entity: CustomerManagerLink 
---

### Delete a CustomerManagerLink 

The `customer.customerManagerLinks.delete(resource_name)` sets the `status` field of a CustomerManagerLink to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

- ##### resource_name *required*
    The resource_name of that CustomerManagerLink


#### Returns

_Nothing_