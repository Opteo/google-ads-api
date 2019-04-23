---
title: Create SharedSet 
---

This section describes how to create a SharedSet.



```javascript

// Creating the entity

const shared_set = {
    // Your SharedSet here 
}

const results = await customer.sharedSets.create(shared_set)

console.log(results) // ['customers/1234567890/sharedSets/9765432177']

```