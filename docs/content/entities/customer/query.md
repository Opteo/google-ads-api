---
title: Query
order: 3
type: query
entity: Customer 
---

### Query

The `customer.query(gaql_string)` method takes an SQL-like string and returns the queried rows. For more information about how and when to use this method, see the [reporting section](/#using-gaql).

#### Arguments

- ##### gaql_string *string, required* 
    The SQL-like string.
   

#### Returns

An array of objects, each object containing the keys requested in the query.
