---
type: list
entity: AdGroupSimulation 
title: List AdGroupSimulation 
order: 3
---

### List every instance of AdGroupSimulation 


The `customer.adGroupSimulations.list()` returns all of the entities in the account, including `REMOVED` entities. It also returns all other resources that can be selected with each instance of AdGroupSimulation.

This method was designed for convenience and discovery. Internally, it uses the `customer.report()` method with all `attributes` fields included. For production code, we recommend using `customer.report()` with only the fields you need.


#### Arguments

- ##### options *optional*
    Object of the form `{ limit, order_by, constraints }`:
    - ##### limit *optional, number*
        Number of rows to return. Equivalent to the limit in `customer.report()`. Defaults to no limit.
    - ##### order_by *optional, string*
        The field to sort the returned rows by. Equivalent to the order_by in `customer.report()`. By default, no sorting is applied.
    - ##### constraints *optional, array/object*
        A constraints array or object. See the `customer.report()` documentation for details. By default, all entities are returned.


#### Returns

Returns an array of objects.
Each object has a `ad_group_simulation` property. Any other resources that can be selected with `ad_group_simulation` will also be added as properities.
