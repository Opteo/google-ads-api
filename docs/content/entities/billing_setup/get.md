---
title: Get BillingSetup
order: 2
type: get
entity: BillingSetup
---

### Get a BillingSetup

The `customer.billingSetups.get(resource_name)` method returns the BillingSetup identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that BillingSetup

#### Returns

Returns that BillingSetup as an object.

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
