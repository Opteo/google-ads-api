---
title: Create ConversionAction 
---

This section describes how to create a ConversionAction.



```javascript

// Creating the entity

const conversion_action = {
    // Your ConversionAction here 
}

const results = await customer.conversionActions.create(conversion_action)

console.log(results) // ['customers/1234567890/conversionActions/9765432177']

```