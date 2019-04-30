---
title: Create Campaign
order: 4
type: create
entity: Campaign
---

### Create Campaign

This section describes how to create a Campaign.

```javascript
// Creating the entity

const campaign = {
  // Your Campaign here, without immutable fields such as resource_name
}

const result = await customer.campaigns.create(campaign)
```

```javascript
// Example result
;['customers/9262111890/campaigns/1568629385']
```
