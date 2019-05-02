---
title: Update AdGroupFeed
order: 5
type: update
entity: AdGroupFeed
---

### Update an AdGroupFeed

The `customer.adGroupFeeds.update(ad_group_feed)` method changes the attributes of an existing adGroupFeeds in an account. It also supports an array as its first agument for batch operations.

#### Arguments

- **`entity`** (_required_): The AdGroupFeed object or array of objects. These must have a resource_name field set to identify the entity. Any other fields that you set will be updated.
- **`options`** (_optional_): Object of the form `{ validate_only, partial_failure }`:
  - **`validate_only`** (_optional, boolean_): When `true`, only checks whether the operation is valid. Makes no changes to your google ads account. Defaults to `false`.
  - **`partial_failure`** (_optional, boolean_): Only useful when passing in an array of entities. When `false`, a single failure in the array of entities to update will cause the whole operation to be rolled back. When `true`, the system will still update the non-failed entities. Defaults to `false`.

#### Returns

- **`results`**: An array of the `resource_names` updated.
- **`partial_failure_error`**: If `partial_failure` was set to `true`, an array of errors.
- **`request`**: The request object that we sent to google's gRPC services. Useful for debugging.

```javascript
// Updating the entity

const ad_group_feed = {
  resource_name: 'customers/3827277046/adGroupFeeds/36337683057~43009393', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.adGroupFeeds.update(ad_group_feed)

// Passing in an array of entities to update, validating only
const result = await customer.adGroupFeeds.update([ad_group_feed, other_ad_group_feed], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/adGroupFeeds/36337683057~43009393'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
