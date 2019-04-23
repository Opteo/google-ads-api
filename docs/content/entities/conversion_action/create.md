---
title: Create ConversionAction
order: 4
type: create
entity: ConversionAction
---

This section describes how to create a ConversionAction.

```javascript
// Creating the entity

const conversion_action = {
    // Your ConversionAction here, without immutable fields such as resource_name
}

const results = await customer.conversionActions.create(conversion_action)

console.log(results) // ['customers/1234567890/conversionActions/123123123']
```
