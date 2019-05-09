---
title: Delete AdGroupCriterion 
order: 6
type: delete
entity: AdGroupCriterion 
---

### Delete an AdGroupCriterion 

The `customer.adGroupCriteria.delete(resource_name)` sets the `status` field of an AdGroupCriterion to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

-   ##### resource_name _required_
    The resource_name of that AdGroupCriterion


#### Returns

_Nothing_