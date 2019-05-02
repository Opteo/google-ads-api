---
title: Get Recommendation
order: 2
type: get
entity: Recommendation
---

### Get a Recommendation

The `customer.recommendations.get(resource_name)` method returns the Recommendation identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that Recommendation

#### Returns

Returns that Recommendation as an object.

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
