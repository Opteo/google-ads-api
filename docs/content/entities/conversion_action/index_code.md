---
order: 1.1
type: object_code
entity: ConversionAction
title: ConversionAction
---

```javascript
// Example ConversionAction
const conversion_action = {
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
}
```
