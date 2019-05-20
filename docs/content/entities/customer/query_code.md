---
title: Query
order: 3.1
type: query_code
entity: Customer
---

```javascript
const ads_with_urls = await customer.query(`
    SELECT 
      ad_group.id,
      ad_group_ad.ad.id,
      ad_group_ad.ad.expanded_text_ad.headline_part1,
      ad_group_ad.ad.text_ad.headline,
      metrics.impressions
    FROM 
        ad_group_ad 
    WHERE 
        campaign.status = ENABLED 
        AND ad_group_ad.ad.type IN ('TEXT_AD', 'EXPANDED_TEXT_AD')
        AND metrics.impressions > 0 
        AND segments.date >= '2018-02-25'
        AND segments.date <= '2019-03-01'
    ORDER BY metrics.impressions DESC
    LIMIT 3
`)
```

```javascript
// result rows
;[
  {
    ad_group: { resource_name: 'customers/3827277046/adGroups/45808681353', id: 45808681353 },
    ad_group_ad: {
      resource_name: 'customers/3827277046/adGroupAds/45808681353~266534257097',
      ad: { expanded_text_ad: { headline_part_1: 'best ad ever' }, id: 266534257097 },
    },
    metrics: { impressions: 1473 },
  },
  {
    ad_group: { resource_name: 'customers/3827277046/adGroups/45808681353', id: 45808681353 },
    ad_group_ad: {
      resource_name: 'customers/3827277046/adGroupAds/45808681353~304364243717',
      ad: { expanded_text_ad: { headline_part_1: 'next best ad' }, id: 304364243717 },
    },
    metrics: { impressions: 959 },
  },
  {
    ad_group: { resource_name: 'customers/3827277046/adGroups/69639056868', id: 69639056868 },
    ad_group_ad: {
      resource_name: 'customers/3827277046/adGroupAds/69639056868~307847364192',
      ad: { text_ad: { headline: 'pretty okay ad i guess' }, id: 307847364192 },
    },
    metrics: { impressions: 533 },
  },
]
```
