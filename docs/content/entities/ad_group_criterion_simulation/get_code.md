---
title: Get AdGroupCriterionSimulation
order: 2.1
type: get_code
entity: AdGroupCriterionSimulation
---

```javascript
// Getting the entity
let result = await customer.adGroupCriterionSimulations.get(
  'customers/3827277046/adGroupCriterionSimulations/74343279514~310015189818~CPC_BID~UNIFORM~20191210~20191216'
)
```

```javascript
// Example result
;({
  ad_group_id: 74343279514,
  cpc_bid_point_list: {
    points: [
      {
        cpc_bid_micros: 1300000,
        biddable_conversions: 0,
        biddable_conversions_value: 0,
        clicks: 4,
        cost_micros: 2990000,
        impressions: 24,
        top_slot_impressions: 21,
      },
      {
        cpc_bid_micros: 1540000,
        biddable_conversions: 0,
        biddable_conversions_value: 0,
        clicks: 5,
        cost_micros: 4430000,
        impressions: 29,
        top_slot_impressions: 26,
      },
      {
        cpc_bid_micros: 1770000,
        biddable_conversions: 0,
        biddable_conversions_value: 0,
        clicks: 5,
        cost_micros: 4640000,
        impressions: 35,
        top_slot_impressions: 30,
      },
      {
        cpc_bid_micros: 3990000,
        biddable_conversions: 0,
        biddable_conversions_value: 0,
        clicks: 10,
        cost_micros: 22530000,
        impressions: 47,
        top_slot_impressions: 43,
      },
      {
        cpc_bid_micros: 6400000,
        biddable_conversions: 0,
        biddable_conversions_value: 0,
        clicks: 11,
        cost_micros: 43680000,
        impressions: 52,
        top_slot_impressions: 49,
      },
    ],
  },
  criterion_id: 310015189818,
  end_date: '2019-12-16',
  modification_method: 2,
  resource_name:
    'customers/3827277046/adGroupCriterionSimulations/74343279514~310015189818~CPC_BID~UNIFORM~20191210~20191216',
  start_date: '2019-12-10',
  type: 2,
})
```
