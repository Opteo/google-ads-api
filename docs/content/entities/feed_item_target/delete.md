---
title: Delete FeedItemTarget 
order: 6
type: delete
entity: FeedItemTarget 
---

### Delete a FeedItemTarget 

The `customer.feedItemTargets.delete(resource_name)` sets the `status` field of a FeedItemTarget to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

- ##### resource_name *required*
    The resource_name of that FeedItemTarget


#### Returns

_Nothing_