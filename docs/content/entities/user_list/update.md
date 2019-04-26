---
title: Update UserList
order: 5
type: update
entity: UserList
---

### Update UserList

This section describes how to update a UserList.

```javascript
// Updating the entity

const user_list = {
  resource_name: 'customers/3827277046/userLists/508846109', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.userLists.update(user_list)
```

```javascript
// Example result
;['customers/3827277046/userLists/508846109']
```
