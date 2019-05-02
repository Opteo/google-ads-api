---
title: Get UserList
order: 2
type: get
entity: UserList
---

### Get a UserList

The `customer.userLists.get(resource_name)` method returns the UserList identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that UserList

#### Returns

Returns that UserList as an object.
