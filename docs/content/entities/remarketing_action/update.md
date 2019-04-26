---
title: Update RemarketingAction
order: 5
type: update
entity: RemarketingAction
---

### Update RemarketingAction

This section describes how to update a RemarketingAction.

```javascript
// Updating the entity

const remarketing_action = {
  resource_name: 'customers/1234567890/remarketingActions/123123123', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.remarketingActions.update(remarketing_action)
```

```javascript
// Example result
;['customers/1234567890/remarketingActions/123123123']
```
