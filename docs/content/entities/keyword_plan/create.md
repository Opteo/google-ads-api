---
title: Create KeywordPlan
order: 4
type: create
entity: KeywordPlan
---

This section describes how to create a KeywordPlan.

```javascript
// Creating the entity

const keyword_plan = {
    // Your KeywordPlan here, without immutable fields such as resource_name
}

const results = await customer.keywordPlans.create(keyword_plan)

console.log(results) // ['customers/3827277046/keywordPlans/4739396']
```
