---
type: list
entity: CampaignExtensionSetting
title: List CampaignExtensionSetting
order: 3
---

### List all CampaignExtensionSetting

This `customer.campaignExtensionSettings.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the campaignExtensionSettings in the account
let result = await customer.campaignExtensionSettings.list()

// Listing with constraints and a limited number of results
let result = await customer.campaignExtensionSettings.list({
  constraints: [
    {
      key: 'campaign_extension_setting.some_field',
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
      resource_name: 'customers/9262111890/campaigns/1483704368',
      ad_serving_optimization_status: 2,
      advertising_channel_type: 2,
      bidding_strategy_type: 9,
      campaign_budget: 'customers/9262111890/campaignBudgets/1547508174',
      end_date: '2037-12-30',
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 2, positive_geo_target_type: 2 },
      id: 1483704368,
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
      start_date: '2018-07-23',
      status: 2,
      target_spend: { cpc_bid_ceiling_micros: 12000000 },
      url_custom_parameters: [],
    },
    campaign_extension_setting: {
      resource_name: 'customers/9262111890/campaignExtensionSettings/1483704368~SITELINK',
      campaign: 'customers/9262111890/campaigns/1483704368',
      extension_feed_items: [
        { value: 'customers/9262111890/extensionFeedItems/51842193961' },
        { value: 'customers/9262111890/extensionFeedItems/51842200495' },
        { value: 'customers/9262111890/extensionFeedItems/51844020102' },
        { value: 'customers/9262111890/extensionFeedItems/51844028388' },
      ],
      extension_type: 10,
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
