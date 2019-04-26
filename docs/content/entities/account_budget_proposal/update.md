---
title: Update AccountBudgetProposal
order: 5
type: update
entity: AccountBudgetProposal
---

### Update AccountBudgetProposal

This section describes how to update a AccountBudgetProposal.

```javascript
// Updating the entity

const account_budget_proposal = {
  resource_name: 'customers/3827277046/accountBudgetProposals/265265547', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.accountBudgetProposals.update(account_budget_proposal)
```

```javascript
// Example result
;['customers/3827277046/accountBudgetProposals/265265547']
```
