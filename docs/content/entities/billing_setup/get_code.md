---
title: Get BillingSetup
order: 2.1
type: get_code
entity: BillingSetup
---

```javascript
// Getting the entity
let result = await customer.billingSetups.get('customers/9262111890/billingSetups/465508048')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/billingSetups/465508048',
  end_time_type: 3,
  id: 465508048,
  start_date_time: '2018-07-23 15:51:33',
  status: 2,
})
```
