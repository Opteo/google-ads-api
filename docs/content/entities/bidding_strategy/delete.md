---
title: Delete BiddingStrategy 
order: 6
type: delete
entity: BiddingStrategy 
---

### Delete a BiddingStrategy 

The `customer.biddingStrategies.delete(resource_name)` sets the `status` field of a BiddingStrategy to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

-   ##### resource_name _required_
    The resource_name of that BiddingStrategy


#### Returns

_Nothing_