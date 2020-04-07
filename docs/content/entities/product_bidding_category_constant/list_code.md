---
type: list_code
entity: ProductBiddingCategoryConstant
title: List ProductBiddingCategoryConstant
order: 3.1
---

```javascript
// Listing all the productBiddingCategoryConstants in the account
let result = await customer.productBiddingCategoryConstants.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.productBiddingCategoryConstants.list({
  constraints: [
    {
      key: 'product_bidding_category_constant.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'product_bidding_category_constant.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    product_bidding_category_constant: {
      country_code: 'AU',
      id: 55,
      language_code: 'en',
      level: 4,
      localized_name: 'Musical Instrument & Orchestra Accessories',
      product_bidding_category_constant_parent: 'productBiddingCategoryConstants/AU~LEVEL2~5710',
      resource_name: 'productBiddingCategoryConstants/AU~LEVEL3~55',
      status: 2,
    },
  },
]
```
