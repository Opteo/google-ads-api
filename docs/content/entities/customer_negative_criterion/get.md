---
title: Get CustomerNegativeCriterion
order: 2
type: get
entity: CustomerNegativeCriterion
---

### Get CustomerNegativeCriterion

The `customer.customerNegativeCriteria.get()` method returns all fields for one CustomerNegativeCriterion, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

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
