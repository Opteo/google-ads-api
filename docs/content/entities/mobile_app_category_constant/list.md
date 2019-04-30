---
type: list
entity: MobileAppCategoryConstant
title: List MobileAppCategoryConstant
order: 3
---

### List all MobileAppCategoryConstant

This `customer.mobileAppCategoryConstants.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the mobileAppCategoryConstants in the account
let result = await customer.mobileAppCategoryConstants.list()

// Listing with constraints and a limited number of results
let result = await customer.mobileAppCategoryConstants.list({
  constraints: [
    {
      key: 'mobile_app_category_constant.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
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
