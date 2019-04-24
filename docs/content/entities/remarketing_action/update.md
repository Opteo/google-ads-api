---
title: Update RemarketingAction
order: 5
type: update
entity: RemarketingAction
---

This section describes how to update a RemarketingAction.

```javascript
// Updating the entity

const remarketing_action = {
    resource_name: 'customers/1234567890/remarketingActions/123123123', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.remarketingActions.update(remarketing_action)

console.log(results) // ['customers/1234567890/remarketingActions/123123123']
```
