---
title: Update CustomInterest
order: 5
type: update
entity: CustomInterest
---

### Update CustomInterest

This section describes how to update a CustomInterest.

```javascript
// Updating the entity

const custom_interest = {
  resource_name: 'customers/1234567890/customInterests/123123123', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.customInterests.update(custom_interest)
```

```javascript
// Example result
;['customers/1234567890/customInterests/123123123']
```
