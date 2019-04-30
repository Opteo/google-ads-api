---
type: list
entity: MobileDeviceConstant
title: List MobileDeviceConstant
order: 3
---

### List all MobileDeviceConstant

This `customer.mobileDeviceConstants.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the mobileDeviceConstants in the account
let result = await customer.mobileDeviceConstants.list()

// Listing with constraints and a limited number of results
let result = await customer.mobileDeviceConstants.list({
  constraints: [
    {
      key: 'mobile_device_constant.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
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
