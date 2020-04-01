---
order: 1.1
type: object_code
entity: UserList
title: UserList
---

```javascript
// Example UserList
const user_list = {
  access_reason: 2,
  account_user_list_status: 2,
  closing_reason: 0,
  description: 'Combined audience based on available data sources',
  eligible_for_display: true,
  eligible_for_search: true,
  id: 509186086,
  logical_user_list: {
    rules: [
      {
        operator: 3,
        rule_operands: [
          { user_list: 'customers/3827277046/userLists/814539380' },
          { user_list: 'customers/3827277046/userLists/508846109' },
          { user_list: 'customers/3827277046/userLists/614318739' },
        ],
      },
    ],
  },
  membership_life_span: 30,
  membership_status: 2,
  name: 'My user list',
  read_only: true,
  resource_name: 'customers/3827277046/userLists/509186086',
  size_for_display: 11000,
  size_for_search: 9900,
  size_range_for_display: 5,
  size_range_for_search: 4,
  type: 3,
}
```
