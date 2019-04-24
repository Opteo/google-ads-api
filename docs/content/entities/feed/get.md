---
title: Get Feed
order: 2
type: get
entity: Feed
---

The `customer.feeds.get()` method returns all fields for one Feed, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.feeds.get('customers/9262111890/feeds/77425432')

// Here's what the result might look like
result ===
    {
        resource_name: 'customers/9262111890/feeds/77425432',
        attributes: [{ id: { value: 1 }, name: { value: 'Callout Text' }, type: 4, isPartOfKey: { value: false } }],
        id: 77425432,
        name: 'My feed',
        origin: 3,
        status: 2,
    }
```
