---
type: list_code
entity: UserList
title: List UserList
order: 3.1
---

```javascript
// Listing all the userLists in the account
let result = await customer.userLists.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.userLists.list({
  constraints: [
    {
      key: 'user_list.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'user_list.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    user_list: {
      access_reason: 2,
      account_user_list_status: 2,
      closing_reason: 0,
      description: 'Combined audience based on available data sources',
      eligible_for_display: true,
      eligible_for_search: true,
      id: 509186086,
      logical_user_list: {
        rules: [
          {
            operator: 3,
            rule_operands_list: [
              { user_list: 'customers/3827277046/userLists/814539380' },
              { user_list: 'customers/3827277046/userLists/508846109' },
              { user_list: 'customers/3827277046/userLists/614318739' },
            ],
          },
        ],
      },
      membership_life_span: 30,
      membership_status: 2,
      name: 'My user list',
      read_only: true,
      resource_name: 'customers/3827277046/userLists/509186086',
      size_for_display: 320,
      size_for_search: 490,
      size_range_for_display: 2,
      size_range_for_search: 2,
      type: 3,
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
      final_url_suffix:
        'wickedsource=google&wickedid={creative}&wtm_term={ifsearch:{keyword}}{ifcontent:{placement}}&wtm_campaign={campaignid}&wtm_content={adgroupid}&wickedplacement={placement}&wickedkeyword={keyword}&gclid={gclid}',
      has_partners_badge: false,
      id: 3827277046,
      manager: false,
      optimization_score: 0.8214771414132993,
      pay_per_conversion_eligibility_failure_reasons: [],
      remarketing_setting: {
        google_global_site_tag:
          "<!-- Global site tag (gtag.js) - Google Ads: 875176189 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-875176189\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-875176189');\n</script>\n",
      },
      resource_name: 'customers/3827277046',
      test_account: false,
      time_zone: 'Europe/London',
      tracking_url_template:
        'https://w.opteo.co/workers/ct?url={lpurl}&domain_id=123443&campaign_id={campaignid}&adgroup_id={adgroupid}&matchtype={matchtype}&network={network}&device={device}&keyword={keyword}&targetid={targetid}',
    },
  },
]
```
