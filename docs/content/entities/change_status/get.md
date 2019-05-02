---
title: Get ChangeStatus
order: 2
type: get
entity: ChangeStatus
---

### Get a ChangeStatus

The `customer.changeStatus.get(resource_name)` method returns the ChangeStatus identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that ChangeStatus

#### Returns

Returns that ChangeStatus as an object.

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
