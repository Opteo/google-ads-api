---
order: 3.5
type: manual
entity: reporting
title: Using Stream Report
---

### Using Stream Report

The `customer.streamReport()` accepts very similar arguments to `customer.report()`. `page_size` is no longer an optional argument. This is because Googles new streaming method uses chunks rather than pages. Chunk sizes are currently defaulted to 10,000 rows. Hopefully this will be adjustable soon.

This method currently doesn't cache results

The main advantage of `streamReport` is performance. When getting results with a size greater than 1 chunk (10,000 rows), it will fetch those results quicker.

```javascript
interface SearchTermView {
    search_term_view: {
        resource_name: string
        search_term: string
    }
    metrics: {
        clicks: number
    }
}

const generator = customer.reportStream<SearchTermView>({
    entity: 'search_term_view',
    metrics: ['metrics.clicks'],
    attributes: ['search_term_view.search_term'],
    order_by: 'metrics.clicks',
    sort_order: 'desc',
    limit: 50,
})

let count = 0

for await (let item of generator) {
    // process each SearchTermView
}

```

For full infomation on the arguments of `customer.report()`, see the [customer core resource](/#report).

Every core resource also has `get()` and `list()` methods, which offer a convenient way to select every attribute of a resource. This can be quite valuable since GAQL does not support `SELECT *`. See the [campaign](/#get-campaign) core resource for an example.

