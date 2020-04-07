---
title: Delete AdGroupExtensionSetting 
order: 6
type: delete
entity: AdGroupExtensionSetting 
---

### Delete an AdGroupExtensionSetting 

The `customer.adGroupExtensionSettings.delete(resource_name)` sets the `status` field of an AdGroupExtensionSetting to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

- ##### resource_name *required*
    The resource_name of that AdGroupExtensionSetting


#### Returns

_Nothing_