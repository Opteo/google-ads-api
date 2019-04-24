---
type: list
entity: MobileDeviceConstant
title: List MobileDeviceConstant
order: 3
---

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

// Here's what the result might look like
result ===
    [
        {
            mobile_device_constant: {
                resource_name: 'mobileDeviceConstants/600329',
                id: 600329,
                manufacturer_name: 'HTC',
                name: 'Hero',
                operating_system_name: 'Android',
                type: 2,
            },
        },
    ]
```
