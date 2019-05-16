---
title: Report
order: 4
type: report
entity: Customer 
---

### Report

The `customer.report()` method is very similar to [customer.query](/#query), except that it takes a query-building object as an argument. For more information about why this is a good idea, see the [reporting section](/#using-the-query-builder)

#### Arguments

- ##### query *object*
    An object of the form:
    - ##### entity *string, required*
        The resource to query. All core resources can be queried, as well as the [views defined in the official docs](https://developers.google.com/google-ads/api/docs/fields/ad_group_audience_view). Note that this field expects resources in `snake_case`.
    - ##### attributes *array, optional*
        The attributes to query. Check the core resource on this page to see which attributes are available.
    - ##### metrics *array, optional*
        The metrics to query.  
    - ##### segments *array, optional*
        The segments to split your metrics by. Note that segments will increase your number of result rows, and that attributes will simply be repeated.
    - ##### constraints *array/object, optional*
        TODO WRITE THIS
    - ##### date_constant *string, optional*
        One of the date constants defined in the [query grammar](https://developers.google.com/google-ads/api/docs/query/grammar), such as `LAST_30_DAYS`
    - ##### from_date *string, optional*
        The start date for any metrics in your query.
    - ##### to_date *string, optional*
        The end date for any metrics in your query. Defaults to today.
    - ##### limit *number, optional*
        The number of rows to return. Useful when used with `order_by`.
    - ##### order_by *string, optional*
        The field to order your results by.
    - ##### sort_order *string, optional*
        The order direction. Either `DESC` or `ASC`
    - ##### page_size *number, optional*
        This library handles paging automatically. If the number of returned rows is larger than the page size, it will paginate through result sets and return all of the results when done. Defaults to `20,000`.
   
#### Returns

An array of objects, each object containing the keys requested in the query.

