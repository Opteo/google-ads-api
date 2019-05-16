---
title: Get BiddingStrategy
order: 2.1
type: get_code
entity: BiddingStrategy
---

```javascript
// Getting the entity
let result = await customer.biddingStrategies.get('customers/3827277046/biddingStrategies/1534381593')
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/biddingStrategies/1534381593',
  campaign_count: 0,
  id: 1534381593,
  name: 'My bidding strategy',
  non_removed_campaign_count: 0,
  status: 2,
  type: 2,
})
```
