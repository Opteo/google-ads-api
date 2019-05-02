---
type: list
entity: CampaignCriterion
title: List CampaignCriterion
order: 3
---

### List every instance of CampaignCriterion

The `customer.campaignCriteria.list()` returns all of the entities in the account, including `REMOVED` entities. It also returns all other resources that can be selected with each instance of CampaignCriterion.

This method was designed for convenience and discovery. Internally, it uses the `customer.report()` method with all `attributes` fields included. For production code, we recommend using `customer.report()` with only the fields you need.

#### Arguments

- **`options`** (_optional_): Object of the form `{ limit, order_by, constraints }`:
  - **`limit`** (_optional, number_): Number of rows to return. Equivalent to the limit in `customer.report()`. Defaults to no limit.
  - **`order_by`** (_optional, string_): The field to sort the returned rows by. Equivalent to the order_by in `customer.report()`. By default, no sorting is applied.
  - **`constraints`** (_optional, array/object_): A constraints array or object. See the `customer.report()` documentation for details. By default, all entities are returned.

#### Returns

Returns an array of objects.
Each object has a `campaign_criterion` property. Any other resources that can be selected with `campaign_criterion` will also be added as properities.

```javascript
// Listing all the campaignCriteria in the account
let result = await customer.campaignCriteria.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.campaignCriteria.list({
  constraints: [
    {
      key: 'campaign_criterion.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'campaign_criterion.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    campaign_criterion: {
      resource_name: 'customers/9262111890/campaignCriteria/1599497210~1000',
      campaign: 'customers/9262111890/campaigns/1599497210',
      criterion_id: 1000,
      language: { language_constant: 'languageConstants/1000' },
      negative: false,
      type: 20,
    },
    language_constant: {
      resource_name: 'languageConstants/1000',
      code: 'en',
      id: 1000,
      name: 'My language constant',
      targetable: true,
    },
    campaign: {
      resource_name: 'customers/9262111890/campaigns/1599497210',
      ad_serving_optimization_status: 2,
      advertising_channel_type: 2,
      bidding_strategy_type: 9,
      campaign_budget: 'customers/9262111890/campaignBudgets/1656640023',
      end_date: '2037-12-30',
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 2, positive_geo_target_type: 2 },
      id: 1599497210,
      name: 'My campaign',
      network_settings: {
        target_content_network: true,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: true,
      },
      payment_mode: 4,
      selective_optimization: { conversion_actions: [] },
      serving_status: 2,
      start_date: '2018-10-19',
      status: 2,
      targeting_setting: { target_restrictions: [{ targetingDimension: 3, bidOnly: { value: true } }] },
      url_custom_parameters: [],
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
