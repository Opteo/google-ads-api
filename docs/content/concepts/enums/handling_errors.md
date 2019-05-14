---
order: 6.1
type: manual
entity: enums
title: Handling Errors
---

## Enums

### Handling Errors


To handle errors from the Google Ads API, the best approach is to use the provided error enums, available with the `enums` import. A full list of error types can be found in the [Google Ads API references](https://developers.google.com/google-ads/api/reference/rpc/google.ads.googleads.v1.errors).

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
}
```
