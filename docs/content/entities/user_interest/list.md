---
type: list
entity: UserInterest
title: List UserInterest
order: 3
---

### List every instance of UserInterest

The `customer.userInterests.list()` returns all of the entities in the account, including `REMOVED` entities. It also returns all other resources that can be selected with each instance of UserInterest.

This method was designed for convenience and discovery. Internally, it uses the `customer.report()` method with all `attributes` fields included. For production code, we recommend using `customer.report()` with only the fields you need.

#### Arguments

- **`options`** (_optional_): Object of the form `{ limit, order_by, constraints }`:
  - **`limit`** (_optional, number_): Number of rows to return. Equivalent to the limit in `customer.report()`. Defaults to no limit.
  - **`order_by`** (_optional, string_): The field to sort the returned rows by. Equivalent to the order_by in `customer.report()`. By default, no sorting is applied.
  - **`constraints`** (_optional, array/object_): A constraints array or object. See the `customer.report()` documentation for details. By default, all entities are returned.

#### Returns

Returns an array of objects.
Each object has a `user_interest` property. Any other resources that can be selected with `user_interest` will also be added as properities.

```javascript
// Listing all the userInterests in the account
let result = await customer.userInterests.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.userInterests.list({
  constraints: [
    {
      key: 'user_interest.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'user_interest.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    user_interest: {
      resource_name: 'customers/9262111890/userInterests/80240',
      availabilities: [
        {
          channel: {
            availabilityMode: 4,
            advertisingChannelType: 3,
            advertisingChannelSubTypeList: [7],
            includeDefaultChannelSubType: { value: false },
          },
          localeList: [{ availabilityMode: 2 }],
        },
        {
          channel: {
            availabilityMode: 3,
            advertisingChannelType: 2,
            advertisingChannelSubTypeList: [],
            includeDefaultChannelSubType: { value: true },
          },
          localeList: [
            { availabilityMode: 4, languageCode: { value: 'ar' } },
            { availabilityMode: 4, languageCode: { value: 'bg' } },
            { availabilityMode: 4, languageCode: { value: 'ca' } },
            { availabilityMode: 4, languageCode: { value: 'cs' } },
            { availabilityMode: 4, languageCode: { value: 'da' } },
            { availabilityMode: 4, languageCode: { value: 'de' } },
            { availabilityMode: 4, languageCode: { value: 'el' } },
            { availabilityMode: 4, languageCode: { value: 'en' } },
            { availabilityMode: 4, languageCode: { value: 'es' } },
            { availabilityMode: 4, languageCode: { value: 'et' } },
            { availabilityMode: 4, languageCode: { value: 'fi' } },
            { availabilityMode: 4, languageCode: { value: 'fr' } },
            { availabilityMode: 4, languageCode: { value: 'hi' } },
            { availabilityMode: 4, languageCode: { value: 'hr' } },
            { availabilityMode: 4, languageCode: { value: 'hu' } },
            { availabilityMode: 4, languageCode: { value: 'id' } },
            { availabilityMode: 4, languageCode: { value: 'it' } },
            { availabilityMode: 4, languageCode: { value: 'iw' } },
            { availabilityMode: 4, languageCode: { value: 'ja' } },
            { availabilityMode: 4, languageCode: { value: 'ko' } },
            { availabilityMode: 4, languageCode: { value: 'lt' } },
            { availabilityMode: 4, languageCode: { value: 'lv' } },
            { availabilityMode: 4, languageCode: { value: 'nl' } },
            { availabilityMode: 4, languageCode: { value: 'no' } },
            { availabilityMode: 4, languageCode: { value: 'pl' } },
            { availabilityMode: 4, languageCode: { value: 'pt' } },
            { availabilityMode: 4, languageCode: { value: 'ro' } },
            { availabilityMode: 4, languageCode: { value: 'ru' } },
            { availabilityMode: 4, languageCode: { value: 'sk' } },
            { availabilityMode: 4, languageCode: { value: 'sl' } },
            { availabilityMode: 4, languageCode: { value: 'sr' } },
            { availabilityMode: 4, languageCode: { value: 'sv' } },
            { availabilityMode: 4, languageCode: { value: 'th' } },
            { availabilityMode: 4, languageCode: { value: 'tr' } },
            { availabilityMode: 4, languageCode: { value: 'uk' } },
            { availabilityMode: 4, languageCode: { value: 'vi' } },
            { availabilityMode: 4, languageCode: { value: 'zh_CN' } },
            { availabilityMode: 4, languageCode: { value: 'zh_TW' } },
          ],
        },
        {
          channel: {
            availabilityMode: 3,
            advertisingChannelType: 3,
            advertisingChannelSubTypeList: [],
            includeDefaultChannelSubType: { value: true },
          },
          localeList: [
            { availabilityMode: 4, languageCode: { value: 'ar' } },
            { availabilityMode: 4, languageCode: { value: 'bg' } },
            { availabilityMode: 4, languageCode: { value: 'bn' } },
            { availabilityMode: 4, languageCode: { value: 'ca' } },
            { availabilityMode: 4, languageCode: { value: 'cs' } },
            { availabilityMode: 4, languageCode: { value: 'da' } },
            { availabilityMode: 4, languageCode: { value: 'de' } },
            { availabilityMode: 4, languageCode: { value: 'el' } },
            { availabilityMode: 4, languageCode: { value: 'en' } },
            { availabilityMode: 4, languageCode: { value: 'es' } },
            { availabilityMode: 4, languageCode: { value: 'et' } },
            { availabilityMode: 4, languageCode: { value: 'fi' } },
            { availabilityMode: 4, languageCode: { value: 'fr' } },
            { availabilityMode: 4, languageCode: { value: 'hi' } },
            { availabilityMode: 4, languageCode: { value: 'hr' } },
            { availabilityMode: 4, languageCode: { value: 'hu' } },
            { availabilityMode: 4, languageCode: { value: 'id' } },
            { availabilityMode: 4, languageCode: { value: 'it' } },
            { availabilityMode: 4, languageCode: { value: 'iw' } },
            { availabilityMode: 4, languageCode: { value: 'ja' } },
            { availabilityMode: 4, languageCode: { value: 'ko' } },
            { availabilityMode: 4, languageCode: { value: 'lt' } },
            { availabilityMode: 4, languageCode: { value: 'lv' } },
            { availabilityMode: 4, languageCode: { value: 'ms' } },
            { availabilityMode: 4, languageCode: { value: 'nl' } },
            { availabilityMode: 4, languageCode: { value: 'no' } },
            { availabilityMode: 4, languageCode: { value: 'pl' } },
            { availabilityMode: 4, languageCode: { value: 'pt' } },
            { availabilityMode: 4, languageCode: { value: 'ro' } },
            { availabilityMode: 4, languageCode: { value: 'ru' } },
            { availabilityMode: 4, languageCode: { value: 'sk' } },
            { availabilityMode: 4, languageCode: { value: 'sl' } },
            { availabilityMode: 4, languageCode: { value: 'sr' } },
            { availabilityMode: 4, languageCode: { value: 'sv' } },
            { availabilityMode: 4, languageCode: { value: 'th' } },
            { availabilityMode: 4, languageCode: { value: 'tl' } },
            { availabilityMode: 4, languageCode: { value: 'tr' } },
            { availabilityMode: 4, languageCode: { value: 'uk' } },
            { availabilityMode: 4, languageCode: { value: 'ur' } },
            { availabilityMode: 4, languageCode: { value: 'vi' } },
            { availabilityMode: 4, languageCode: { value: 'zh_CN' } },
            { availabilityMode: 4, languageCode: { value: 'zh_TW' } },
          ],
        },
        {
          channel: {
            availabilityMode: 3,
            advertisingChannelType: 6,
            advertisingChannelSubTypeList: [],
            includeDefaultChannelSubType: { value: true },
          },
          localeList: [
            { availabilityMode: 4, languageCode: { value: 'ar' } },
            { availabilityMode: 4, languageCode: { value: 'bg' } },
            { availabilityMode: 4, languageCode: { value: 'ca' } },
            { availabilityMode: 4, languageCode: { value: 'cs' } },
            { availabilityMode: 4, languageCode: { value: 'da' } },
            { availabilityMode: 4, languageCode: { value: 'de' } },
            { availabilityMode: 4, languageCode: { value: 'el' } },
            { availabilityMode: 4, languageCode: { value: 'en' } },
            { availabilityMode: 4, languageCode: { value: 'es' } },
            { availabilityMode: 4, languageCode: { value: 'et' } },
            { availabilityMode: 4, languageCode: { value: 'fi' } },
            { availabilityMode: 4, languageCode: { value: 'fr' } },
            { availabilityMode: 4, languageCode: { value: 'hi' } },
            { availabilityMode: 4, languageCode: { value: 'hr' } },
            { availabilityMode: 4, languageCode: { value: 'hu' } },
            { availabilityMode: 4, languageCode: { value: 'id' } },
            { availabilityMode: 4, languageCode: { value: 'it' } },
            { availabilityMode: 4, languageCode: { value: 'iw' } },
            { availabilityMode: 4, languageCode: { value: 'ja' } },
            { availabilityMode: 4, languageCode: { value: 'ko' } },
            { availabilityMode: 4, languageCode: { value: 'lt' } },
            { availabilityMode: 4, languageCode: { value: 'lv' } },
            { availabilityMode: 4, languageCode: { value: 'nl' } },
            { availabilityMode: 4, languageCode: { value: 'no' } },
            { availabilityMode: 4, languageCode: { value: 'pl' } },
            { availabilityMode: 4, languageCode: { value: 'pt' } },
            { availabilityMode: 4, languageCode: { value: 'ro' } },
            { availabilityMode: 4, languageCode: { value: 'ru' } },
            { availabilityMode: 4, languageCode: { value: 'sk' } },
            { availabilityMode: 4, languageCode: { value: 'sl' } },
            { availabilityMode: 4, languageCode: { value: 'sr' } },
            { availabilityMode: 4, languageCode: { value: 'sv' } },
            { availabilityMode: 4, languageCode: { value: 'th' } },
            { availabilityMode: 4, languageCode: { value: 'tr' } },
            { availabilityMode: 4, languageCode: { value: 'uk' } },
            { availabilityMode: 4, languageCode: { value: 'vi' } },
            { availabilityMode: 4, languageCode: { value: 'zh_CN' } },
            { availabilityMode: 4, languageCode: { value: 'zh_TW' } },
          ],
        },
      ],
      launched_to_all: false,
      name: 'My user interest',
      taxonomy_type: 3,
      user_interest_id: 80240,
      user_interest_parent: 'customers/9262111890/userInterests/80237',
    },
  },
]
```
