---
type: list
entity: SharedCriterion
title: List SharedCriterion
order: 3
---

### List every instance of SharedCriterion

The `customer.sharedCriteria.list()` returns all of the entities in the account, including `REMOVED` entities. It also returns all other resources that can be selected with each instance of SharedCriterion.

This method was designed for convenience and discovery. Internally, it uses the `customer.report()` method with all `attributes` fields included. For production code, we recommend using `customer.report()` with only the fields you need.

#### Arguments

- **`options`** (_optional_): Object of the form `{ limit, order_by, constraints }`:
  - **`limit`** (_optional, number_): Number of rows to return. Equivalent to the limit in `customer.report()`. Defaults to no limit.
  - **`order_by`** (_optional, string_): The field to sort the returned rows by. Equivalent to the order_by in `customer.report()`. By default, no sorting is applied.
  - **`constraints`** (_optional, array/object_): A constraints array or object. See the `customer.report()` documentation for details. By default, all entities are returned.

#### Returns

Returns an array of objects.
Each object has a `shared_criterion` property. Any other resources that can be selected with `shared_criterion` will also be added as properities.

```javascript
// Listing all the sharedCriteria in the account
let result = await customer.sharedCriteria.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.sharedCriteria.list({
  constraints: [
    {
      key: 'shared_criterion.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'shared_criterion.some_field.sub_field',
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
