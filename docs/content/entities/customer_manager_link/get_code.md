---
title: Get CustomerManagerLink
order: 2.1
type: get_code
entity: CustomerManagerLink
---

```javascript
// Getting the entity
let result = await customer.customerManagerLinks.get('customers/9262111890/customerManagerLinks/6141549892~121665495')
```

```javascript
// Example result
;({
  manager_customer: 'customers/6141549892',
  manager_link_id: 121665495,
  resource_name: 'customers/9262111890/customerManagerLinks/6141549892~121665495',
  status: 2,
})
```
