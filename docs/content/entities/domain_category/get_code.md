---
title: Get DomainCategory
order: 2.1
type: get_code
entity: DomainCategory
---

```javascript
// Getting the entity
let result = await customer.domainCategories.get(
  'customers/3827277046/domainCategories/1398201241~Z29vZ2xlIHNoZWV0cy9kYXNoYm9hcmRzIHdpdGggZ29vZ2xlIHNoZWV0cw~en'
)
```

```javascript
// Example result
;({
  campaign: 'customers/3827277046/campaigns/1398201241',
  category: 'google sheets/dashboards with google sheets',
  category_rank: 2,
  coverage_fraction: 1.6129032258064515,
  domain: 'opteo.com',
  has_children: false,
  language_code: 'en',
  resource_name:
    'customers/3827277046/domainCategories/1398201241~Z29vZ2xlIHNoZWV0cy9kYXNoYm9hcmRzIHdpdGggZ29vZ2xlIHNoZWV0cw~en',
})
```
