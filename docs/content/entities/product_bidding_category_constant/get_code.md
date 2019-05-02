---
title: Get ProductBiddingCategoryConstant
order: 2.1
type: get_code
entity: ProductBiddingCategoryConstant
---

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
