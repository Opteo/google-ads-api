---
title: Get BillingSetup
order: 2
type: get
entity: BillingSetup
---

### Get BillingSetup

The `customer.billingSetups.get()` method returns all fields for one BillingSetup, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

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
