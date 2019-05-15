---
order: 3.3
type: manual
entity: reporting
title: Using GAQL
---


### Using GAQL

The `customer.query()` method allows you to query customer data using GAQL ([Google Ads Query Language](https://developers.google.com/google-ads/api/docs/query/overview)) query strings. This is great for prototyping and getting results out quickly.

GAQL looks like SQL, but it is not SQL. Key differences include:
- Very limited [grammar](https://developers.google.com/google-ads/api/docs/query/grammar) (for example, no `OR` in constraints)
- Implicit joins when selecting `selectableWith` fields. These aren't always intuitive.

```javascript
// Basic query
const campaigns = await customer.query(`
    SELECT 
      campaign.name, campaign.status
    FROM 
      campaign
`)

// More complex query
const keyword_texts = await customer.query(`
    SELECT 
        keyword_view.resource_name,
        ad_group_criterion.keyword.text <-- This is an implicit join on ad_group_criterion
    FROM 
      keyword_view                      <-- Main resource
    WHERE 
      campaign.status = 'PAUSED'        <-- This is another implicit join on campaign
      AND metrics.impressions > 5
    ORDER BY campaign.impressions
    LIMIT 20
`)
```

For more infomation about `customer.query()`, see the [customer core resource](/#customer-query)
