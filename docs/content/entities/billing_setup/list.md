---
type: list
entity: BillingSetup
title: List BillingSetup
order: 3
---

### List every instance of BillingSetup

The `customer.billingSetups.list()` returns all of the entities in the account, including `REMOVED` entities. It also returns all other resources that can be selected with each instance of BillingSetup.

This method was designed for convenience and discovery. Internally, it uses the `customer.report()` method with all `attributes` fields included. For production code, we recommend using `customer.report()` with only the fields you need.

#### Arguments

- **`options`** (_optional_): Object of the form `{ limit, order_by, constraints }`:
  - **`limit`** (_optional, number_): Number of rows to return. Equivalent to the limit in `customer.report()`. Defaults to no limit.
  - **`order_by`** (_optional, string_): The field to sort the returned rows by. Equivalent to the order_by in `customer.report()`. By default, no sorting is applied.
  - **`constraints`** (_optional, array/object_): A constraints array or object. See the `customer.report()` documentation for details. By default, all entities are returned.

#### Returns

Returns an array of objects.
Each object has a `billing_setup` property. Any other resources that can be selected with `billing_setup` will also be added as properities.

```javascript
// Listing all the billingSetups in the account
let result = await customer.billingSetups.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.billingSetups.list({
  constraints: [
    {
      key: 'billing_setup.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'billing_setup.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    billing_setup: {
      resource_name: 'customers/9262111890/billingSetups/465508048',
      end_time_type: 3,
      id: 465508048,
      start_date_time: '2018-07-23 15:51:33',
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
  },
]
```
