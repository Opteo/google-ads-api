---
title: Get AdGroupCriterionLabel
order: 2
type: get
entity: AdGroupCriterionLabel
---

### Get an AdGroupCriterionLabel

The `customer.adGroupCriterionLabels.get(resource_name)` method returns the AdGroupCriterionLabel identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that AdGroupCriterionLabel

#### Returns

Returns that AdGroupCriterionLabel as an object.

```javascript
// Getting the entity
let result = await customer.adGroupCriterionLabels.get('customers/1234567890/adGroupCriterionLabels/123123123')
```

```javascript

// Example result
(// Todo: add example get() return here)

```
