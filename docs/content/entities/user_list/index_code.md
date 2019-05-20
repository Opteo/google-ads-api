---
order: 1.1
type: object_code
entity: UserList
title: UserList
---

```javascript
// Example UserList
const user_list = {
  resource_name: 'customers/3827277046/userLists/509186086',
  access_reason: 2,
  account_user_list_status: 2,
  description: 'Combined audience based on available data sources',
  eligible_for_display: true,
  eligible_for_search: true,
  id: 509186086,
  logical_user_list: {
    rules: [
      {
        operator: 3,
        ruleOperandsList: [
          { userList: { value: 'customers/3827277046/userLists/508846109' } },
          { userList: { value: 'customers/3827277046/userLists/614318739' } },
        ],
      },
    ],
  },
  membership_life_span: 30,
  membership_status: 2,
  name: 'My user list',
  read_only: true,
  size_for_display: 16,
  size_for_search: 19,
  size_range_for_display: 2,
  size_range_for_search: 2,
  type: 3,
}
```
