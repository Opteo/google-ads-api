---
title: Create AccountBudgetProposal
order: 4
type: create
entity: AccountBudgetProposal
---

This section describes how to create a AccountBudgetProposal.

```javascript
// Creating the entity

const account_budget_proposal = {
    // Your AccountBudgetProposal here, without immutable fields such as resource_name
}

const results = await customer.accountBudgetProposals.create(account_budget_proposal)

console.log(results) // ['customers/3827277046/accountBudgetProposals/265265547']
```