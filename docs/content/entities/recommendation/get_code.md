---
title: Get Recommendation
order: 2.1
type: get_code
entity: Recommendation
---

```javascript
// Getting the entity
let result = await customer.recommendations.get(
  'customers/3827277046/recommendations/MTk5MDY3NzIzLTE2My0xNTk1MTg1NjIwMDAwLSsyMDgxNjIwOTQ4LTc3MDU3MzYzMjcyLTIyNzkzMTg2Nzk5NTk5NTgxOTU'
)
```

```javascript
// Example result
;({
  ad_group: 'customers/3827277046/adGroups/77057363272',
  campaign: 'customers/3827277046/campaigns/2081620948',
  campaign_budget: 'customers/3827277046/campaignBudgets/6449346162',
  dismissed: false,
  impact: {
    base_metrics: { clicks: 2, cost_micros: 20460000, impressions: 12 },
    potential_metrics: { clicks: 4, conversions: 0.05, cost_micros: 36006832, impressions: 110 },
  },
  keyword_recommendation: {
    keyword: { match_type: 2, text: 'google adwords management' },
    recommended_cpc_bid_micros: 9600000,
  },
  resource_name:
    'customers/3827277046/recommendations/MTk5MDY3NzIzLTE2My0xNTk1MTg1NjIwMDAwLSsyMDgxNjIwOTQ4LTc3MDU3MzYzMjcyLTIyNzkzMTg2Nzk5NTk5NTgxOTU',
  type: 3,
})
```
