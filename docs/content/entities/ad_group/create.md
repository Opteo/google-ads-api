---
title: Create AdGroup 
---

This section describes how to create a AdGroup.



```javascript

// Creating the entity

const ad_group = {
    // Your AdGroup here 
}

const results = await customer.adGroups.create(ad_group)

console.log(results) // ['customers/1234567890/adGroups/9765432177']

```