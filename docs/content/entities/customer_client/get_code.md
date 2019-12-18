---
title: Get CustomerClient
order: 2.1
type: get_code
entity: CustomerClient
---

```javascript
// Getting the entity
let result = await customer.customerClients.get('customers/3827277046/customerClients/3827277046')
```

```javascript
// Example result
;({
  client_customer: 'customers/3827277046',
  hidden: false,
  level: 0,
  resource_name: 'customers/3827277046/customerClients/3827277046',
})
```
