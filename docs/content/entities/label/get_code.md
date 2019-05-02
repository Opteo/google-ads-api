---
title: Get Label
order: 2.1
type: get_code
entity: Label
---

```javascript
// Getting the entity
let result = await customer.labels.get('customers/3827277046/labels/872103121')
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/labels/872103121',
  id: 872103121,
  name: 'My label',
  status: 2,
  text_label: { background_color: '#6633FF', description: 'Non brand, traditional cold traffic via search' },
})
```
