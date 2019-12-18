---
title: Get Ad
order: 2.1
type: get_code
entity: Ad
manual_mode: true
---

```javascript
// Getting the entity
let result = await customer.ads.get('customers/9262111890/ads/284706472002')
```

```javascript
// Example result
;({
  added_by_google_ads: false,
  display_url: '',
  expanded_text_ad: {
    description: 'my description here',
    headline_part1: 'headline part 1 here',
    headline_part2: 'headline part 2 here',
    path1: 'path one here',
    path2: 'path two here',
  },
  final_app_urls: [],
  final_mobile_urls: [],
  final_urls: ['http://hello.com'],
  id: 284706472002,
  resource_name: 'customers/9262111890/ads/284706472002',
  type: 3,
  url_collections: [],
  url_custom_parameters: [],
})
```
