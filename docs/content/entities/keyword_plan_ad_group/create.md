---
title: Create KeywordPlanAdGroup 
order: 4
type: create
entity: KeywordPlanAdGroup 
---

### Create a KeywordPlanAdGroup 

The `customer.keywordPlanAdGroups.create(keyword_plan_ad_group)` method makes a new KeywordPlanAdGroup in an account. It also supports an array as its first agument for batch operations.


#### Arguments

-   ##### entity _required_ 
    The KeywordPlanAdGroup object or array of objects.
-   ##### options _optional_
    Object of the form `{ validate_only, partial_failure }`:
    -   ##### validate_only _optional, boolean_ 
        When `true`, only checks whether the operation is valid. Makes no changes to your google ads account. Defaults to `false`.
    -   ##### partial_failure _optional, boolean_
        Only useful when passing in an array of entities. When `false`, a single failure in the array of entities to create will cause the whole operation to be rolled back. When `true`, the system will still create the non-failed entities. Defaults to `false`.


#### Returns

-   ##### results
    An array of the `resource_names` created.
-   ##### partial_failure_error
    If `partial_failure` was set to `true`, an array of errors.
-   ##### request
    The request object sent to google's gRPC services. Useful for debugging.
