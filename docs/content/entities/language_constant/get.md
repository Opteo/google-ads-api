---
title: Get LanguageConstant
order: 2
type: get
entity: LanguageConstant
---

### Get LanguageConstant

The `customer.languageConstants.get()` method returns all fields for one LanguageConstant, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.languageConstants.get('languageConstants/1150')
```

```javascript
// Example result
;({
  resource_name: 'languageConstants/1150',
  code: 'zh_HK',
  id: 1150,
  name: 'Chinese (Hong Kong SAR)',
  targetable: false,
})
```
