---
title: Create CustomInterest
order: 4
type: create
entity: CustomInterest
---

### Create CustomInterest

This section describes how to create a CustomInterest.

```javascript
// Creating the entity

const custom_interest = {
  // Your CustomInterest here, without immutable fields such as resource_name
}

const result = await customer.customInterests.create(custom_interest)
```

```javascript
// Example result
;['customers/1234567890/customInterests/123123123']
```
