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
  resource_name: 'customers/9262111890/feeds/82896692',
  attributes: [
    { id: { value: 1 }, name: { value: 'SitelinkName' }, type: 4, isPartOfKey: { value: false } },
    { id: { value: 2 }, name: { value: 'SitelinkUrl' }, type: 6, isPartOfKey: { value: false } },
    { id: { value: 3 }, name: { value: 'SitelinkDescription1' }, type: 4, isPartOfKey: { value: false } },
    { id: { value: 4 }, name: { value: 'SitelinkDescription2' }, type: 4, isPartOfKey: { value: false } },
    { id: { value: 5 }, name: { value: 'SitelinkFinalUrls' }, type: 12, isPartOfKey: { value: false } },
    { id: { value: 6 }, name: { value: 'SitelinkFinalMobileUrls' }, type: 12, isPartOfKey: { value: false } },
    { id: { value: 7 }, name: { value: 'SitelinkTrackingUrl' }, type: 6, isPartOfKey: { value: false } },
    { id: { value: 8 }, name: { value: 'SitelinkFinalUrlSuffix' }, type: 4, isPartOfKey: { value: false } },
  ],
  id: 82896692,
  name: 'My feed',
  origin: 3,
  status: 2,
})
```
