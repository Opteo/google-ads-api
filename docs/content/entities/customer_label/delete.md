---
title: Delete CustomerLabel 
order: 6
type: delete
entity: CustomerLabel 
---

### Delete a CustomerLabel 

The `customer.customerLabels.delete(resource_name)` sets the `status` field of a CustomerLabel to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

-   ##### resource_name _required_
    The resource_name of that CustomerLabel


#### Returns

_Nothing_