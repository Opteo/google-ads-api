---
title: Get MediaFile
order: 2.1
type: get_code
entity: MediaFile
---

```javascript
// Getting the entity
let result = await customer.mediaFiles.get('customers/3827277046/mediaFiles/44067075104')
```

```javascript
// Example result
;({
  file_size: 5159,
  id: 44067075104,
  mime_type: 2,
  name: '',
  resource_name: 'customers/3827277046/mediaFiles/44067075104',
  source_url:
    'https://lh3.googleusercontent.com/D3DAe038umSn2ap4q_Ll7HPSTNj5szBbJNOoXeblYkmlZHCGg1JiIq45WIr_CEGM9FXoH1vb9Hi1gF7CLw',
  type: 2,
})
```
