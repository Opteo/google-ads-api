---
title: Get KeywordPlanNegativeKeyword
order: 2
type: get
entity: KeywordPlanNegativeKeyword
---

### Get a KeywordPlanNegativeKeyword

The `customer.keywordPlanNegativeKeywords.get(resource_name)` method returns the KeywordPlanNegativeKeyword identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that KeywordPlanNegativeKeyword

#### Returns

Returns that KeywordPlanNegativeKeyword as an object.

```javascript
// Getting the entity
let result = await customer.keywordPlanNegativeKeywords.get(
  'customers/1234567890/keywordPlanNegativeKeywords/123123123'
)
```

```javascript

// Example result
(// Todo: add example get() return here)

```
