---
title: Get CustomerNegativeCriterion
order: 2.1
type: get_code
entity: CustomerNegativeCriterion
---

```javascript
// Getting the entity
let result = await customer.customerNegativeCriteria.get('customers/3827277046/customerNegativeCriteria/61276056204')
```

```javascript
// Example result
;({
  id: 61276056204,
  mobile_application: {
    app_id: '2-com.duolingo',
    name: 'Mobile App: Duolingo: Learn Languages Free (Google Play), by Duolingo',
  },
  resource_name: 'customers/3827277046/customerNegativeCriteria/61276056204',
  type: 5,
})
```
