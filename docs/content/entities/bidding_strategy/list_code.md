---
type: list_code
entity: BiddingStrategy
title: List BiddingStrategy
order: 3.1
---

```javascript
// Listing all the biddingStrategies in the account
let result = await customer.biddingStrategies.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.biddingStrategies.list({
  constraints: [
    {
      key: 'bidding_strategy.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'bidding_strategy.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    bidding_strategy: {
      campaign_count: 7,
      id: 2039955526,
      name: 'My bidding strategy',
      non_removed_campaign_count: 7,
      resource_name: 'customers/3827277046/biddingStrategies/2039955526',
      status: 2,
      target_impression_share: { cpc_bid_ceiling_micros: 10000000, location: 4, location_fraction_micros: 900000 },
      type: 15,
    },
    customer: {
      auto_tagging_enabled: true,
      call_reporting_setting: {
        call_conversion_action: 'customers/3827277046/conversionActions/179',
        call_conversion_reporting_enabled: true,
        call_reporting_enabled: true,
      },
      conversion_tracking_setting: { conversion_tracking_id: 875176189 },
      currency_code: 'GBP',
      descriptive_name: 'My customer',
      has_partners_badge: false,
      id: 3827277046,
      manager: false,
      pay_per_conversion_eligibility_failure_reasons: [5],
      remarketing_setting: {
        google_global_site_tag:
          "<!-- Global site tag (gtag.js) - Google Ads: 875176189 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-875176189\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-875176189');\n</script>\n",
      },
      resource_name: 'customers/3827277046',
      test_account: false,
      time_zone: 'Europe/London',
    },
  },
]
```
