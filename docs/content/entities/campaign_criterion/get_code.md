---
title: Get CampaignCriterion
order: 2.1
type: get_code
entity: CampaignCriterion
---

```javascript
// Getting the entity
let result = await customer.campaignCriteria.get('customers/9262111890/campaignCriteria/1599497210~1000')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/campaignCriteria/1599497210~1000',
  campaign: 'customers/9262111890/campaigns/1599497210',
  criterion_id: 1000,
  language: { language_constant: 'languageConstants/1000' },
  negative: false,
  type: 20,
})
```
