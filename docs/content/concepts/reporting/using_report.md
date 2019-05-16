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
    entity: 'ad_group', 
    attributes: ['ad_group.id', 'ad_group.name', 'ad_group.status'], 
    metrics: ['metrics.clicks'],
    segments: ['segments.date'], 
    constraints: { 'ad_group.status': enums.AdGroupStatus.ENABLED }, 
    from_date: '2019-01-01', 
    order_by: 'metrics.clicks', 
    sort_order: 'desc',
    limit: 5, 
})

```

For full infomation on the arguments of `customer.report()`, see the [customer core resource](/#report)

Every core resource also has `get()` and `list()` methods, which offer a convenient way to select every attribute of a resource. This can be quite valuable since GAQL does not support `SELECT *`. See the [campaign](/#get-campaign) core resource for an example.

