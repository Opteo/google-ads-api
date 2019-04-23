---
title: Create CustomInterest 
---

This section describes how to create a CustomInterest.



```javascript

// Creating the entity

const custom_interest = {
    // Your CustomInterest here 
}

const results = await customer.customInterests.create(custom_interest)

console.log(results) // ['customers/1234567890/customInterests/9765432177']

```