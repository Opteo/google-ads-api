---
type: list_code
entity: CampaignFeed
title: List CampaignFeed
order: 3.1
---

```javascript
// Listing all the campaignFeeds in the account
let result = await customer.campaignFeeds.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.campaignFeeds.list({
  constraints: [
    {
      key: 'campaign_feed.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'campaign_feed.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    campaign_feed: {
      resource_name: 'customers/9262111890/campaignFeeds/1483704368~82896692',
      campaign: 'customers/9262111890/campaigns/1483704368',
      feed: 'customers/9262111890/feeds/82896692',
      matching_function: {
        function_string: 'IN(FEED_ITEM_ID,{51842193961,51842200495,51844020102,51844028388})',
        left_operands: [{ requestContextOperand: { contextType: 2 } }],
        operator: 2,
        right_operands: [
          { constantOperand: { longValue: { value: 51842193961 } } },
          { constantOperand: { longValue: { value: 51842200495 } } },
          { constantOperand: { longValue: { value: 51844020102 } } },
          { constantOperand: { longValue: { value: 51844028388 } } },
        ],
      },
      placeholder_types: [2],
      status: 2,
    },
    feed: {
      resource_name: 'customers/9262111890/feeds/82896692',
      attributes: [
        { id: { value: 1 }, name: { value: 'SitelinkName' }, type: 4, isPartOfKey: { value: false } },
        { id: { value: 2 }, name: { value: 'SitelinkUrl' }, type: 6, isPartOfKey: { value: false } },
        { id: { value: 3 }, name: { value: 'SitelinkDescription1' }, type: 4, isPartOfKey: { value: false } },
        { id: { value: 4 }, name: { value: 'SitelinkDescription2' }, type: 4, isPartOfKey: { value: false } },
        { id: { value: 5 }, name: { value: 'SitelinkFinalUrls' }, type: 12, isPartOfKey: { value: false } },
        { id: { value: 6 }, name: { value: 'SitelinkFinalMobileUrls' }, type: 12, isPartOfKey: { value: false } },
        { id: { value: 7 }, name: { value: 'SitelinkTrackingUrl' }, type: 6, isPartOfKey: { value: false } },
        { id: { value: 8 }, name: { value: 'SitelinkFinalUrlSuffix' }, type: 4, isPartOfKey: { value: false } },
      ],
      id: 82896692,
      name: 'My feed',
      origin: 3,
      status: 2,
    },
    campaign: {
      resource_name: 'customers/9262111890/campaigns/1483704368',
      ad_serving_optimization_status: 2,
      advertising_channel_type: 2,
      base_campaign: 'customers/9262111890/campaigns/1483704368',
      bidding_strategy_type: 9,
      campaign_budget: 'customers/9262111890/campaignBudgets/1547508174',
      end_date: '2037-12-30',
      experiment_type: 2,
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
      pay_per_conversion_eligibility_failure_reasons: [8, 2],
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
