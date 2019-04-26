---
title: Create KeywordPlanAdGroup
order: 4
type: create
entity: KeywordPlanAdGroup
---

### Create KeywordPlanAdGroup

This section describes how to create a KeywordPlanAdGroup.

```javascript
// Creating the entity

const keyword_plan_ad_group = {
  // Your KeywordPlanAdGroup here, without immutable fields such as resource_name
}

const result = await customer.keywordPlanAdGroups.create(keyword_plan_ad_group)
```

```javascript
// Example result
;['customers/1234567890/keywordPlanAdGroups/123123123']
```
