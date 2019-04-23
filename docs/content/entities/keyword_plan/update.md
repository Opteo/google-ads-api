---
title: Update KeywordPlan
order: 5
type: update
entity: KeywordPlan
---

This section describes how to update a KeywordPlan.

```javascript
// Updating the entity

const keyword_plan = {
    resource_name: 'customers/3827277046/keywordPlans/4739396', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.keywordPlans.update(keyword_plan)

console.log(results) // ['customers/3827277046/keywordPlans/4739396']
```
