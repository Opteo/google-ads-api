---
type: list
entity: OperatingSystemVersionConstant
title: List OperatingSystemVersionConstant
order: 3
---

### List all OperatingSystemVersionConstant

This `customer.operatingSystemVersionConstants.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the operatingSystemVersionConstants in the account
let result = await customer.operatingSystemVersionConstants.list()

// Listing with constraints and a limited number of results
let result = await customer.operatingSystemVersionConstants.list({
  constraints: [
    {
      key: 'operating_system_version_constant.some_field',
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
    operating_system_version_constant: {
      resource_name: 'operatingSystemVersionConstants/630153',
      id: 630153,
      name: 'Apple iOS',
      operator_type: 2,
      os_major_version: -1,
      os_minor_version: -1,
    },
  },
]
```
