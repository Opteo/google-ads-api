---
title: Update AccountBudgetProposal
order: 5.1
type: update_code
entity: AccountBudgetProposal
---

```javascript
// Updating the entity

const account_budget_proposal = {
  resource_name: 'customers/3827277046/accountBudgetProposals/265265547', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.accountBudgetProposals.update(account_budget_proposal)

// Passing in an array of entities to update, validating only
const result = await customer.accountBudgetProposals.update([account_budget_proposal, other_account_budget_proposal], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/accountBudgetProposals/265265547'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
