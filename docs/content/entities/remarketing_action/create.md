---
title: Create RemarketingAction
order: 4
type: create
entity: RemarketingAction
---

This section describes how to create a RemarketingAction.

```javascript
// Creating the entity

const remarketing_action = {
    // Your RemarketingAction here, without immutable fields such as resource_name
}

const results = await customer.remarketingActions.create(remarketing_action)

console.log(results) // ['customers/1234567890/remarketingActions/123123123']
```
