---
title: Get DomainCategory
order: 2
type: get
entity: DomainCategory
---

### Get DomainCategory

The `customer.domainCategories.get()` method returns all fields for one DomainCategory, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.domainCategories.get('customers/3827277046/domainCategories/1398201241~YWRz~en')
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/domainCategories/1398201241~YWRz~en',
  campaign: 'customers/3827277046/campaigns/1398201241',
  category: 'ads',
  category_rank: 8,
  coverage_fraction: 7.042253521126761,
  domain: 'opteo.com',
  has_children: false,
  language_code: 'en',
})
```
