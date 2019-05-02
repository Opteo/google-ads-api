---
type: list
entity: CustomerExtensionSetting
title: List CustomerExtensionSetting
order: 3
---

### List every instance of CustomerExtensionSetting

The `customer.customerExtensionSettings.list()` returns all of the entities in the account, including `REMOVED` entities. It also returns all other resources that can be selected with each instance of CustomerExtensionSetting.

This method was designed for convenience and discovery. Internally, it uses the `customer.report()` method with all `attributes` fields included. For production code, we recommend using `customer.report()` with only the fields you need.

#### Arguments

- **`options`** (_optional_): Object of the form `{ limit, order_by, constraints }`:
  - **`limit`** (_optional, number_): Number of rows to return. Equivalent to the limit in `customer.report()`. Defaults to no limit.
  - **`order_by`** (_optional, string_): The field to sort the returned rows by. Equivalent to the order_by in `customer.report()`. By default, no sorting is applied.
  - **`constraints`** (_optional, array/object_): A constraints array or object. See the `customer.report()` documentation for details. By default, all entities are returned.

#### Returns

Returns an array of objects.
Each object has a `customer_extension_setting` property. Any other resources that can be selected with `customer_extension_setting` will also be added as properities.

```javascript
// Listing all the customerExtensionSettings in the account
let result = await customer.customerExtensionSettings.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.customerExtensionSettings.list({
  constraints: [
    {
      key: 'customer_extension_setting.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'customer_extension_setting.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    customer_extension_setting: {
      resource_name: 'customers/9262111890/customerExtensionSettings/STRUCTURED_SNIPPET',
      extension_feed_items: [{ value: 'customers/9262111890/extensionFeedItems/51842375274' }],
      extension_type: 11,
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
