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
      campaign_count: 0,
      id: 1534381593,
      name: 'My bidding strategy',
      non_removed_campaign_count: 0,
      resource_name: 'customers/3827277046/biddingStrategies/1534381593',
      status: 2,
      type: 2,
    },
    customer: {
      auto_tagging_enabled: true,
      call_reporting_setting: {
        call_conversion_action: 'customers/3827277046/conversionActions/179',
        call_conversion_reporting_enabled: true,
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
      tracking_url_template:
        '{lpurl}?utm_source=adwords&utm_medium=PPC&utm_campaign={campaignid}&utm_term={ifsearch:{keyword}}{ifcontent:{placement}}&utm_content={creative}&network={network}&adgroupid={adgroupid}&matchtype={matchtype}&adposition={adposition}&targetid={targetid}&target={target}&device={device}&devicemodel={devicemodel}',
    },
  },
]
```
