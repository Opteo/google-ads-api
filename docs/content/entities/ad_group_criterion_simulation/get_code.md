---
title: Get AdGroupCriterionSimulation
order: 2.1
type: get_code
entity: AdGroupCriterionSimulation
---

```javascript
// Getting the entity
let result = await customer.adGroupCriterionSimulations.get(
  'customers/3827277046/adGroupCriterionSimulations/74343279994~322363606479~CPC_BID~UNIFORM~20200323~20200329'
)
```

```javascript
// Example result
;({
  ad_group_id: 74343279994,
  cpc_bid_point_list: {
    points: [
      {
        cpc_bid_micros: 2150000,
        biddable_conversions: 168.36041259765625,
        biddable_conversions_value: 1538.511962890625,
        clicks: 47,
        cost_micros: 52960000,
        impressions: 126,
        top_slot_impressions: 125,
      },
      {
        cpc_bid_micros: 6490000,
        biddable_conversions: 187.47560119628906,
        biddable_conversions_value: 1713.1905517578125,
        clicks: 51,
        cost_micros: 106270000,
        impressions: 127,
        top_slot_impressions: 126,
      },
      {
        cpc_bid_micros: 12790000,
        biddable_conversions: 188.0800323486328,
        biddable_conversions_value: 1718.7139892578125,
        clicks: 51,
        cost_micros: 108380000,
        impressions: 127,
        top_slot_impressions: 126,
      },
    ],
  },
  criterion_id: 322363606479,
  end_date: '2020-03-29',
  modification_method: 2,
  resource_name:
    'customers/3827277046/adGroupCriterionSimulations/74343279994~322363606479~CPC_BID~UNIFORM~20200323~20200329',
  start_date: '2020-03-23',
  type: 2,
})
```
