---
title: Get CustomInterest
order: 2
type: get
entity: CustomInterest
---

### Get a CustomInterest

The `customer.customInterests.get(resource_name)` method returns the CustomInterest identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that CustomInterest

#### Returns

Returns that CustomInterest as an object.

```javascript
// Getting the entity
let result = await customer.customInterests.get('customers/1234567890/customInterests/123123123')
```

```javascript

// Example result
(// Todo: add example get() return here)

```
