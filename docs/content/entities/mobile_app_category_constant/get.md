---
title: Get MobileAppCategoryConstant
order: 2
type: get
entity: MobileAppCategoryConstant
---

### Get MobileAppCategoryConstant

The `customer.mobileAppCategoryConstants.get()` method returns all fields for one MobileAppCategoryConstant, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.mobileAppCategoryConstants.get('mobileAppCategoryConstants/60559')
```

```javascript
// Example result
;({ resource_name: 'mobileAppCategoryConstants/60559', id: 60559, name: 'Literary Magazines & Journals' })
```
