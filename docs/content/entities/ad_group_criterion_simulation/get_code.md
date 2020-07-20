---
title: Get AdGroupCriterionSimulation
order: 2.1
type: get_code
entity: AdGroupCriterionSimulation
---

```javascript
// Getting the entity
let result = await customer.adGroupCriterionSimulations.get(
  'customers/3827277046/adGroupCriterionSimulations/77057369032~391658604416~CPC_BID~UNIFORM~20200711~20200717'
)
```

```javascript
// Example result
;({
  ad_group_id: 77057369032,
  cpc_bid_point_list: {
    points: [
      {
        cpc_bid_micros: 2750000,
        biddable_conversions: 0,
        biddable_conversions_value: 0,
        clicks: 2,
        cost_micros: 1680000,
        impressions: 116,
        top_slot_impressions: 94,
      },
      {
        cpc_bid_micros: 3000000,
        biddable_conversions: 0,
        biddable_conversions_value: 0,
        clicks: 2,
        cost_micros: 5740000,
        impressions: 144,
        top_slot_impressions: 113,
      },
      {
        cpc_bid_micros: 3110000,
        biddable_conversions: 0,
        biddable_conversions_value: 0,
        clicks: 3,
        cost_micros: 10800000,
        impressions: 168,
        top_slot_impressions: 131,
      },
      {
        cpc_bid_micros: 4070000,
        biddable_conversions: 0,
        biddable_conversions_value: 0,
        clicks: 3,
        cost_micros: 15350000,
        impressions: 192,
        top_slot_impressions: 154,
      },
      {
        cpc_bid_micros: 5030000,
        biddable_conversions: 0,
        biddable_conversions_value: 0,
        clicks: 4,
        cost_micros: 22940000,
        impressions: 212,
        top_slot_impressions: 182,
      },
      {
        cpc_bid_micros: 6310000,
        biddable_conversions: 0,
        biddable_conversions_value: 0,
        clicks: 5,
        cost_micros: 38520000,
        impressions: 232,
        top_slot_impressions: 208,
      },
      {
        cpc_bid_micros: 9060000,
        biddable_conversions: 0,
        biddable_conversions_value: 0,
        clicks: 5,
        cost_micros: 50360000,
        impressions: 237,
        top_slot_impressions: 220,
      },
    ],
  },
  criterion_id: 391658604416,
  end_date: '2020-07-17',
  modification_method: 2,
  resource_name:
    'customers/3827277046/adGroupCriterionSimulations/77057369032~391658604416~CPC_BID~UNIFORM~20200711~20200717',
  start_date: '2020-07-11',
  type: 2,
})
```
