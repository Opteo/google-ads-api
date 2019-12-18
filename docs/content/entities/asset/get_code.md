---
title: Get Asset
order: 2.1
type: get_code
entity: Asset
---

```javascript
// Getting the entity
let result = await customer.assets.get('customers/3827277046/assets/225386305')
```

```javascript
// Example result
;({
  id: 225386305,
  image_asset: {
    file_size: 472254,
    full_size: {
      height_pixels: 628,
      url: 'https://tpc.googlesyndication.com/simgad/11290736009894828590',
      width_pixels: 1200,
    },
    mime_type: 4,
  },
  name: '',
  resource_name: 'customers/3827277046/assets/225386305',
  type: 4,
})
```
