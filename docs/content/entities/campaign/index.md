---
order: 1
type: object
entity: Campaign
title: Campaign
---

## Campaign

### The Campaign object

This section describes the Campaign entity.

```javascript
// Example Campaign
const campaign = {
  resource_name: 'customers/9262111890/campaigns/1473765780',
  ad_serving_optimization_status: 2,
  advertising_channel_type: 2,
  bidding_strategy_type: 9,
  campaign_budget: 'customers/9262111890/campaignBudgets/1536143460',
  end_date: '2037-12-30',
  frequency_caps: [],
  geo_target_type_setting: { negative_geo_target_type: 2, positive_geo_target_type: 2 },
  id: 1473765780,
  name: 'My campaign',
  network_settings: {
    target_content_network: false,
    target_google_search: true,
    target_partner_search_network: false,
    target_search_network: true,
  },
  payment_mode: 4,
  selective_optimization: { conversion_actions: [] },
  serving_status: 2,
  start_date: '2018-07-12',
  status: 4,
  url_custom_parameters: [],
}
```
