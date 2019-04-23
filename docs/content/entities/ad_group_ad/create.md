---
title: Create AdGroupAd 
---

This section describes how to create a AdGroupAd.



```javascript

// Creating the entity

const ad_group_ad = {
    // Your AdGroupAd here 
}

const results = await customer.adGroupAds.create(ad_group_ad)

console.log(results) // ['customers/1234567890/adGroupAds/9765432177']

```