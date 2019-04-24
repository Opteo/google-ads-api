---
type: list
entity: ProductBiddingCategoryConstant
title: List ProductBiddingCategoryConstant
order: 3
---

This `customer.productBiddingCategoryConstants.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the productBiddingCategoryConstants in the account
let result = await customer.productBiddingCategoryConstants.list()

// Listing with constraints and a limited number of results
let result = await customer.productBiddingCategoryConstants.list({
    constraints: [
        {
            key: 'product_bidding_category_constant.some_field',
            op: '=',
            val: 'yellow submarine',
        },
    ],
    limit: 15,
})

// Here's what the result might look like
result ===
    [
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
