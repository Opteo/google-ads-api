---
title: Delete Feed 
order: 6
type: delete
entity: Feed 
---

### Delete a Feed 

The `customer.feeds.delete(resource_name)` sets the `status` field of a Feed to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

-   ##### resource_name _required_
    The resource_name of that Feed


#### Returns

_Nothing_