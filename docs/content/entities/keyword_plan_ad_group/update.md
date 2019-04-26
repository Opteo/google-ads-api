---
title: Update KeywordPlanAdGroup
order: 5
type: update
entity: KeywordPlanAdGroup
---

### Update KeywordPlanAdGroup

This section describes how to update a KeywordPlanAdGroup.

```javascript
// Updating the entity

const keyword_plan_ad_group = {
  resource_name: 'customers/1234567890/keywordPlanAdGroups/123123123', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.keywordPlanAdGroups.update(keyword_plan_ad_group)
```

```javascript
// Example result
;['customers/1234567890/keywordPlanAdGroups/123123123']
```
