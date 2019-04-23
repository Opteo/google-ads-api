---
title: Update AdGroupAd
order: 5
type: update
entity: AdGroupAd
---

This section describes how to update a AdGroupAd.

```javascript
// Updating the entity

const ad_group_ad = {
    resource_name: 'customers/9262111890/adGroupAds/56328868446~284706472002', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.adGroupAds.update(ad_group_ad)

console.log(results) // ['customers/9262111890/adGroupAds/56328868446~284706472002']
```
