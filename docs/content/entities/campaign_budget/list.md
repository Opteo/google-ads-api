---
type: list
entity: CampaignBudget
title: List CampaignBudget
order: 3
---

### List all CampaignBudget

This `customer.campaignBudgets.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the campaignBudgets in the account
let result = await customer.campaignBudgets.list()

// Listing with constraints and a limited number of results
let result = await customer.campaignBudgets.list({
  constraints: [
    {
      key: 'campaign_budget.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
})
```

```javascript
// Example result
;[
  {
    campaign: {
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
    },
    campaign_budget: {
      resource_name: 'customers/9262111890/campaignBudgets/1536143460',
      amount_micros: 10000000,
      delivery_method: 2,
      explicitly_shared: false,
      has_recommended_budget: false,
      id: 1536143460,
      name: 'My campaign budget',
      period: 2,
      reference_count: 0,
      status: 3,
      type: 2,
    },
    customer: {
      resource_name: 'customers/9262111890',
      auto_tagging_enabled: false,
      call_reporting_setting: {
        call_conversion_action: 'customers/9262111890/conversionActions/179',
        call_conversion_reporting_enabled: true,
      },
      conversion_tracking_setting: { conversion_tracking_id: 797556569 },
      currency_code: 'EUR',
      descriptive_name: 'My customer',
      has_partners_badge: false,
      id: 9262111890,
      manager: false,
      remarketing_setting: {
        google_global_site_tag:
          "<!-- Global site tag (gtag.js) - Google Ads: 797556569 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-797556569\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-797556569');\n</script>\n",
      },
      test_account: true,
      time_zone: 'Europe/London',
    },
  },
]
```
