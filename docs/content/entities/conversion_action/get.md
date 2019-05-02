---
title: Get ConversionAction
order: 2
type: get
entity: ConversionAction
---

### Get a ConversionAction

The `customer.conversionActions.get(resource_name)` method returns the ConversionAction identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that ConversionAction

#### Returns

Returns that ConversionAction as an object.

```javascript
// Getting the entity
let result = await customer.conversionActions.get('customers/3827277046/conversionActions/238277646')
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/conversionActions/238277646',
  app_id: 'com.coinbase.android',
  attribution_model_settings: { attribution_model: 101, data_driven_model_status: 5 },
  category: 7,
  click_through_lookback_window_days: 30,
  counting_type: 2,
  id: 238277646,
  include_in_conversions_metric: true,
  name: 'My conversion action',
  owner_customer: 'customers/3827277046',
  phone_call_duration_seconds: 60,
  status: 3,
  tag_snippets: [],
  type: 4,
  value_settings: { always_use_default_value: true, default_currency_code: 'GBP', default_value: 1 },
  view_through_lookback_window_days: 1,
})
```
