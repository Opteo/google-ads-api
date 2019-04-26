---
order: 1
type: object
entity: AdGroupAd
title: AdGroupAd
---

## AdGroupAd

### The AdGroupAd object

This section describes the AdGroupAd entity.

```javascript
// Example AdGroupAd
const ad_group_ad = {
  resource_name: 'customers/9262111890/adGroupAds/56328868446~284706472002',
  ad: {
    added_by_google_ads: false,
    display_url: '',
    expanded_text_ad: {
      description: 'my description here2',
      headline_part_1: 'headline part 1 here2',
      headline_part_2: 'headline part 2 here2',
      path_1: 'path one here2',
      path_2: 'path two here2',
    },
    final_mobile_urls: [],
    final_urls: [{ value: 'http://hello.com' }],
    id: 284706472002,
    type: 3,
    url_collections: [],
    url_custom_parameters: [],
  },
  ad_group: 'customers/9262111890/adGroups/56328868446',
  status: 2,
}
```
