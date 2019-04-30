---
title: Update AdGroupAd
order: 5
type: update
entity: AdGroupAd
---

### Update AdGroupAd

This section describes how to update a AdGroupAd.

```javascript
// Updating the entity

const ad_group_ad = {
  resource_name: 'customers/9262111890/adGroupAds/63236814369~303721890851', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.adGroupAds.update(ad_group_ad)
```

```javascript
// Example result
;['customers/9262111890/adGroupAds/63236814369~303721890851']
```
