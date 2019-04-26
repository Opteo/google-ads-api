---
type: list
entity: AdGroupCriterion
title: List AdGroupCriterion
order: 3
---

### List all AdGroupCriterion

This `customer.adGroupCriteria.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the adGroupCriteria in the account
let result = await customer.adGroupCriteria.list()

// Listing with constraints and a limited number of results
let result = await customer.adGroupCriteria.list({
  constraints: [
    {
      key: 'ad_group_criterion.some_field',
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
    ad_group: {
      resource_name: 'customers/9262111890/adGroups/56328868446',
      campaign: 'customers/9262111890/campaigns/1485014801',
      cpc_bid_micros: 1000000,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 0,
      effective_target_cpa_micros: 0,
      id: 56328868446,
      name: 'My ad group',
      status: 2,
      target_cpa_micros: 0,
      type: 2,
      url_custom_parameters: [],
    },
    ad_group_criterion: {
      resource_name: 'customers/9262111890/adGroupCriteria/56328868446~1165620981',
      ad_group: 'customers/9262111890/adGroups/56328868446',
      approval_status: 5,
      criterion_id: 1165620981,
      effective_cpc_bid_micros: 1000000,
      effective_cpc_bid_source: 6,
      effective_cpm_bid_micros: 10000,
      effective_cpm_bid_source: 6,
      final_mobile_urls: [],
      final_urls: [],
      keyword: { match_type: 2, text: 'test api' },
      negative: false,
      status: 2,
      system_serving_status: 2,
      type: 2,
      url_custom_parameters: [],
    },
    campaign: {
      resource_name: 'customers/9262111890/campaigns/1485014801',
      ad_serving_optimization_status: 2,
      advertising_channel_type: 2,
      bidding_strategy_type: 9,
      campaign_budget: 'customers/9262111890/campaignBudgets/1548344372',
      end_date: '2037-12-30',
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 2, positive_geo_target_type: 2 },
      id: 1485014801,
      name: 'My campaign',
      network_settings: {
        target_content_network: true,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: true,
      },
      payment_mode: 4,
      selective_optimization: { conversion_actions: [] },
      serving_status: 2,
      start_date: '2018-07-24',
      status: 2,
      target_spend: { cpc_bid_ceiling_micros: 1000000 },
      url_custom_parameters: [],
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
