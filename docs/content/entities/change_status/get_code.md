---
title: Get ChangeStatus
order: 2.1
type: get_code
entity: ChangeStatus
---

```javascript
// Getting the entity
let result = await customer.changeStatus.get('customers/9262111890/changeStatus/1551363533064186-6-1720502376-30000')
```

```javascript
// Example result
;({
  campaign: 'customers/9262111890/campaigns/1720502376',
  campaign_criterion: 'customers/9262111890/campaignCriteria/1720502376~30000',
  last_change_date_time: '2019-02-28 14:18:53.064186',
  resource_name: 'customers/9262111890/changeStatus/1551363533064186-6-1720502376-30000',
  resource_status: 3,
  resource_type: 7,
})
```
