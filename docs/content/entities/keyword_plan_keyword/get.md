---
title: Get KeywordPlanKeyword
order: 2
type: get
entity: KeywordPlanKeyword
---

The `customer.keywordPlanKeywords.get()` method returns all fields for one KeywordPlanKeyword, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript


// Getting the entity
let result = await customer.keywordPlanKeywords.get('customers/1234567890/keywordPlanKeywords/123123123')


// Here's what the result might look like
result === // Todo: add example get() return here

```
