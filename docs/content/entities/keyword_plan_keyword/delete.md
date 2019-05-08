---
title: Delete KeywordPlanKeyword 
order: 6
type: delete
entity: KeywordPlanKeyword 
---

### Delete a KeywordPlanKeyword 

The `customer.keywordPlanKeywords.delete(resource_name)` sets the `status` field of a KeywordPlanKeyword to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.


#### Arguments

-   ##### resource_name _required_
    The resource_name of that KeywordPlanKeyword


#### Returns

_Nothing_