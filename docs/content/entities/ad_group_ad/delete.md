---
title: Delete AdGroupAd 
order: 6
type: delete
entity: AdGroupAd 
---

### Delete an AdGroupAd 

The `customer.adGroupAds.delete(resource_name)` sets the `status` field of an AdGroupAd to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

- ##### resource_name *required*
    The resource_name of that AdGroupAd


#### Returns

_Nothing_