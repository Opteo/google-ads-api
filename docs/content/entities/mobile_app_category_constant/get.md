---
title: Get MobileAppCategoryConstant
order: 2
type: get
entity: MobileAppCategoryConstant
---

### Get a MobileAppCategoryConstant

The `customer.mobileAppCategoryConstants.get(resource_name)` method returns the MobileAppCategoryConstant identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that MobileAppCategoryConstant

#### Returns

Returns that MobileAppCategoryConstant as an object.

```javascript
// Getting the entity
let result = await customer.mobileAppCategoryConstants.get('mobileAppCategoryConstants/60559')
```

```javascript
// Example result
;({ resource_name: 'mobileAppCategoryConstants/60559', id: 60559, name: 'Literary Magazines & Journals' })
```
