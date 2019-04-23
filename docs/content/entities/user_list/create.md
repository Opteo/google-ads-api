---
title: Create UserList
order: 4
type: create
entity: UserList
---

This section describes how to create a UserList.

```javascript
// Creating the entity

const user_list = {
    // Your UserList here, without immutable fields such as resource_name
}

const results = await customer.userLists.create(user_list)

console.log(results) // ['customers/3827277046/userLists/508846109']
```
