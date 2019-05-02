---
title: Get CustomerClient
order: 2.1
type: get_code
entity: CustomerClient
---

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
