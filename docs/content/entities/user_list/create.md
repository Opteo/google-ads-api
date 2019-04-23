---
title: Create UserList 
---

This section describes how to create a UserList.



```javascript

// Creating the entity

const user_list = {
    // Your UserList here 
}

const results = await customer.userLists.create(user_list)

console.log(results) // ['customers/1234567890/userLists/9765432177']

```