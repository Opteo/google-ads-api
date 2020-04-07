---
title: Create UserList
order: 4.1
type: create_code
entity: UserList
---

```javascript
// Creating the entity

const user_list = {
  // Your UserList here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.userLists.create(user_list)

// Passing in an array of entities to create, validating only
const result = await customer.userLists.create([user_list, other_user_list], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/userLists/509186086'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
