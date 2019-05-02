---
title: Get CustomerClient
order: 2
type: get
entity: CustomerClient
---

### Get a CustomerClient

The `customer.customerClients.get(resource_name)` method returns the CustomerClient identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that CustomerClient

#### Returns

Returns that CustomerClient as an object.

```javascript
// Getting the entity
let result = await customer.customerClients.get('customers/9262111890/customerClients/9262111890')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/customerClients/9262111890',
  client_customer: 'customers/9262111890',
  hidden: false,
  level: 0,
})
```
