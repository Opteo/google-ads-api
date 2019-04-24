---
title: Get MobileAppCategoryConstant
order: 2
type: get
entity: MobileAppCategoryConstant
---

The `customer.mobileAppCategoryConstants.get()` method returns all fields for one MobileAppCategoryConstant, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.mobileAppCategoryConstants.get('customers/1234567890/mobileAppCategoryConstants/123123123')

// Here's what the result might look like
result === { resource_name: '', id: 0, name: '/' }
```
