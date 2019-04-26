---
title: Get Recommendation
order: 2
type: get
entity: Recommendation
---

### Get Recommendation

The `customer.recommendations.get()` method returns all fields for one Recommendation, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.recommendations.get(
  'customers/3827277046/recommendations/MTk5MDY3NzIzLTEzNi0xNTU1OTYzMjEyNTk5LSs5NTMzNjEwMzc'
)
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/recommendations/MTk5MDY3NzIzLTEzNi0xNTU1OTYzMjEyNTk5LSs5NTMzNjEwMzc',
  campaign: 'customers/3827277046/campaigns/953361037',
  campaign_budget: 'customers/3827277046/campaignBudgets/1234768991',
  dismissed: false,
  type: 5,
})
```
