---
title: Get KeywordPlanAdGroup
order: 2.1
type: get_code
entity: KeywordPlanAdGroup
---

```javascript
// Getting the entity
let result = await customer.keywordPlanAdGroups.get('customers/9262111890/keywordPlanAdGroups/104819196')
```

```javascript
// Example result
;({
  cpc_bid_micros: 2500000,
  id: 104819196,
  keyword_plan_campaign: 'customers/9262111890/keywordPlanCampaigns/115088623',
  name: 'My keyword plan ad group',
  resource_name: 'customers/9262111890/keywordPlanAdGroups/104819196',
})
```
