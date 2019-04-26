---
title: Create UserList
order: 4
type: create
entity: UserList
---

### Create UserList

This section describes how to create a UserList.

```javascript
// Creating the entity

const user_list = {
  // Your UserList here, without immutable fields such as resource_name
}

const result = await customer.userLists.create(user_list)
```

```javascript
// Example result
;['customers/3827277046/userLists/508846109']
```
