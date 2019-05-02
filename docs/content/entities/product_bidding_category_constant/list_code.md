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
      resource_name: 'productBiddingCategoryConstants/AU~LEVEL1~1',
      country_code: 'AU',
      id: 1,
      language_code: 'en',
      level: 2,
      localized_name: 'Animals & Pet Supplies',
      status: 2,
    },
  },
]
```
