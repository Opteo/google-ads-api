---
title: Get ChangeStatus
order: 2
type: get
entity: ChangeStatus
---

### Get ChangeStatus

The `customer.changeStatus.get()` method returns all fields for one ChangeStatus, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.changeStatus.get(
  'customers/9262111890/changeStatus/1555585024571455-10-82896692-51844020102'
)
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/changeStatus/1555585024571455-10-82896692-51844020102',
  feed: 'customers/9262111890/feeds/82896692',
  feed_item: 'customers/9262111890/feedItems/82896692~51844020102',
  last_change_date_time: '2019-04-18 11:57:04.571455',
  resource_status: 3,
  resource_type: 10,
})
```
