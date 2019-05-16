---
title: Delete CustomInterest 
order: 6
type: delete
entity: CustomInterest 
---

### Delete a CustomInterest 

The `customer.customInterests.delete(resource_name)` sets the `status` field of a CustomInterest to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

- ##### resource_name *required*
    The resource_name of that CustomInterest


#### Returns

_Nothing_