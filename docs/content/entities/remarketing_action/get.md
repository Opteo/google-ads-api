---
title: Get RemarketingAction
order: 2
type: get
entity: RemarketingAction
---

### Get a RemarketingAction

The `customer.remarketingActions.get(resource_name)` method returns the RemarketingAction identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that RemarketingAction

#### Returns

Returns that RemarketingAction as an object.

```javascript
// Getting the entity
let result = await customer.remarketingActions.get('customers/1234567890/remarketingActions/123123123')
```

```javascript

// Example result
(// Todo: add example get() return here)

```
