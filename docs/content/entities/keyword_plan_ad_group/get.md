---
title: Get KeywordPlanAdGroup
order: 2
type: get
entity: KeywordPlanAdGroup
---

The `customer.keywordPlanAdGroups.get()` method returns all fields for one KeywordPlanAdGroup, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript


// Getting the entity
let result = await customer.keywordPlanAdGroups.get('customers/1234567890/keywordPlanAdGroups/123123123')


// Here's what the result might look like
result === // Todo: add example get() return here

```
