---
type: list
entity: MobileDeviceConstant
title: List MobileDeviceConstant
order: 3
---

### List every instance of MobileDeviceConstant

The `customer.mobileDeviceConstants.list()` returns all of the entities in the account, including `REMOVED` entities. It also returns all other resources that can be selected with each instance of MobileDeviceConstant.

This method was designed for convenience and discovery. Internally, it uses the `customer.report()` method with all `attributes` fields included. For production code, we recommend using `customer.report()` with only the fields you need.

#### Arguments

- **`options`** (_optional_): Object of the form `{ limit, order_by, constraints }`:
  - **`limit`** (_optional, number_): Number of rows to return. Equivalent to the limit in `customer.report()`. Defaults to no limit.
  - **`order_by`** (_optional, string_): The field to sort the returned rows by. Equivalent to the order_by in `customer.report()`. By default, no sorting is applied.
  - **`constraints`** (_optional, array/object_): A constraints array or object. See the `customer.report()` documentation for details. By default, all entities are returned.

#### Returns

Returns an array of objects.
Each object has a `mobile_device_constant` property. Any other resources that can be selected with `mobile_device_constant` will also be added as properities.

```javascript
// Listing all the mobileDeviceConstants in the account
let result = await customer.mobileDeviceConstants.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.mobileDeviceConstants.list({
  constraints: [
    {
      key: 'mobile_device_constant.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'mobile_device_constant.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    mobile_device_constant: {
      resource_name: 'mobileDeviceConstants/610508',
      id: 610508,
      manufacturer_name: 'Microsoft',
      name: 'windows rt tablet',
      operating_system_name: 'Other/Unknown',
      type: 3,
    },
  },
]
```
