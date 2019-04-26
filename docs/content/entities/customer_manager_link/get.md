---
title: Get CustomerManagerLink
order: 2
type: get
entity: CustomerManagerLink
---

### Get CustomerManagerLink

The `customer.customerManagerLinks.get()` method returns all fields for one CustomerManagerLink, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

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
