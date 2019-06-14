---
title: Get Campaign
order: 2.1
type: get_code
entity: Campaign
---

```javascript
// Getting the entity
let result = await customer.campaigns.get('customers/9262111890/campaigns/1568629385')
```

```javascript
// Example result
;({
  ad_serving_optimization_status: 2,
  advertising_channel_type: 3,
  base_campaign: 'customers/9262111890/campaigns/1568629385',
  bidding_strategy_type: 9,
  campaign_budget: 'customers/9262111890/campaignBudgets/1624493702',
  end_date: '2037-12-30',
  experiment_type: 2,
  frequency_caps: [],
  geo_target_type_setting: { negative_geo_target_type: 2, positive_geo_target_type: 2 },
  id: 1568629385,
  name: 'My campaign',
  network_settings: {
    target_content_network: true,
    target_google_search: false,
    target_partner_search_network: false,
    target_search_network: false,
  },
  payment_mode: 4,
  resource_name: 'customers/9262111890/campaigns/1568629385',
  selective_optimization: { conversion_actions: [] },
  serving_status: 2,
  start_date: '2018-09-19',
  status: 4,
  target_spend: { cpc_bid_ceiling_micros: 1000000 },
  url_custom_parameters: [],
})
```
