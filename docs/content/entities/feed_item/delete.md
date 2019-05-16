---
title: Delete FeedItem 
order: 6
type: delete
entity: FeedItem 
---

### Delete a FeedItem 

The `customer.feedItems.delete(resource_name)` sets the `status` field of a FeedItem to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

- ##### resource_name *required*
    The resource_name of that FeedItem


#### Returns

_Nothing_