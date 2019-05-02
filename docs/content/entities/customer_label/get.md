---
title: Get CustomerLabel
order: 2
type: get
entity: CustomerLabel
---

### Get a CustomerLabel

The `customer.customerLabels.get(resource_name)` method returns the CustomerLabel identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that CustomerLabel

#### Returns

Returns that CustomerLabel as an object.

```javascript
// Getting the entity
let result = await customer.customerLabels.get('customers/1234567890/customerLabels/123123123')
```

```javascript

// Example result
(// Todo: add example get() return here)

```
