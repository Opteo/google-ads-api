---
title: Get Recommendation
order: 2.1
type: get_code
entity: Recommendation
---

```javascript
// Getting the entity
let result = await customer.recommendations.get(
  'customers/3827277046/recommendations/MTk5MDY3NzIzLTE2My0xNTYwNDE4MjY4MDAwLSs5NTQzOTUxNzgtNDcwNzU0NDMxMzMtMTAxMzI0MDgzMTkwMTA2MjIwNDI'
)
```

```javascript
// Example result
;({
  ad_group: 'customers/3827277046/adGroups/47075443133',
  campaign: 'customers/3827277046/campaigns/954395178',
  campaign_budget: 'customers/3827277046/campaignBudgets/1234781036',
  dismissed: false,
  resource_name:
    'customers/3827277046/recommendations/MTk5MDY3NzIzLTE2My0xNTYwNDE4MjY4MDAwLSs5NTQzOTUxNzgtNDcwNzU0NDMxMzMtMTAxMzI0MDgzMTkwMTA2MjIwNDI',
  type: 3,
})
```
