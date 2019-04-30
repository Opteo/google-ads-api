---
type: list
entity: SharedCriterion
title: List SharedCriterion
order: 3
---

### List all SharedCriterion

This `customer.sharedCriteria.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the sharedCriteria in the account
let result = await customer.sharedCriteria.list()

// Listing with constraints and a limited number of results
let result = await customer.sharedCriteria.list({
  constraints: [
    {
      key: 'shared_criterion.some_field',
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
    shared_criterion: {
      resource_name: 'customers/9262111890/sharedCriteria/1788591305~627191652608',
      criterion_id: 627191652608,
      keyword: { match_type: 2, text: 'test-keyword-399026' },
      shared_set: 'customers/9262111890/sharedSets/1788591305',
      type: 2,
    },
    shared_set: {
      resource_name: 'customers/9262111890/sharedSets/1788591305',
      id: 1788591305,
      member_count: 6,
      name: 'My shared set',
      reference_count: 0,
      status: 2,
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
