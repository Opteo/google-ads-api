---
title: Update ConversionAction
order: 5
type: update
entity: ConversionAction
---

### Update ConversionAction

This section describes how to update a ConversionAction.

```javascript
// Updating the entity

const conversion_action = {
  resource_name: 'customers/3827277046/conversionActions/238277646', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.conversionActions.update(conversion_action)
```

```javascript
// Example result
;['customers/3827277046/conversionActions/238277646']
```
