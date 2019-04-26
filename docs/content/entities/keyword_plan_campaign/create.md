---
title: Create KeywordPlanCampaign
order: 4
type: create
entity: KeywordPlanCampaign
---

### Create KeywordPlanCampaign

This section describes how to create a KeywordPlanCampaign.

```javascript
// Creating the entity

const keyword_plan_campaign = {
  // Your KeywordPlanCampaign here, without immutable fields such as resource_name
}

const result = await customer.keywordPlanCampaigns.create(keyword_plan_campaign)
```

```javascript
// Example result
;['customers/3827277046/keywordPlanCampaigns/4773388']
```
