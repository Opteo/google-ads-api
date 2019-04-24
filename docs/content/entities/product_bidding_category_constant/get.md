---
title: Get ProductBiddingCategoryConstant
order: 2
type: get
entity: ProductBiddingCategoryConstant
---

The `customer.productBiddingCategoryConstants.get()` method returns all fields for one ProductBiddingCategoryConstant, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.productBiddingCategoryConstants.get('productBiddingCategoryConstants/AU~LEVEL1~1')

// Here's what the result might look like
result ===
    {
        resource_name: 'productBiddingCategoryConstants/AU~LEVEL1~1',
        country_code: 'AU',
        id: 1,
        language_code: 'en',
        level: 2,
        localized_name: 'Animals & Pet Supplies',
        status: 2,
    }
```
