---
title: Create KeywordPlan
order: 4
type: create
entity: KeywordPlan
---

### Create KeywordPlan

This section describes how to create a KeywordPlan.

```javascript
// Creating the entity

const keyword_plan = {
  // Your KeywordPlan here, without immutable fields such as resource_name
}

const result = await customer.keywordPlans.create(keyword_plan)
```

```javascript
// Example result
;['customers/3827277046/keywordPlans/4739396']
```
