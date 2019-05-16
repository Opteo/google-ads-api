---
order: 5.3
type: manual
entity: enums
title: Handling Errors
---

### Handling Errors with Enums

To handle errors from the Google Ads API, the best approach is to use the provided error enums, available with the `enums` import. A full list of error types can be found in the [Google Ads API reference](https://developers.google.com/google-ads/api/reference/rpc/google.ads.googleads.v1.errors).

```javascript
import { enums } from 'google-ads-api'

try {
    const campaigns = await customer.report({
        entity: 'campaign',
        attributes: ['ad_group_criterion.keyword.text'],
    })
} catch (err) {
    if (err.code.queryError === enums.QueryError.PROHIBITED_RESOURCE_TYPE_IN_SELECT_CLAUSE) {
        // Handle error case..
    }

    // Besides `code`, errors have other useful metadata:
    console.log(err.message) // "Cannot select fields from the following resource.."
    console.log(err.location) // "ad_group_criterion.keyword.text"
    console.log(err.request_id) // "5Tzsyp_M_9F7oHl_EZh8Ow", useful when discussing issues with Google support
    console.log(err.request) // Request protocol buffer body in readable format, useful for debugging
    console.log(err.failure) // gRPC GoogleAdsFailure instance
}
```
