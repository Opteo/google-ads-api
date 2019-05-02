---
title: Get CustomerClientLink
order: 2
type: get
entity: CustomerClientLink
---

### Get a CustomerClientLink

The `customer.customerClientLinks.get(resource_name)` method returns the CustomerClientLink identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that CustomerClientLink

#### Returns

Returns that CustomerClientLink as an object.

```javascript
// Getting the entity
let result = await customer.customerClientLinks.get('customers/1234567890/customerClientLinks/123123123')
```

```javascript

// Example result
(// Todo: add example get() return here)

```
