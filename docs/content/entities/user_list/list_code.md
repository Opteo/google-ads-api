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
      description: 'Combined audience based on available data sources',
      eligible_for_display: true,
      eligible_for_search: true,
      id: 509186086,
      logical_user_list: {
        rules: [
          {
            operator: 3,
            ruleOperandsList: [
              { userList: { value: 'customers/3827277046/userLists/508846109' } },
              { userList: { value: 'customers/3827277046/userLists/614318739' } },
            ],
          },
        ],
      },
      membership_life_span: 30,
      membership_status: 2,
      name: 'My user list',
      read_only: true,
      resource_name: 'customers/3827277046/userLists/509186086',
      size_for_display: 16,
      size_for_search: 20,
      size_range_for_display: 2,
      size_range_for_search: 2,
      type: 3,
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
