---
title: Get MobileDeviceConstant
order: 2
type: get
entity: MobileDeviceConstant
---

### Get a MobileDeviceConstant

The `customer.mobileDeviceConstants.get(resource_name)` method returns the MobileDeviceConstant identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that MobileDeviceConstant

#### Returns

Returns that MobileDeviceConstant as an object.

```javascript
// Getting the entity
let result = await customer.mobileDeviceConstants.get('mobileDeviceConstants/610508')
```

```javascript
// Example result
;({
  resource_name: 'mobileDeviceConstants/610508',
  id: 610508,
  manufacturer_name: 'Microsoft',
  name: 'windows rt tablet',
  operating_system_name: 'Other/Unknown',
  type: 3,
})
```
