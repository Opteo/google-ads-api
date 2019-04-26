---
title: Create ConversionAction
order: 4
type: create
entity: ConversionAction
---

### Create ConversionAction

This section describes how to create a ConversionAction.

```javascript
// Creating the entity

const conversion_action = {
  // Your ConversionAction here, without immutable fields such as resource_name
}

const result = await customer.conversionActions.create(conversion_action)
```

```javascript
// Example result
;['customers/3827277046/conversionActions/238277646']
```
