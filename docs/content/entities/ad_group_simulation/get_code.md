---
title: Get AdGroupSimulation
order: 2.1
type: get_code
entity: AdGroupSimulation
---

```javascript
// Getting the entity
let result = await customer.adGroupSimulations.get(
  'customers/3827277046/adGroupSimulations/62144833658~TARGET_CPA~UNIFORM~20191210~20191216'
)
```

```javascript
// Example result
;({
  ad_group_id: 62144833658,
  end_date: '2019-12-16',
  modification_method: 2,
  resource_name: 'customers/3827277046/adGroupSimulations/62144833658~TARGET_CPA~UNIFORM~20191210~20191216',
  start_date: '2019-12-10',
  target_cpa_point_list: {
    points: [
      {
        target_cpa_micros: 1040000,
        biddable_conversions: 29.95071029663086,
        biddable_conversions_value: 0,
        clicks: 317,
        cost_micros: 58700000,
        impressions: 32553,
        top_slot_impressions: 0,
      },
      {
        target_cpa_micros: 1560000,
        biddable_conversions: 42.4617805480957,
        biddable_conversions_value: 0,
        clicks: 377,
        cost_micros: 104000000,
        impressions: 50259,
        top_slot_impressions: 0,
      },
      {
        target_cpa_micros: 2080000,
        biddable_conversions: 54.39434814453125,
        biddable_conversions_value: 0,
        clicks: 426,
        cost_micros: 155000000,
        impressions: 68399,
        top_slot_impressions: 0,
      },
      {
        target_cpa_micros: 2600000,
        biddable_conversions: 65.9144058227539,
        biddable_conversions_value: 0,
        clicks: 468,
        cost_micros: 213000000,
        impressions: 86868,
        top_slot_impressions: 0,
      },
      {
        target_cpa_micros: 3120000,
        biddable_conversions: 77.1160659790039,
        biddable_conversions_value: 0,
        clicks: 506,
        cost_micros: 275000000,
        impressions: 105604,
        top_slot_impressions: 0,
      },
      {
        target_cpa_micros: 3640000,
        biddable_conversions: 88.05967712402344,
        biddable_conversions_value: 0,
        clicks: 540,
        cost_micros: 341000000,
        impressions: 124564,
        top_slot_impressions: 0,
      },
      {
        target_cpa_micros: 4160000,
        biddable_conversions: 98.78714752197266,
        biddable_conversions_value: 0,
        clicks: 572,
        cost_micros: 411000000,
        impressions: 143719,
        top_slot_impressions: 0,
      },
    ],
  },
  type: 4,
})
```
