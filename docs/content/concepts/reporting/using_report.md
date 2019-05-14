---
order: 3.4
type: manual
entity: reporting
title: Reporting using report()
---


### Using `customer.report()`

The `customer.report()` method is a safer and more structured way to use GAQL. It is also more practical to use when your queries need to be built dynamically. If you are using typescript, it will give you handy autocomplete, too!

```javascript
const response = await customer.report({
    entity: 'ad_group', // The SELECT clause of your query
    attributes: ['ad_group.id', 'ad_group.name', 'ad_group.status'], // The attribute fields of your query
    metrics: ['metrics.clicks'], // The metric fields of your query
    segments: ['segments.date'], // The segment fields of your query
    constraints: ['metrics.impressions > 10'], // The WHERE clause of your query
    date_constant: 'LAST_30_DAYS', // The DURING clause of your query if using a date constant.
    order_by: 'metrics.clicks', // the ORDER BY clause of your query
    sort_order: 'desc',
    limit: 5, // The LIMIT clause of your query.
})

const response = await customer.report({
    // the contraints array can come in a few different forms:

    // raw strings, which will be concatenated with "AND"
    constraints: ['campaign.status = "PAUSED"'],

    // objects with a single value, which is short hand for "="
    constraints: [
        {
            'campaign.status': enums.CampaignStatus.PAUSED,
        },
    ],

    // objects with an array value, which is short hand for "IN"
    constraints: [
        {
            'campaign.status': [enums.CampaignStatus.PAUSED, enums.CampaignStatus.ENABLED],
        },
    ],

    // a full { key, op, val } object (most verbose option)
    constraints: [
        {
            key: 'campaign.status',
            op: ' NOT_IN ',
            val: enums.CampaignStatus.REMOVED,
        },
    ],
})

const response = await customer.report({
    // If you need to select a specific date range, use from_date and to_date
    from_date: '2019-01-01',
    to_date: '2019-02-15',
})
```
