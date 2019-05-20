---
title: Get ChangeStatus
order: 2.1
type: get_code
entity: ChangeStatus
---

```javascript
// Getting the entity
let result = await customer.changeStatus.get('customers/9262111890/changeStatus/1550831300847098-6-1714068464-30000')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/changeStatus/1550831300847098-6-1714068464-30000',
  campaign: 'customers/9262111890/campaigns/1714068464',
  campaign_criterion: 'customers/9262111890/campaignCriteria/1714068464~30000',
  last_change_date_time: '2019-02-22 10:28:20.847098',
  resource_status: 3,
  resource_type: 7,
})
```
