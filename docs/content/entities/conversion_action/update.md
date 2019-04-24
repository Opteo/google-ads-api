---
title: Update ConversionAction
order: 5
type: update
entity: ConversionAction
---

This section describes how to update a ConversionAction.

```javascript
// Updating the entity

const conversion_action = {
    resource_name: 'customers/1234567890/conversionActions/123123123', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.conversionActions.update(conversion_action)

console.log(results) // ['customers/1234567890/conversionActions/123123123']
```
