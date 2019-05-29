---
title: Get CampaignBudget
order: 2.1
type: get_code
entity: CampaignBudget
---

```javascript
// Getting the entity
let result = await customer.campaignBudgets.get('customers/9262111890/campaignBudgets/1624493702')
```

```javascript
// Example result
;({
  amount_micros: 12000000,
  delivery_method: 2,
  explicitly_shared: false,
  has_recommended_budget: false,
  id: 1624493702,
  name: 'My campaign budget',
  period: 2,
  reference_count: 0,
  resource_name: 'customers/9262111890/campaignBudgets/1624493702',
  status: 3,
  type: 2,
})
```
