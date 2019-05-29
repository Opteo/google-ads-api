---
type: list_code
entity: OperatingSystemVersionConstant
title: List OperatingSystemVersionConstant
order: 3.1
---

```javascript
// Listing all the operatingSystemVersionConstants in the account
let result = await customer.operatingSystemVersionConstants.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.operatingSystemVersionConstants.list({
  constraints: [
    {
      key: 'operating_system_version_constant.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'operating_system_version_constant.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    operating_system_version_constant: {
      id: 630266,
      name: 'WindowsPhone',
      operator_type: 2,
      os_major_version: -1,
      os_minor_version: -1,
      resource_name: 'operatingSystemVersionConstants/630266',
    },
  },
]
```
