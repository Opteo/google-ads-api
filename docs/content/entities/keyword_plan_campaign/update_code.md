---
title: Update KeywordPlanCampaign
order: 5.1
type: update_code
entity: KeywordPlanCampaign
---

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
