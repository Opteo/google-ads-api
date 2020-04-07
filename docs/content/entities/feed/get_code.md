---
title: Get Feed
order: 2.1
type: get_code
entity: Feed
---

```javascript
// Getting the entity
let result = await customer.feeds.get('customers/9262111890/feeds/82896692')
```

```javascript
// Example result
;({
  attributes: [
    { id: 1, name: 'SitelinkName', type: 4, is_part_of_key: false },
    { id: 2, name: 'SitelinkUrl', type: 6, is_part_of_key: false },
    { id: 3, name: 'SitelinkDescription1', type: 4, is_part_of_key: false },
    { id: 4, name: 'SitelinkDescription2', type: 4, is_part_of_key: false },
    { id: 5, name: 'SitelinkFinalUrls', type: 12, is_part_of_key: false },
    { id: 6, name: 'SitelinkFinalMobileUrls', type: 12, is_part_of_key: false },
    { id: 7, name: 'SitelinkTrackingUrl', type: 6, is_part_of_key: false },
    { id: 8, name: 'SitelinkFinalUrlSuffix', type: 4, is_part_of_key: false },
  ],
  id: 82896692,
  name: 'My feed',
  origin: 3,
  resource_name: 'customers/9262111890/feeds/82896692',
  status: 2,
})
```
