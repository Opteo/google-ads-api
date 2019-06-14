---
title: Get DomainCategory
order: 2.1
type: get_code
entity: DomainCategory
---

```javascript
// Getting the entity
let result = await customer.domainCategories.get(
  'customers/3827277046/domainCategories/1398297003~bGFuZGluZyBwYWdlcyBmcm9tIHlvdXIgc3RhbmRhcmQgYWQgZ3JvdXBz~en'
)
```

```javascript
// Example result
;({
  campaign: 'customers/3827277046/campaigns/1398297003',
  category: 'landing pages from your standard ad groups',
  category_rank: 0,
  coverage_fraction: 3.9473684210526314,
  domain: 'opteo.com',
  has_children: false,
  language_code: 'en',
  recommended_cpc_bid_micros: 48919571,
  resource_name:
    'customers/3827277046/domainCategories/1398297003~bGFuZGluZyBwYWdlcyBmcm9tIHlvdXIgc3RhbmRhcmQgYWQgZ3JvdXBz~en',
})
```
