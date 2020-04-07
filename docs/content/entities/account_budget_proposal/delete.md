---
title: Delete AccountBudgetProposal 
order: 6
type: delete
entity: AccountBudgetProposal 
---

### Delete an AccountBudgetProposal 

The `customer.accountBudgetProposals.delete(resource_name)` sets the `status` field of an AccountBudgetProposal to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

- ##### resource_name *required*
    The resource_name of that AccountBudgetProposal


#### Returns

_Nothing_