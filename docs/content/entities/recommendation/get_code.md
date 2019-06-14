---
title: Get Recommendation
order: 2.1
type: get_code
entity: Recommendation
---

```javascript
// Getting the entity
let result = await customer.recommendations.get(
  'customers/3827277046/recommendations/MTk5MDY3NzIzLTE2My0xNTU5MDYwMjA2MDAwLSs5NTQ0NjA3MDEtNTEwMzQ0MTkyODctMTU1ODk1OTI3NTQzMjA5ODY4NzE'
)
```

```javascript
// Example result
;({
  ad_group: 'customers/3827277046/adGroups/51034419287',
  campaign: 'customers/3827277046/campaigns/954460701',
  campaign_budget: 'customers/3827277046/campaignBudgets/1234926420',
  dismissed: false,
  resource_name:
    'customers/3827277046/recommendations/MTk5MDY3NzIzLTE2My0xNTU5MDYwMjA2MDAwLSs5NTQ0NjA3MDEtNTEwMzQ0MTkyODctMTU1ODk1OTI3NTQzMjA5ODY4NzE',
  type: 3,
})
```
