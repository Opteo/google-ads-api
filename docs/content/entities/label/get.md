---
title: Get Label
order: 2
type: get
entity: Label
---

The `customer.labels.get()` method returns all fields for one Label, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.labels.get('customers/3827277046/labels/872103121')

// Here's what the result might look like
result ===
    {
        resource_name: 'customers/3827277046/labels/872103121',
        id: 872103121,
        name: 'My label',
        status: 2,
        text_label: { background_color: '#6633FF', description: 'Non brand, traditional cold traffic via search' },
    }
```
