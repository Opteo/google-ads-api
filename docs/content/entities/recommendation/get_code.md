---
title: Get Recommendation
order: 2.1
type: get_code
entity: Recommendation
---

```javascript
// Getting the entity
let result = await customer.recommendations.get(
  'customers/3827277046/recommendations/MTk5MDY3NzIzLTE2My0xNTg1NzI5MTA1MDAwLSsyMDgxNjIwOTQ1LTc3MDU3MzY0ODcyLTEyMjQ0NDA0MTU3NDEyNjU0MDg'
)
```

```javascript
// Example result
;({
  ad_group: 'customers/3827277046/adGroups/77057364872',
  campaign: 'customers/3827277046/campaigns/2081620945',
  campaign_budget: 'customers/3827277046/campaignBudgets/6449346159',
  dismissed: false,
  impact: {
    base_metrics: { clicks: 1, cost_micros: 7730000, impressions: 2 },
    potential_metrics: { clicks: 1, conversions: 0.3, cost_micros: 7730000, impressions: 15 },
  },
  keyword_recommendation: { keyword: { match_type: 3, text: 'google adwords performance report' } },
  resource_name:
    'customers/3827277046/recommendations/MTk5MDY3NzIzLTE2My0xNTg1NzI5MTA1MDAwLSsyMDgxNjIwOTQ1LTc3MDU3MzY0ODcyLTEyMjQ0NDA0MTU3NDEyNjU0MDg',
  type: 3,
})
```
