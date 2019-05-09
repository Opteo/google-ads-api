---
title: Delete UserList 
order: 6
type: delete
entity: UserList 
---

### Delete a UserList 

The `customer.userLists.delete(resource_name)` sets the `status` field of a UserList to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

-   ##### resource_name _required_
    The resource_name of that UserList


#### Returns

_Nothing_