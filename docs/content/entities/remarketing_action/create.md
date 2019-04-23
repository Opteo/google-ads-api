---
title: Create RemarketingAction 
---

This section describes how to create a RemarketingAction.



```javascript

// Creating the entity

const remarketing_action = {
    // Your RemarketingAction here 
}

const results = await customer.remarketingActions.create(remarketing_action)

console.log(results) // ['customers/1234567890/remarketingActions/9765432177']

```