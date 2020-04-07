---
order: 1.1
type: object_code
entity: Recommendation
title: Recommendation
---

```javascript
// Example Recommendation
const recommendation = {
  ad_group: 'customers/3827277046/adGroups/77057366352',
  campaign: 'customers/3827277046/campaigns/2081620945',
  campaign_budget: 'customers/3827277046/campaignBudgets/6449346159',
  dismissed: false,
  impact: {
    base_metrics: { clicks: 7, cost_micros: 48580000, impressions: 83 },
    potential_metrics: { clicks: 8, cost_micros: 56737345, impressions: 161 },
  },
  keyword_recommendation: { keyword: { match_type: 3, text: 'google ad manager account' } },
  resource_name:
    'customers/3827277046/recommendations/MTk5MDY3NzIzLTE2My0xNTc2NjAyNzAzMDAwLSsyMDgxNjIwOTQ1LTc3MDU3MzY2MzUyLTUyMjUxMDM0NTMzMDAxNzk2NzQ',
  type: 3,
}
```
