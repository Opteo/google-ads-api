---
title: Get OperatingSystemVersionConstant
order: 2
type: get
entity: OperatingSystemVersionConstant
---

### Get OperatingSystemVersionConstant

The `customer.operatingSystemVersionConstants.get()` method returns all fields for one OperatingSystemVersionConstant, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.operatingSystemVersionConstants.get('operatingSystemVersionConstants/630266')
```

```javascript
// Example result
;({
  resource_name: 'operatingSystemVersionConstants/630266',
  id: 630266,
  name: 'WindowsPhone',
  operator_type: 2,
  os_major_version: -1,
  os_minor_version: -1,
})
```
