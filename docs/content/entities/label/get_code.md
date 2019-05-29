---
title: Get Label
order: 2.1
type: get_code
entity: Label
---

```javascript
// Getting the entity
let result = await customer.labels.get('customers/3827277046/labels/3345231412')
```

```javascript
// Example result
;({
  id: 3345231412,
  name: 'My label',
  resource_name: 'customers/3827277046/labels/3345231412',
  status: 2,
  text_label: { background_color: '#E993EB', description: 'Adgroups where Chloe will write new ads that kick butt.' },
})
```
