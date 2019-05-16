---
title: Delete AdGroupLabel 
order: 6
type: delete
entity: AdGroupLabel 
---

### Delete an AdGroupLabel 

The `customer.adGroupLabels.delete(resource_name)` sets the `status` field of an AdGroupLabel to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

- ##### resource_name *required*
    The resource_name of that AdGroupLabel


#### Returns

_Nothing_