---
type: list
entity: BiddingStrategy
title: List BiddingStrategy
order: 3
---

### List every instance of BiddingStrategy

The `customer.biddingStrategies.list()` returns all of the entities in the account, including `REMOVED` entities. It also returns all other resources that can be selected with each instance of BiddingStrategy.

This method was designed for convenience and discovery. Internally, it uses the `customer.report()` method with all `attributes` fields included. For production code, we recommend using `customer.report()` with only the fields you need.

#### Arguments

- **`options`** (_optional_): Object of the form `{ limit, order_by, constraints }`:
  - **`limit`** (_optional, number_): Number of rows to return. Equivalent to the limit in `customer.report()`. Defaults to no limit.
  - **`order_by`** (_optional, string_): The field to sort the returned rows by. Equivalent to the order_by in `customer.report()`. By default, no sorting is applied.
  - **`constraints`** (_optional, array/object_): A constraints array or object. See the `customer.report()` documentation for details. By default, all entities are returned.

#### Returns

Returns an array of objects.
Each object has a `bidding_strategy` property. Any other resources that can be selected with `bidding_strategy` will also be added as properities.

```javascript
// Listing all the biddingStrategies in the account
let result = await customer.biddingStrategies.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.biddingStrategies.list({
  constraints: [
    {
      key: 'bidding_strategy.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'bidding_strategy.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    bidding_strategy: {
      resource_name: 'customers/3827277046/biddingStrategies/1534381593',
      campaign_count: 0,
      id: 1534381593,
      name: 'My bidding strategy',
      non_removed_campaign_count: 0,
      status: 2,
      type: 2,
    },
    customer: {
      resource_name: 'customers/3827277046',
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
      remarketing_setting: {
        google_global_site_tag:
          "<!-- Global site tag (gtag.js) - Google Ads: 875176189 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-875176189\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-875176189');\n</script>\n",
      },
      test_account: false,
      time_zone: 'Europe/London',
      tracking_url_template:
        '{lpurl}?utm_source=adwords&utm_medium=PPC&utm_campaign={campaignid}&utm_term={ifsearch:{keyword}}{ifcontent:{placement}}&utm_content={creative}&network={network}&adgroupid={adgroupid}&matchtype={matchtype}&adposition={adposition}&targetid={targetid}&target={target}&device={device}&devicemodel={devicemodel}',
    },
  },
]
```
