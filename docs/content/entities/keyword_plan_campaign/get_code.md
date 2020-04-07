---
title: Get KeywordPlanCampaign
order: 2.1
type: get_code
entity: KeywordPlanCampaign
---

```javascript
// Getting the entity
let result = await customer.keywordPlanCampaigns.get('customers/9262111890/keywordPlanCampaigns/115088623')
```

```javascript
// Example result
;({
  cpc_bid_micros: 1000000,
  geo_targets: [{ geo_target_constant: 'geoTargetConstants/1021278' }],
  id: 115088623,
  keyword_plan: 'customers/9262111890/keywordPlans/115133472',
  keyword_plan_network: 2,
  language_constants: ['languageConstants/1000'],
  name: 'My keyword plan campaign',
  resource_name: 'customers/9262111890/keywordPlanCampaigns/115088623',
})
```
