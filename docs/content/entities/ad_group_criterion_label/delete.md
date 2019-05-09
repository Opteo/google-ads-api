---
title: Delete AdGroupCriterionLabel 
order: 6
type: delete
entity: AdGroupCriterionLabel 
---

### Delete an AdGroupCriterionLabel 

The `customer.adGroupCriterionLabels.delete(resource_name)` sets the `status` field of an AdGroupCriterionLabel to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

-   ##### resource_name _required_
    The resource_name of that AdGroupCriterionLabel


#### Returns

_Nothing_