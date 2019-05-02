---
title: Get AccountBudget
order: 2
type: get
entity: AccountBudget
---

### Get an AccountBudget

The `customer.accountBudgets.get(resource_name)` method returns the AccountBudget identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that AccountBudget

#### Returns

Returns that AccountBudget as an object.
