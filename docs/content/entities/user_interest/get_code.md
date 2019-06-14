---
title: Get UserInterest
order: 2.1
type: get_code
entity: UserInterest
---

```javascript
// Getting the entity
let result = await customer.userInterests.get('customers/9262111890/userInterests/84')
```

```javascript
// Example result
;({
  availabilities: [],
  launched_to_all: true,
  name: 'My user interest',
  resource_name: 'customers/9262111890/userInterests/84',
  taxonomy_type: 5,
  user_interest_id: 84,
  user_interest_parent: 'customers/9262111890/userInterests/302',
})
```
