---
title: Delete KeywordPlanNegativeKeyword 
order: 6
type: delete
entity: KeywordPlanNegativeKeyword 
---

### Delete a KeywordPlanNegativeKeyword 

The `customer.keywordPlanNegativeKeywords.delete(resource_name)` sets the `status` field of a KeywordPlanNegativeKeyword to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

- ##### resource_name *required*
    The resource_name of that KeywordPlanNegativeKeyword


#### Returns

_Nothing_