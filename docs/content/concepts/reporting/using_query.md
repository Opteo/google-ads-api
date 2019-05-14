---
order: 3.3
type: manual
entity: reporting
title: Reporting using query()
---


### Using `customer.query()`

The `customer.query()` method allows you to query customer data using GAQL ([Google Ads Query Language](https://developers.google.com/google-ads/api/docs/query/overview)) query strings. This is great for prototyping and getting results out quickly.

```javascript
const campaigns = await customer.query(`
    SELECT 
      campaign.id, campaign.name, campaign.status
    FROM 
      campaign
    ORDER BY campaign.id
`)

const campaigns = await customer.query(`
    SELECT 
        campaign.id, campaign.name, campaign.status, 
        metrics.impressions, metrics.cost
    FROM 
      campaign
    WHERE 
      campaign.status = 'PAUSED' 
      AND metrics.impressions > 5
    ORDER BY campaign.id
`)
```

Fore more infomation about `customer.query()`, see the [customer core resource](/#customer-query)
