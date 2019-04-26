---
title: Get ConversionAction
order: 2
type: get
entity: ConversionAction
---

### Get ConversionAction

The `customer.conversionActions.get()` method returns all fields for one ConversionAction, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

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
