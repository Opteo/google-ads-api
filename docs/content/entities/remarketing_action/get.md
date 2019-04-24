---
title: Get RemarketingAction
order: 2
type: get
entity: RemarketingAction
---

The `customer.remarketingActions.get()` method returns all fields for one RemarketingAction, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript


// Getting the entity
let result = await customer.remarketingActions.get('customers/1234567890/remarketingActions/123123123')


// Here's what the result might look like
result === // Todo: add example get() return here

```
