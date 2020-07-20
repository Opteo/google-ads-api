---
title: Get ChangeStatus
order: 2.1
type: get_code
entity: ChangeStatus
---

```javascript
// Getting the entity
let result = await customer.changeStatus.get(
  'customers/9262111890/changeStatus/1594627270844783-10-82896692-51844020102'
)
```

```javascript
// Example result
;({
  feed: 'customers/9262111890/feeds/82896692',
  feed_item: 'customers/9262111890/feedItems/82896692~51844020102',
  last_change_date_time: '2020-07-13 09:01:10.844783',
  resource_name: 'customers/9262111890/changeStatus/1594627270844783-10-82896692-51844020102',
  resource_status: 3,
  resource_type: 10,
})
```
