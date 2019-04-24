---
title: Get KeywordPlan
order: 2
type: get
entity: KeywordPlan
---

The `customer.keywordPlans.get()` method returns all fields for one KeywordPlan, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.keywordPlans.get('customers/3827277046/keywordPlans/4739396')

// Here's what the result might look like
result === { resource_name: 'customers/3827277046/keywordPlans/4739396', id: 4739396, name: 'My keyword plan' }
```
