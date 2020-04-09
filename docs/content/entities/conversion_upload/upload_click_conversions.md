---
title: Upload ConversionClick
order: 3
type: upload
entity: ConversionUpload
---

### Upload ConversionClicks

The `customer.conversionUploads.uploadClickConversions(click_conversions)` method uploads click conversions to an account. It requires an array of click conversions.


#### Arguments

- ##### entity *required* 
    An array of click conversions.
- ##### options *optional*
    Object of the form `{ validate_only, partial_failure }`:
    - ##### validate_only *optional, boolean* 
        When `true`, only checks whether the operation is valid. Makes no changes to your google ads account. Defaults to `false`.
    - ##### partial_failure *optional, boolean*
        Only useful when passing in an array of entities. When `false`, a single failure in the array of entities to create will cause the whole operation to be rolled back. When `true`, the system will still create the non-failed entities. Defaults to `false`.
- ##### all_results *optional, boolean*
    Boolean adding `true` will return an array of all uploaded conversions, defaults to `false`


#### Returns

- ##### results
    an array of information for successfully processed ClickConversionUpload.
- ##### partial_failure_error
    If `partial_failure` was set to `true`, an array of errors.
- ##### request
    The request object sent to google's gRPC services. Useful for debugging.
