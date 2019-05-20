---
title: Report
order: 4
type: report_code
entity: Customer
---

```javascript
// This example will generate the same results as the query() call above
let ads_with_urls = await customer.report({
  entity: 'ad_group_ad',
  attributes: [
    'ad_group_ad.ad.id',
    'ad_group.id',
    'ad_group_ad.ad.expanded_text_ad.headline_part1',
    'ad_group_ad.ad.text_ad.headline',
  ],
  metrics: ['metrics.impressions'],
  constraints: [
    { key: 'metrics.impressions', op: '>', val: 0 },
    {
      'ad_group_ad.ad.type': [enums.AdType.TEXT_AD, enums.AdType.EXPANDED_TEXT_AD],
    },
  ],
  from_date: '2018-02-25',
  to_date: '2019-03-01',
  order_by: 'metrics.impressions',
  sort_order: 'DESC',
  limit: 3,
})
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

```javascript
// Constraint shorthands
constraints = [
  // clicks > 0, with no shorthand
  { key: 'metrics.clicks', op: '>', val: 0 },
  // campaign.name = "my campaign", with object shorthand for "="
  { 'campaign.name': '"my campaign"' },
  // campaign.status = "PAUSED", with object shorthand for "=" on enum
  { 'campaign.status': enums.CampaignStatus.PAUSED },
  // campaign.status IN ("PAUSED", "ENABLED"), with array shorthand for "IN"
  { 'campaign.status': [enums.CampaignStatus.PAUSED, enums.CampaignStatus.ENABLED] },
]

// If all constraints are using "=" or "IN", the whole contraints key can be an object instead of an array.
constraints = {
  'campaign.name': '"my campaign"',
  'campaign.status': [enums.CampaignStatus.PAUSED, enums.CampaignStatus.ENABLED],
}
```
