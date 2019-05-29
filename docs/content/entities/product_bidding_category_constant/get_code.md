---
title: Get ProductBiddingCategoryConstant
order: 2.1
type: get_code
entity: ProductBiddingCategoryConstant
---

```javascript
// Getting the entity
let result = await customer.productBiddingCategoryConstants.get('productBiddingCategoryConstants/AU~LEVEL3~55')
```

```javascript
// Example result
;({
  country_code: 'AU',
  id: 55,
  language_code: 'en',
  level: 4,
  localized_name: 'Musical Instrument & Orchestra Accessories',
  product_bidding_category_constant_parent: 'productBiddingCategoryConstants/AU~LEVEL2~5710',
  resource_name: 'productBiddingCategoryConstants/AU~LEVEL3~55',
  status: 2,
})
```
