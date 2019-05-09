---
title: Delete ExtensionFeedItem 
order: 6
type: delete
entity: ExtensionFeedItem 
---

### Delete a ExtensionFeedItem 

The `customer.extensionFeedItems.delete(resource_name)` sets the `status` field of a ExtensionFeedItem to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

- ##### resource_name *required*
    The resource_name of that ExtensionFeedItem


#### Returns

_Nothing_