---
title: Get CampaignBudget
order: 2
type: get
entity: CampaignBudget
---

### Get a CampaignBudget

The `customer.campaignBudgets.get(resource_name)` method returns the CampaignBudget identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that CampaignBudget

#### Returns

Returns that CampaignBudget as an object.

```javascript
// Getting the entity
let result = await customer.campaignBudgets.get('customers/9262111890/campaignBudgets/1624493702')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/campaignBudgets/1624493702',
  amount_micros: 12000000,
  delivery_method: 2,
  explicitly_shared: false,
  has_recommended_budget: false,
  id: 1624493702,
  name: 'My campaign budget',
  period: 2,
  reference_count: 0,
  status: 3,
  type: 2,
})
```
