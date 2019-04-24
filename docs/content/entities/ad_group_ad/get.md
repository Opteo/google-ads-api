---
title: Get AdGroupAd
order: 2
type: get
entity: AdGroupAd
---

The `customer.adGroupAds.get()` method returns all fields for one AdGroupAd, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.adGroupAds.get('customers/9262111890/adGroupAds/56328868446~284706472002')

// Here's what the result might look like
result ===
    {
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
