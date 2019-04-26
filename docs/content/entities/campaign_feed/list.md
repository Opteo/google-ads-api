---
type: list
entity: CampaignFeed
title: List CampaignFeed
order: 3
---

### List all CampaignFeed

This `customer.campaignFeeds.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the campaignFeeds in the account
let result = await customer.campaignFeeds.list()

// Listing with constraints and a limited number of results
let result = await customer.campaignFeeds.list({
  constraints: [
    {
      key: 'campaign_feed.some_field',
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
    campaign_feed: {
      resource_name: 'customers/9262111890/campaignFeeds/1483704368~77425432',
      campaign: 'customers/9262111890/campaigns/1483704368',
      feed: 'customers/9262111890/feeds/77425432',
      matching_function: {
        function_string: 'IN(FEED_ITEM_ID,{51842673272,51842611747,51842613103,51844472313})',
        left_operands: [{ requestContextOperand: { contextType: 2 } }],
        operator: 2,
        right_operands: [
          { constantOperand: { longValue: { value: 51842673272 } } },
          { constantOperand: { longValue: { value: 51842611747 } } },
          { constantOperand: { longValue: { value: 51842613103 } } },
          { constantOperand: { longValue: { value: 51844472313 } } },
        ],
      },
      placeholder_types: [7],
      status: 2,
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
    feed: {
      resource_name: 'customers/9262111890/feeds/77425432',
      attributes: [{ id: { value: 1 }, name: { value: 'Callout Text' }, type: 4, isPartOfKey: { value: false } }],
      id: 77425432,
      name: 'My feed',
      origin: 3,
      status: 2,
    },
  },
]
```
