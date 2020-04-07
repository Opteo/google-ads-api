---
order: 3.5
type: manual
entity: reporting
title: Using Report Stream
---

### Using Report Stream

The `customer.streamReport()` method is equivalent to customer.report(), except that it returns an async generator that you can use to access rows of data as they come back from the API.

Unlike `report()`, `streamReport()` does not support the page_size argument.

The main advantage of `streamReport` is performance. Not only are you able to get rows before the entire set has finished downloading, but the total time to finish the request will be shorter, especially for large requests (10,000+ rows).

Unfortunately, Google has hardwired the stream's chunk size to 10,000 rows, so there is no benefit to streaming for smaller requests. We're working with them to find a solution.

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
})

for await (let item of generator) {
    // process each SearchTermView
}

```

For full infomation on the arguments of `customer.report()`, see the [customer core resource](/#report).

Every core resource also has `get()` and `list()` methods, which offer a convenient way to select every attribute of a resource. This can be quite valuable since GAQL does not support `SELECT *`. See the [campaign](/#get-campaign) core resource for an example.

