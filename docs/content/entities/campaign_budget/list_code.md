---
type: list_code
entity: CampaignBudget
title: List CampaignBudget
order: 3.1
---

```javascript
// Listing all the campaignBudgets in the account
let result = await customer.campaignBudgets.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.campaignBudgets.list({
  constraints: [
    {
      key: 'campaign_budget.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'campaign_budget.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    campaign_budget: {
      amount_micros: 12000000,
      delivery_method: 2,
      explicitly_shared: false,
      has_recommended_budget: false,
      id: 1624493702,
      name: 'My campaign budget',
      period: 2,
      reference_count: 0,
      resource_name: 'customers/9262111890/campaignBudgets/1624493702',
      status: 3,
      type: 2,
    },
    campaign: {
      ad_serving_optimization_status: 2,
      advertising_channel_type: 3,
      base_campaign: 'customers/9262111890/campaigns/1568629385',
      bidding_strategy_type: 9,
      campaign_budget: 'customers/9262111890/campaignBudgets/1624493702',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 4, positive_geo_target_type: 5 },
      id: 1568629385,
      labels: [],
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
    },
    customer: {
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
      pay_per_conversion_eligibility_failure_reasons: [8, 2],
      remarketing_setting: {
        google_global_site_tag:
          "<!-- Global site tag (gtag.js) - Google Ads: 797556569 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-797556569\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-797556569');\n</script>\n",
      },
      resource_name: 'customers/9262111890',
      test_account: true,
      time_zone: 'Europe/London',
    },
  },
]
```
