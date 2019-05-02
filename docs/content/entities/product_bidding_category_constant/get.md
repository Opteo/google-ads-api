---
title: Get ProductBiddingCategoryConstant
order: 2
type: get
entity: ProductBiddingCategoryConstant
---

### Get a ProductBiddingCategoryConstant

The `customer.productBiddingCategoryConstants.get(resource_name)` method returns the ProductBiddingCategoryConstant identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that ProductBiddingCategoryConstant

#### Returns

Returns that ProductBiddingCategoryConstant as an object.

```javascript
// Getting the entity
let result = await customer.productBiddingCategoryConstants.get('productBiddingCategoryConstants/AU~LEVEL1~1')
```

```javascript
// Example result
;({
  resource_name: 'productBiddingCategoryConstants/AU~LEVEL1~1',
  country_code: 'AU',
  id: 1,
  language_code: 'en',
  level: 2,
  localized_name: 'Animals & Pet Supplies',
  status: 2,
})
```
