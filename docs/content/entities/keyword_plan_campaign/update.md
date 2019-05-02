---
title: Update KeywordPlanCampaign
order: 5
type: update
entity: KeywordPlanCampaign
---

### Update a KeywordPlanCampaign

The `customer.keywordPlanCampaigns.update(keyword_plan_campaign)` method changes the attributes of an existing keywordPlanCampaigns in an account. It also supports an array as its first agument for batch operations.

#### Arguments

- **`entity`** (_required_): The KeywordPlanCampaign object or array of objects. These must have a resource_name field set to identify the entity. Any other fields that you set will be updated.
- **`options`** (_optional_): Object of the form `{ validate_only, partial_failure }`:
  - **`validate_only`** (_optional, boolean_): When `true`, only checks whether the operation is valid. Makes no changes to your google ads account. Defaults to `false`.
  - **`partial_failure`** (_optional, boolean_): Only useful when passing in an array of entities. When `false`, a single failure in the array of entities to update will cause the whole operation to be rolled back. When `true`, the system will still update the non-failed entities. Defaults to `false`.

#### Returns

- **`results`**: An array of the `resource_names` updated.
- **`partial_failure_error`**: If `partial_failure` was set to `true`, an array of errors.
- **`request`**: The request object that we sent to google's gRPC services. Useful for debugging.

```javascript
// Updating the entity

const keyword_plan_campaign = {
  resource_name: 'customers/3827277046/keywordPlanCampaigns/4773388', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.keywordPlanCampaigns.update(keyword_plan_campaign)

// Passing in an array of entities to update, validating only
const result = await customer.keywordPlanCampaigns.update([keyword_plan_campaign, other_keyword_plan_campaign], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/keywordPlanCampaigns/4773388'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
