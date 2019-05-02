---
title: Create RemarketingAction
order: 4.1
type: create_code
entity: RemarketingAction
---

```javascript
// Creating the entity

const remarketing_action = {
  // Your RemarketingAction here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.remarketingActions.create(remarketing_action)

// Passing in an array of entities to create, validating only
const result = await customer.remarketingActions.create([remarketing_action, other_remarketing_action], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/1234567890/remarketingActions/123123123'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
