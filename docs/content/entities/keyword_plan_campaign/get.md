---
title: Get KeywordPlanCampaign
order: 2
type: get
entity: KeywordPlanCampaign
---

The `customer.keywordPlanCampaigns.get()` method returns all fields for one KeywordPlanCampaign, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.keywordPlanCampaigns.get('customers/3827277046/keywordPlanCampaigns/4773388')

// Here's what the result might look like
result ===
    {
        resource_name: 'customers/3827277046/keywordPlanCampaigns/4773388',
        cpc_bid_micros: 5370000,
        geo_targets: [],
        id: 4773388,
        keyword_plan: 'customers/3827277046/keywordPlans/4739396',
        keyword_plan_network: 2,
        language_constants: [{ value: 'languageConstants/1000' }],
        name: 'My keyword plan campaign',
    }
```
