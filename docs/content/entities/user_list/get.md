---
title: Get UserList
order: 2
type: get
entity: UserList
---

### Get UserList

The `customer.userLists.get()` method returns all fields for one UserList, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.userLists.get('customers/3827277046/userLists/508846109')
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/userLists/508846109',
  access_reason: 2,
  account_user_list_status: 2,
  description: 'People who visited pages that contain your remarketing tags',
  eligible_for_display: true,
  eligible_for_search: true,
  id: 508846109,
  membership_life_span: 30,
  membership_status: 2,
  name: 'My user list',
  read_only: true,
  rule_based_user_list: { prepopulation_status: 3 },
  size_for_display: 0,
  size_for_search: 0,
  size_range_for_display: 2,
  size_range_for_search: 2,
  type: 5,
})
```
