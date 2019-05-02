---
title: Get KeywordPlanCampaign
order: 2
type: get
entity: KeywordPlanCampaign
---

### Get a KeywordPlanCampaign

The `customer.keywordPlanCampaigns.get(resource_name)` method returns the KeywordPlanCampaign identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that KeywordPlanCampaign

#### Returns

Returns that KeywordPlanCampaign as an object.

```javascript
// Getting the entity
let result = await customer.keywordPlanCampaigns.get('customers/3827277046/keywordPlanCampaigns/4773388')
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/keywordPlanCampaigns/4773388',
  cpc_bid_micros: 5370000,
  geo_targets: [],
  id: 4773388,
  keyword_plan: 'customers/3827277046/keywordPlans/4739396',
  keyword_plan_network: 2,
  language_constants: [{ value: 'languageConstants/1000' }],
  name: 'My keyword plan campaign',
})
```
