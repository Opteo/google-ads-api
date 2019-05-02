---
title: Get CustomerNegativeCriterion
order: 2
type: get
entity: CustomerNegativeCriterion
---

### Get a CustomerNegativeCriterion

The `customer.customerNegativeCriteria.get(resource_name)` method returns the CustomerNegativeCriterion identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that CustomerNegativeCriterion

#### Returns

Returns that CustomerNegativeCriterion as an object.

```javascript
// Getting the entity
let result = await customer.customerNegativeCriteria.get('customers/3827277046/customerNegativeCriteria/1163177997')
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/customerNegativeCriteria/1163177997',
  content_label: { type: 2 },
  id: 1163177997,
  type: 22,
})
```
