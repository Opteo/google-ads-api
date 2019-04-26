---
title: Create AdGroupAd
order: 4
type: create
entity: AdGroupAd
---

### Create AdGroupAd

This section describes how to create a AdGroupAd.

```javascript
// Creating the entity

const ad_group_ad = {
  // Your AdGroupAd here, without immutable fields such as resource_name
}

const result = await customer.adGroupAds.create(ad_group_ad)
```

```javascript
// Example result
;['customers/9262111890/adGroupAds/56328868446~284706472002']
```
