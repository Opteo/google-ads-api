---
title: Create AdGroupAd
order: 4
type: create
entity: AdGroupAd
---

This section describes how to create a AdGroupAd.

```javascript
// Creating the entity

const ad_group_ad = {
    // Your AdGroupAd here, without immutable fields such as resource_name
}

const results = await customer.adGroupAds.create(ad_group_ad)

console.log(results) // ['customers/9262111890/adGroupAds/56328868446~284706472002']
```
