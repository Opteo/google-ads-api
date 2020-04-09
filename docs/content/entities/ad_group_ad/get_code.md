---
title: Get AdGroupAd
order: 2.1
type: get_code
entity: AdGroupAd
---

```javascript
// Getting the entity
let result = await customer.adGroupAds.get('customers/9262111890/adGroupAds/56328868446~284706472002')
```

```javascript
// Example result
;({
  ad: {
    added_by_google_ads: false,
    device_preference: 0,
    expanded_text_ad: {
      description: 'my description here2',
      headline_part1: 'headline part 1 here2',
      headline_part2: 'headline part 2 here2',
      path1: 'path one here2',
      path2: 'path two here2',
    },
    final_app_urls: [],
    final_mobile_urls: [],
    final_urls: ['http://hello.com'],
    id: 284706472002,
    resource_name: 'customers/9262111890/ads/284706472002',
    system_managed_resource_source: 0,
    type: 3,
    url_collections: [],
    url_custom_parameters: [],
  },
  ad_group: 'customers/9262111890/adGroups/56328868446',
  ad_strength: 0,
  policy_summary: { approval_status: 0, policy_topic_entries: [], review_status: 2 },
  resource_name: 'customers/9262111890/adGroupAds/56328868446~284706472002',
  status: 2,
})
```
