---
title: Update AccountBudgetProposal
order: 5
type: update
entity: AccountBudgetProposal
---

This section describes how to update a AccountBudgetProposal.

```javascript
// Updating the entity

const account_budget_proposal = {
    resource_name: 'customers/3827277046/accountBudgetProposals/265265547', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.accountBudgetProposals.update(account_budget_proposal)

console.log(results) // ['customers/3827277046/accountBudgetProposals/265265547']
```
