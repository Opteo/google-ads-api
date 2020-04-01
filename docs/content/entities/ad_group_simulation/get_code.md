---
title: Get AdGroupSimulation
order: 2.1
type: get_code
entity: AdGroupSimulation
---

```javascript
// Getting the entity
let result = await customer.adGroupSimulations.get(
  'customers/3827277046/adGroupSimulations/98147776220~TARGET_CPA~UNIFORM~20200319~20200325'
)
```

```javascript
// Example result
;({
  ad_group_id: 98147776220,
  end_date: '2020-03-25',
  modification_method: 2,
  resource_name: 'customers/3827277046/adGroupSimulations/98147776220~TARGET_CPA~UNIFORM~20200319~20200325',
  start_date: '2020-03-19',
  target_cpa_point_list: {
    points: [
      {
        target_cpa_micros: 660000,
        biddable_conversions: 0,
        biddable_conversions_value: 0,
        clicks: 132,
        cost_micros: 33300000,
        impressions: 28134,
        top_slot_impressions: 0,
      },
      {
        target_cpa_micros: 990000,
        biddable_conversions: 0,
        biddable_conversions_value: 0,
        clicks: 152,
        cost_micros: 46400000,
        impressions: 37350,
        top_slot_impressions: 0,
      },
      {
        target_cpa_micros: 1320000,
        biddable_conversions: 0,
        biddable_conversions_value: 0,
        clicks: 168,
        cost_micros: 58700000,
        impressions: 45667,
        top_slot_impressions: 0,
      },
      {
        target_cpa_micros: 1650000,
        biddable_conversions: 0,
        biddable_conversions_value: 0,
        clicks: 182,
        cost_micros: 70500000,
        impressions: 53373,
        top_slot_impressions: 0,
      },
      {
        target_cpa_micros: 1980000,
        biddable_conversions: 0,
        biddable_conversions_value: 0,
        clicks: 194,
        cost_micros: 81900000,
        impressions: 60626,
        top_slot_impressions: 0,
      },
      {
        target_cpa_micros: 2310000,
        biddable_conversions: 0,
        biddable_conversions_value: 0,
        clicks: 205,
        cost_micros: 92900000,
        impressions: 67522,
        top_slot_impressions: 0,
      },
      {
        target_cpa_micros: 2640000,
        biddable_conversions: 0,
        biddable_conversions_value: 0,
        clicks: 215,
        cost_micros: 104000000,
        impressions: 74126,
        top_slot_impressions: 0,
      },
    ],
  },
  type: 4,
})
```
