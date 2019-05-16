---
title: Update UserList
order: 5.1
type: update_code
entity: UserList
---

```javascript
// Updating the entity

const user_list = {
  resource_name: 'customers/3827277046/userLists/508846109', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.userLists.update(user_list)

// Passing in an array of entities to update, validating only
const result = await customer.userLists.update([user_list, other_user_list], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/userLists/508846109'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
