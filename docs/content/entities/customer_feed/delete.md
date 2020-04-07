---
title: Delete CustomerFeed 
order: 6
type: delete
entity: CustomerFeed 
---

### Delete a CustomerFeed 

The `customer.customerFeeds.delete(resource_name)` sets the `status` field of a CustomerFeed to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

- ##### resource_name *required*
    The resource_name of that CustomerFeed


#### Returns

_Nothing_