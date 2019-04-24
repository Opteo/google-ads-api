---
title: Update Label
order: 5
type: update
entity: Label
---

This section describes how to update a Label.

```javascript
// Updating the entity

const label = {
    resource_name: 'customers/3827277046/labels/872103121', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.labels.update(label)

console.log(results) // ['customers/3827277046/labels/872103121']
```
