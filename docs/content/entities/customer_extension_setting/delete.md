---
title: Delete CustomerExtensionSetting 
order: 6
type: delete
entity: CustomerExtensionSetting 
---

### Delete a CustomerExtensionSetting 

The `customer.customerExtensionSettings.delete(resource_name)` sets the `status` field of a CustomerExtensionSetting to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

- ##### resource_name *required*
    The resource_name of that CustomerExtensionSetting


#### Returns

_Nothing_