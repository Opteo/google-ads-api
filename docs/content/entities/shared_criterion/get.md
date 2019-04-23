---
title: Get SharedCriterion
order: 2
type: get
entity: SharedCriterion
---

The `customer.sharedCriteria.get()` method returns all fields for one SharedCriterion, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.sharedCriteria.get('customers/9262111890/sharedCriteria/1788591305~13223616')

// Here's what the result might look like
result ===
    {
        resource_name: 'customers/9262111890/sharedCriteria/1788591305~13223616',
        criterion_id: 13223616,
        keyword: { match_type: 2, text: 'abc' },
        shared_set: 'customers/9262111890/sharedSets/1788591305',
        type: 2,
    }
```
