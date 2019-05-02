---
title: Create KeywordPlanCampaign
order: 4.1
type: create_code
entity: KeywordPlanCampaign
---

```javascript
// Creating the entity

const keyword_plan_campaign = {
  // Your KeywordPlanCampaign here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.keywordPlanCampaigns.create(keyword_plan_campaign)

// Passing in an array of entities to create, validating only
const result = await customer.keywordPlanCampaigns.create([keyword_plan_campaign, other_keyword_plan_campaign], {
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
