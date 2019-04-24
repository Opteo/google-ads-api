---
title: Get CampaignBudget
order: 2
type: get
entity: CampaignBudget
---

The `customer.campaignBudgets.get()` method returns all fields for one CampaignBudget, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.campaignBudgets.get('customers/9262111890/campaignBudgets/1536143460')

// Here's what the result might look like
result ===
    {
        resource_name: 'customers/9262111890/campaignBudgets/1536143460',
        amount_micros: 10000000,
        delivery_method: 2,
        explicitly_shared: false,
        has_recommended_budget: false,
        id: 1536143460,
        name: 'My campaign budget',
        period: 2,
        reference_count: 0,
        status: 3,
        type: 2,
    }
```
