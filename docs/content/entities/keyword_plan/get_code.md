---
title: Get KeywordPlan
order: 2.1
type: get_code
entity: KeywordPlan
---

```javascript
// Getting the entity
let result = await customer.keywordPlans.get('customers/9262111890/keywordPlans/115113466')
```

```javascript
// Example result
;({
  forecast_period: { date_interval: 4 },
  id: 115113466,
  name: 'My keyword plan',
  resource_name: 'customers/9262111890/keywordPlans/115113466',
})
```
