---
title: Create CampaignSharedSet
order: 4
type: create
entity: CampaignSharedSet
---

### Create a CampaignSharedSet

The `customer.campaignSharedSets.create(campaign_shared_set)` method makes a new CampaignSharedSet in an account. It also supports an array as its first agument for batch operations.

#### Arguments

- **`entity`** (_required_): The CampaignSharedSet object or array of objects.
- **`options`** (_optional_): Object of the form `{ validate_only, partial_failure }`:
  - **`validate_only`** (_optional, boolean_): When `true`, only checks whether the operation is valid. Makes no changes to your google ads account. Defaults to `false`.
  - **`partial_failure`** (_optional, boolean_): Only useful when passing in an array of entities. When `false`, a single failure in the array of entities to create will cause the whole operation to be rolled back. When `true`, the system will still create the non-failed entities. Defaults to `false`.

#### Returns

- **`results`**: An array of the `resource_names` created.
- **`partial_failure_error`**: If `partial_failure` was set to `true`, an array of errors.
- **`request`**: The request object that we sent to google's gRPC services. Useful for debugging.

```javascript
// Creating the entity

const campaign_shared_set = {
  // Your CampaignSharedSet here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.campaignSharedSets.create(campaign_shared_set)

// Passing in an array of entities to create, validating only
const result = await customer.campaignSharedSets.create([campaign_shared_set, other_campaign_shared_set], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/campaignSharedSets/1485014801~1788591305'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
