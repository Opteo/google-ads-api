---
title: Create AccountBudgetProposal 
---

This section describes how to create a AccountBudgetProposal.



```javascript

// Creating the entity

const account_budget_proposal = {
    // Your AccountBudgetProposal here 
}

const results = await customer.accountBudgetProposals.create(account_budget_proposal)

console.log(results) // ['customers/1234567890/accountBudgetProposals/9765432177']

```