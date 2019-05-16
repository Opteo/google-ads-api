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
    err === ({
        code: {
            queryError: 48, // This code can be crosschecked with enums.QueryError
        },
        // This internal ID is useful when discussing issues with Google support
        request_id: 'S6ChEDbf5gXgRVAH5kKj_w', 
        // Sometimes, "location" will be used to highlight a missing or incorrect field
        location: '', 
        // The request object passed to Google's servers. Useful for debugging.
        request: { 
            customerId: '3827277046',
            query: 'SELECT ad_group_criterion.keyword.text FROM campaign',
            pageToken: '',
            pageSize: 10000,
            validateOnly: false 
        } 
    })
}
```
