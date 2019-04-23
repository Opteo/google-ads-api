---
title: Get AccountBudgetProposal
order: 2
type: get
entity: AccountBudgetProposal
---

The `customer.accountBudgetProposals.get()` method returns all fields for one AccountBudgetProposal, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.accountBudgetProposals.get('customers/3827277046/accountBudgetProposals/265265547')

// Here's what the result might look like
result ===
    {
        resource_name: 'customers/3827277046/accountBudgetProposals/265265547',
        account_budget: 'customers/3827277046/accountBudgets/295854560',
        approval_date_time: '2017-01-01 12:25:18',
        approved_end_time_type: 3,
        approved_spending_limit_type: 2,
        approved_start_date_time: '2017-01-01 12:22:14',
        billing_setup: 'customers/3827277046/billingSetups/295854200',
        creation_date_time: '2017-01-01 12:25:18',
        id: 265265547,
        proposed_end_time_type: 3,
        proposed_name: '',
        proposed_spending_limit_type: 2,
        proposed_start_date_time: '2017-01-01 12:22:14',
        status: 4,
    }
```
