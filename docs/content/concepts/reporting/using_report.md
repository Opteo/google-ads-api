---
order: 3.4
type: manual
entity: reporting
title: Using the Query Builder
---


### Using the query builder

The `customer.report()` method is a safer and more structured way to use GAQL. It is also more practical to use when your queries need to be built dynamically. If you are using typescript, it will give you handy autocomplete, too!

```javascript
const response = await customer.report({
    entity: 'ad_group', // The SELECT clause of your query
    attributes: ['ad_group.id', 'ad_group.name', 'ad_group.status'], // The attribute fields of your query
    metrics: ['metrics.clicks'], // The metric fields of your query
    segments: ['segments.date'], // The segment fields of your query
    constraints: { 'ad_group.status': enums.AdGroupStatus.ENABLED }, // The WHERE clause of your query
    from_date: '2019-01-01', // The DURING clause of your query if using a date constant.
    order_by: 'metrics.clicks', // the ORDER BY clause of your query
    sort_order: 'desc',
    limit: 5, // The LIMIT clause of your query.
})

```

For more infomation about `customer.report()`, see the [customer core resource](/#customer-report)

Every core resource also has `get()` and `list()` methods, which offer a convenient way to select every attribute of a resource. This can be quite valuable since GAQL does not support `SELECT *`. See the [campaign](/#get-campaign) core resource for an example.

