---
type: list_code
entity: MobileAppCategoryConstant
title: List MobileAppCategoryConstant
order: 3.1
---

```javascript
// Listing all the mobileAppCategoryConstants in the account
let result = await customer.mobileAppCategoryConstants.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.mobileAppCategoryConstants.list({
  constraints: [
    {
      key: 'mobile_app_category_constant.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'mobile_app_category_constant.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    mobile_app_category_constant: {
      resource_name: 'mobileAppCategoryConstants/60559',
      id: 60559,
      name: 'Literary Magazines & Journals',
    },
  },
]
```
