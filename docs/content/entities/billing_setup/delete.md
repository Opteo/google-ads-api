---
title: Delete BillingSetup 
order: 6
type: delete
entity: BillingSetup 
---

### Delete a BillingSetup 

The `customer.billingSetups.delete(resource_name)` sets the `status` field of a BillingSetup to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

-   ##### resource_name _required_
    The resource_name of that BillingSetup


#### Returns

_Nothing_