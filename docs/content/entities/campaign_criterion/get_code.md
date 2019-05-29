---
title: Get CampaignCriterion
order: 2.1
type: get_code
entity: CampaignCriterion
---

```javascript
// Getting the entity
let result = await customer.campaignCriteria.get('customers/9262111890/campaignCriteria/1483704368~1000')
```

```javascript
// Example result
;({
  campaign: 'customers/9262111890/campaigns/1483704368',
  criterion_id: 1000,
  language: { language_constant: 'languageConstants/1000' },
  negative: false,
  resource_name: 'customers/9262111890/campaignCriteria/1483704368~1000',
  type: 20,
})
```
