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
  client_customer: 'customers/9262111890',
  currency_code: 'EUR',
  descriptive_name: 'My customer client',
  hidden: false,
  id: 9262111890,
  level: 0,
  manager: false,
  resource_name: 'customers/9262111890/customerClients/9262111890',
  test_account: true,
  time_zone: 'Europe/London',
})
```
