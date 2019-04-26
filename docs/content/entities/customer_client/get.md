---
title: Get CustomerClient
order: 2
type: get
entity: CustomerClient
---

### Get CustomerClient

The `customer.customerClients.get()` method returns all fields for one CustomerClient, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

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
