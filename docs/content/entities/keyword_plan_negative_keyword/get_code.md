---
title: Get KeywordPlanNegativeKeyword
order: 2.1
type: get_code
entity: KeywordPlanNegativeKeyword
---

```javascript
// Getting the entity
let result = await customer.keywordPlanNegativeKeywords.get('customers/9262111890/keywordPlanNegativeKeywords/13119148')
```

```javascript
// Example result
;({
  id: 13119148,
  keyword_plan_campaign: 'customers/9262111890/keywordPlanCampaigns/115088623',
  match_type: 4,
  resource_name: 'customers/9262111890/keywordPlanNegativeKeywords/13119148',
  text: 'moon walk',
})
```
