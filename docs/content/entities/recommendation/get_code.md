---
title: Get Recommendation
order: 2.1
type: get_code
entity: Recommendation
---

```javascript
// Getting the entity
let result = await customer.recommendations.get(
  'customers/3827277046/recommendations/MTk5MDY3NzIzLTExNS0xNTYyNTQwMjkyOTMzLSsyMDE1OTIyNDA1'
)
```

```javascript
// Example result
;({
  campaign: 'customers/3827277046/campaigns/2015922405',
  campaign_budget: 'customers/3827277046/campaignBudgets/2079279762',
  dismissed: true,
  resource_name: 'customers/3827277046/recommendations/MTk5MDY3NzIzLTExNS0xNTYyNTQwMjkyOTMzLSsyMDE1OTIyNDA1',
  type: 8,
})
```
