---
title: Get CustomerManagerLink
order: 2
type: get
entity: CustomerManagerLink
---

### Get a CustomerManagerLink

The `customer.customerManagerLinks.get(resource_name)` method returns the CustomerManagerLink identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that CustomerManagerLink

#### Returns

Returns that CustomerManagerLink as an object.

```javascript
// Getting the entity
let result = await customer.customerManagerLinks.get('customers/9262111890/customerManagerLinks/6141549892~121665495')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/customerManagerLinks/6141549892~121665495',
  manager_customer: 'customers/6141549892',
  manager_link_id: 121665495,
  status: 2,
})
```
