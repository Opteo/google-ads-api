---
title: Get UserInterest
order: 2
type: get
entity: UserInterest
---

### Get UserInterest

The `customer.userInterests.get()` method returns all fields for one UserInterest, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.userInterests.get('customers/9262111890/userInterests/3')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/userInterests/3',
  availabilities: [],
  launched_to_all: true,
  name: 'My user interest',
  taxonomy_type: 5,
  user_interest_id: 3,
})
```
