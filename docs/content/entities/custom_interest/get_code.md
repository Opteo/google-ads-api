---
title: Get CustomInterest
order: 2.1
type: get_code
entity: CustomInterest
---

```javascript
// Getting the entity
let result = await customer.customInterests.get('customers/3827277046/customInterests/13338354')
```

```javascript
// Example result
;({
  description: '',
  id: 13338354,
  members: [
    { member_type: 2, parameter: 'ppc' },
    { member_type: 2, parameter: 'google adwords ppc campaign' },
    { member_type: 2, parameter: 'google adwords ppc advertising' },
    { member_type: 2, parameter: 'ppc and google adwords' },
    { member_type: 2, parameter: 'is google adwords ppc' },
    { member_type: 2, parameter: 'google adwords ppc cost' },
    { member_type: 2, parameter: 'ppc google advertising' },
    { member_type: 2, parameter: 'google ads ppc' },
    { member_type: 2, parameter: 'google ad word campaign' },
    { member_type: 2, parameter: 'google ppc marketing' },
    { member_type: 2, parameter: 'google advertising adwords' },
    { member_type: 2, parameter: 'google ppc campaign' },
    { member_type: 2, parameter: 'what is google ppc advertising' },
    { member_type: 2, parameter: 'adwords ppc campaign' },
    { member_type: 2, parameter: 'google ppc agency' },
    { member_type: 2, parameter: 'google adwords agency' },
    { member_type: 2, parameter: 'google ppc' },
    { member_type: 2, parameter: 'google ppc services' },
    { member_type: 2, parameter: 'google ppc cost' },
    { member_type: 2, parameter: 'what is google ppc' },
    { member_type: 2, parameter: 'google ppc courses' },
    { member_type: 2, parameter: 'google ads' },
    { member_type: 2, parameter: 'adwords' },
  ],
  name: 'My custom interest',
  resource_name: 'customers/3827277046/customInterests/13338354',
  status: 2,
  type: 3,
})
```
