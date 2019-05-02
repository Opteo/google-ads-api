---
type: list
entity: OperatingSystemVersionConstant
title: List OperatingSystemVersionConstant
order: 3
---

### List every instance of OperatingSystemVersionConstant

The `customer.operatingSystemVersionConstants.list()` returns all of the entities in the account, including `REMOVED` entities. It also returns all other resources that can be selected with each instance of OperatingSystemVersionConstant.

This method was designed for convenience and discovery. Internally, it uses the `customer.report()` method with all `attributes` fields included. For production code, we recommend using `customer.report()` with only the fields you need.

#### Arguments

- **`options`** (_optional_): Object of the form `{ limit, order_by, constraints }`:
  - **`limit`** (_optional, number_): Number of rows to return. Equivalent to the limit in `customer.report()`. Defaults to no limit.
  - **`order_by`** (_optional, string_): The field to sort the returned rows by. Equivalent to the order_by in `customer.report()`. By default, no sorting is applied.
  - **`constraints`** (_optional, array/object_): A constraints array or object. See the `customer.report()` documentation for details. By default, all entities are returned.

#### Returns

Returns an array of objects.
Each object has a `operating_system_version_constant` property. Any other resources that can be selected with `operating_system_version_constant` will also be added as properities.
