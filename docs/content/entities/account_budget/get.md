---
title: Get AccountBudget
order: 2
type: get
entity: AccountBudget
---

The `customer.accountBudgets.get()` method returns all fields for one AccountBudget, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.accountBudgets.get('customers/3827277046/accountBudgets/295854560')

// Here's what the result might look like
result ===
    {
        resource_name: 'customers/3827277046/accountBudgets/295854560',
        adjusted_spending_limit_type: 2,
        amount_served_micros: 95547060000,
        approved_end_time_type: 3,
        approved_spending_limit_type: 2,
        approved_start_date_time: '2017-01-01 12:22:14',
        billing_setup: 'customers/3827277046/billingSetups/295854200',
        id: 295854560,
        name: '',
        proposed_end_time_type: 3,
        proposed_spending_limit_type: 2,
        proposed_start_date_time: '2017-01-01 12:22:14',
        status: 3,
        total_adjustments_micros: 843320000,
    }
```
