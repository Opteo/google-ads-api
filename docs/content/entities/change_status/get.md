---
title: Get ChangeStatus
order: 2
type: get
entity: ChangeStatus
---

The `customer.changeStatus.get()` method returns all fields for one ChangeStatus, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.changeStatus.get('customers/9262111890/changeStatus/1549036168128203-6-1695902556-30000')

// Here's what the result might look like
result ===
    {
        resource_name: 'customers/9262111890/changeStatus/1549036168128203-6-1695902556-30000',
        campaign: 'customers/9262111890/campaigns/1695902556',
        campaign_criterion: 'customers/9262111890/campaignCriteria/1695902556~30000',
        last_change_date_time: '2019-02-01 15:49:28.128203',
        resource_status: 3,
        resource_type: 7,
    }
```
