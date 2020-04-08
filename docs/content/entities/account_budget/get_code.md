---
title: Get AccountBudget
order: 2.1
type: get_code
entity: AccountBudget
---

```javascript
// Getting the entity
let result = await customer.accountBudgets.get('customers/3827277046/accountBudgets/295854560')
```

```javascript
// Example result
;({
  adjusted_spending_limit_type: 2,
  amount_served_micros: 195261900000,
  approved_end_time_type: 3,
  approved_spending_limit_type: 2,
  approved_start_date_time: '2017-01-01 12:22:14',
  billing_setup: 'customers/3827277046/billingSetups/295854200',
  id: 295854560,
  name: '',
  proposed_end_time_type: 3,
  proposed_spending_limit_type: 2,
  proposed_start_date_time: '2017-01-01 12:22:14',
  resource_name: 'customers/3827277046/accountBudgets/295854560',
  status: 3,
  total_adjustments_micros: 1137220000,
})
```
