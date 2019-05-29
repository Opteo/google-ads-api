---
type: list_code
entity: LanguageConstant
title: List LanguageConstant
order: 3.1
---

```javascript
// Listing all the languageConstants in the account
let result = await customer.languageConstants.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.languageConstants.list({
  constraints: [
    {
      key: 'language_constant.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'language_constant.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    language_constant: {
      code: 'zh_TW',
      id: 1018,
      name: 'Chinese (traditional)',
      resource_name: 'languageConstants/1018',
      targetable: true,
    },
  },
]
```
