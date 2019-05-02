---
title: Create AccountBudgetProposal
order: 4.1
type: create_code
entity: AccountBudgetProposal
---

```javascript
// Creating the entity

const account_budget_proposal = {
  // Your AccountBudgetProposal here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.accountBudgetProposals.create(account_budget_proposal)

// Passing in an array of entities to create, validating only
const result = await customer.accountBudgetProposals.create([account_budget_proposal, other_account_budget_proposal], {
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
