---
title: Get CustomerNegativeCriterion
order: 2.1
type: get_code
entity: CustomerNegativeCriterion
---

```javascript
// Getting the entity
let result = await customer.customerNegativeCriteria.get('customers/3827277046/customerNegativeCriteria/297329731575')
```

```javascript
// Example result
;({
  id: 297329731575,
  mobile_app_category: { mobile_app_category_constant: 'mobileAppCategoryConstants/60506' },
  resource_name: 'customers/3827277046/customerNegativeCriteria/297329731575',
  type: 4,
})
```
