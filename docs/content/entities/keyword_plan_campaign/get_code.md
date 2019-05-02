---
title: Get KeywordPlanCampaign
order: 2.1
type: get_code
entity: KeywordPlanCampaign
---

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
