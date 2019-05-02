---
title: Update RemarketingAction
order: 5.1
type: update_code
entity: RemarketingAction
---

```javascript
// Updating the entity

const remarketing_action = {
  resource_name: 'customers/1234567890/remarketingActions/123123123', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.remarketingActions.update(remarketing_action)

// Passing in an array of entities to update, validating only
const result = await customer.remarketingActions.update([remarketing_action, other_remarketing_action], {
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
