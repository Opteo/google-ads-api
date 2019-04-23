---
title: Update UserList
order: 5
type: update
entity: UserList
---

This section describes how to update a UserList.

```javascript
// Updating the entity

const user_list = {
    resource_name: 'customers/3827277046/userLists/508846109', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.userLists.update(user_list)

console.log(results) // ['customers/3827277046/userLists/508846109']
```
