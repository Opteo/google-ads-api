---
title: Update KeywordPlan
order: 5
type: update
entity: KeywordPlan
---

### Update KeywordPlan

This section describes how to update a KeywordPlan.

```javascript
// Updating the entity

const keyword_plan = {
  resource_name: 'customers/3827277046/keywordPlans/4739396', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.keywordPlans.update(keyword_plan)
```

```javascript
// Example result
;['customers/3827277046/keywordPlans/4739396']
```
