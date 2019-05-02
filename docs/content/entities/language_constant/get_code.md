---
title: Get LanguageConstant
order: 2.1
type: get_code
entity: LanguageConstant
---

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
