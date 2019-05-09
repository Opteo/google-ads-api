---
title: Delete Label 
order: 6
type: delete
entity: Label 
---

### Delete a Label 

The `customer.labels.delete(resource_name)` sets the `status` field of a Label to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

-   ##### resource_name _required_
    The resource_name of that Label


#### Returns

_Nothing_